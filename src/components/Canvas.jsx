import React from "react";
// import ReactFlow, { ReactFlowProvider, Controls, MiniMap  } from "react-flow-renderer";
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const Canvas = ({ nodes, edges, onNodesChange, onEdgesChange, onConnect }) => {
  const initialNodes = [];
  const initialEdges = [];
  // const defaultViewport: Viewport = { x: 10, y: 15, zoom: 5 };

  return (
       <ReactFlow 
          // defaultViewport={defaultViewport}
          nodes={initialNodes} 
          edges={initialEdges} 
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Background />
          <Controls />
        </ReactFlow>
  );
};

export default Canvas;
