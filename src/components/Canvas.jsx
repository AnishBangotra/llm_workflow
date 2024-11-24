import React, { useEffect, useMemo } from "react";
import { useDrop } from "react-dnd";
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ReactComponent as DragDrop } from '../icons/DragDrop.svg';
import { ReactComponent as ChatIcon } from '../icons/ChatIcon.svg';
import InputNode from "./InputNode";
import LLMNode from "./LLMNode";
import OutputNode from "./OutputNode";
import StraightEdge from "./StraightEdge";
import { Notify } from "./Notify";

const useResizeObserver = () => {
  useEffect(() => {
    let resizeTimeout;

    const observer = new ResizeObserver(() => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize logic here
      }, 200);
    });

    observer.observe(document.body);  // You can replace document.body with a specific element to observe

    return () => {
      observer.disconnect();  // Clean up observer on unmount
    };
  }, []);
};

const Canvas = ({ 
    nodes, 
    edges,
    nodeErrors,
    success,
    setSuccess,
    error,
    setError,
    errorMessage,
    onNodesChange,
    onEdgesChange, 
    onConnect, 
    setNodes, 
    outputData,
    setInputData,
    setLLMConfig,
    hasNodes 
  }) => {
  
  useResizeObserver(); 
  const [, drop] = useDrop(() => ({
    accept: "node",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (offset) {
        const newNode = {
          id: `${item.type}-${Date.now()}`,
          type: item.type,
          position: { x: offset.x, y: offset.y },
          data: { 
            label: item.type, 
            setLLMConfig: item.type === "llm" ? setLLMConfig : undefined,
            setInputData: item.type === "first" ? setInputData : undefined,
            outputData: item.type === "last" ? outputData : undefined
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }
    },
  }));

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        style: {
          ...node.style,
          borderRadius: "12px",
          border: nodeErrors[node.type] ? "1px solid #FF5353" : "1px solid #ddd"
        },
      }))
    );
  }, [nodeErrors, setNodes]);

  const nodeTypes = useMemo(
    () => ({
      first: (props) => <InputNode {...props} hasError={nodeErrors?.first} success={success} />,
      llm: (props) => <LLMNode {...props} hasError={nodeErrors?.llm} success={success} />,
      last: (props) => <OutputNode {...props} success={success} outputData={outputData}/>
    }),
    [nodeErrors, outputData] 
  );

  const edgeTypes = useMemo(() => ({
    default: StraightEdge,  // Define the custom edge component here
  }), []);

  return (
    <div ref={drop} style={{ flex: 1, height: "100%", backgroundColor: "#eaeaea" }}>
        {!hasNodes && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "57%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}>
            <DragDrop />
          </div>
        )}
        {error ? <Notify func={setError} message={errorMessage} color="#FF5353" title={'Error while running the flow'} /> : null}
        {success ? <Notify func={setSuccess} message={'Your workflow is ready to proceed'} color="#0FA958" title={'Flow ran successfully'}/> : null}
       <ReactFlow 
          defaultPosition={[10, 15]} 
          defaultZoom={5} 
          nodes={nodes} 
          edges={edges} 
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
        >
          <Background />
          <div style={{
            position: "absolute",
            left: "320px",
            bottom: "0px"
          }}>
            <Controls />
          </div>
        </ReactFlow>
        <div style={{
          position: 'absolute',
          left: '96%',
          top: '95%',
          cursor: 'pointer',
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}>
          <ChatIcon style={{ opacity: '0.5'}} onClick={() => alert('Chat is Disabled')}/>
        </div>
    </div>
  );
};

export default Canvas;
