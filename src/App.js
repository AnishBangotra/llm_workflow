import React, { useCallback, useState } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import Canvas from "./components/Canvas";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import { validateAndFetchOutput } from './api/validateAndFetchOutput ';

const initialNodes = [];
 
const initialEdges = [];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hasNodes, setHasNodes] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [nodeErrors, setNodeErrors] = useState({}); 
  const [inputData, setInputData] = useState("");
  const [llmConfig, setLLMConfig] = useState({temperature: 0.5, maxTokens: null, baseUrl: "", apiKey: "", model: "gpt-3.5-turbo" }); 
  const [outputData, setOutputData] = useState("Output Response will be shown here");

  const onConnect = useCallback(
    (connection) => {
      const sourceNode = nodes.find((node) => node.id === connection.source);
      const targetNode = nodes.find((node) => node.id === connection.target);
      
      if (
        (sourceNode?.type === "first" && targetNode?.type === "llm") ||
        (sourceNode?.type === "llm" && targetNode?.type === "last")
      ) {
        setEdges((eds) => addEdge(connection, eds));
      } else {
        console.warn("Invalid connection: Ensure connections follow the correct order");
      }
    },
   [nodes, setEdges]
  );

  const handleNodesChange = useCallback(
    (newNodes) => {
      onNodesChange(newNodes);
      setHasNodes(newNodes.length > 0);
    },
    [onNodesChange]
  );

  const handleSubmit = () => {
    console.log("Edges:", edges);
    const inputToLLM = edges.some(
      (edge) => edge.source === "inputNode" && edge.target === "llmNode"
    );
    const llmToOutput = edges.some(
      (edge) => edge.source === "llmNode" && edge.target === "outputNode"
    );
  
    // If the edges are not connected in the correct order, show an error
    if (edges.length === 2) {
      setSuccess(false);
      setInputData("");;
      setLLMConfig({temperature: 0.5, maxTokens: null, baseUrl: "", apiKey: "", model: "gpt-3.5-turbo" })
      
      let newErrors = { ...nodeErrors };

      // Validate Input Node Data
      if (!inputData.trim()) {
        newErrors = { ...newErrors, first: "Input is missing input key" };
        setError(true);
        setErrorMessage("Enter the required input before running the flow");
        setNodeErrors(newErrors); 
        return;
      } else {
        delete newErrors.first;
      }

      // Validate LLM Node Configuration
      if (!llmConfig.apiKey || !llmConfig.maxTokens || !llmConfig.baseUrl) {
        newErrors = { ...newErrors, llm: "LLM Engine is incomplete." };
        setError(true);
        setErrorMessage("Please enter the required input before running the flow");
        setNodeErrors(newErrors); 
        return;
      } else {
        delete newErrors.llm;
      }

      setNodeErrors({});
      setError(false);
      setErrorMessage("");

      validateAndFetchOutput(inputData, llmConfig, setOutputData, setError, setErrorMessage, setSuccess);
      console.log('OUTPUTTTTTTTTTTTTTTTTTTTTTTT',outputData);
    } else {
      if (!inputToLLM || !llmToOutput) {
        setError(true);
        setErrorMessage("Ensure nodes are connected in the correct order");
        return;
    }
   }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ height: "100vh" }}>
        <Header onRun={handleSubmit}/>
        <div style={{ display: 'flex', height: "calc(100% - 50px)", marginTop: "50px" }}>
        <div
            style={{
              width: "280px", // Fixed width for the sidebar
              height: "100%", // Full height
              left: "25px",
              top: "60px",
              position: "absolute",
              zIndex: 10,
            }}
          >
          <Sidebar />
          </div>
          <Canvas 
            nodes={nodes}
            edges={edges}
            success={success}
            setSuccess={setSuccess}
            error={error}
            setError={setError}
            errorMessage={errorMessage}
            nodeErrors={nodeErrors}
            onNodesChange={handleNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            setNodes={setNodes}
            hasNodes={hasNodes}
            outputData={outputData}
            setInputData={setInputData}
            setLLMConfig={setLLMConfig}
          />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
