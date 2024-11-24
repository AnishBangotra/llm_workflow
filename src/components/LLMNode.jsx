import React from "react";
import { ReactComponent as LLMIcon } from '../icons/LLMIcon.svg';
import { Handle } from "@xyflow/react";
import "../css/LLMNode.css";

const LLMNode = ({ data, hasError, success }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    data.setLLMConfig((prevConfig) => ({
        ...prevConfig,
        [name]: value,
    }));
  }

  return (
    <div className="llm-node">
      <div className="llm-node-header">
        <div style={{display: 'flex',  alignItems: 'center', justifyContent: 'center'}}>
            <LLMIcon />
            <span style={{marginLeft: '10px', fontSize: '16px', fontWeight: 'bold'}}>LLM ENGINE</span>
        </div>
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: hasError 
            ? "#FF5353"  
            : success 
              ? "#0FA958" 
              : "#888",   
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div style={{
            height: '48.28px', 
            backgroundColor: '#EEF4FF', 
            display: 'flex',
            alignItems: 'center'
        }}>
            <p className="llm-node-description">LLM system configuration </p> 
      </div>
      <div className="llm-node-content">
        <div className="input-group">
          <label>Model Name</label>
          <select
            name="model"
            value={data.setLLMConfig.model}
            onChange={handleChange}
          >
            <option>gpt-3.5-turbo</option>
            {/* <option>text-ada-001</option>
            <option>gpt-4.0</option> */}
          </select>
        </div>
        <div className="input-group">
          <label>OpenAI API Base</label>
          <input 
            name="baseUrl"
            type="text"
            value={data.setLLMConfig.baseUrl}  
            onChange={handleChange}
            placeholder="type something" 
          />
        </div>
        <div className="input-group">
          <label>OpenAI Key</label>
          <input
            type="password"
            name="apiKey"
            value={data.setLLMConfig.apiKey}  
            onChange={handleChange}
            placeholder="type something"
          />
        </div>
        <div className="input-group">
          <label>Max Tokens</label>
          <input 
            name="maxTokens" 
            type="text" 
            value={data.setLLMConfig.maxTokens}  
            onChange={handleChange}
            placeholder="type something" 
          />
        </div>
        <div className="input-group">
          <label>Temperature</label>
          <input 
            type="number"
            name="temperature"
            value={data.setLLMConfig.temperature}  
            onChange={handleChange}
            placeholder="0.5"
          />
        </div>
      </div>
      <div className="llm-node-ports">
        <div>
            <Handle
                type="target"
                position="left"
                style={{ 
                    top: "96%", 
                    background: "#fff",
                    width: "12px", 
                    height: "12px",
                    border: '1px solid #46C7A8'
                }}
                id="llm-input"
            />
            <span className="port">Input</span>
        </div>
        
        <div> 
            <Handle
                type="source"
                position="right"
                style={{ 
                    top: "96%", 
                    background: "#fff",
                    width: "12px", 
                    height: "12px",
                    border: '1px solid #7D5AC7' 
                }}
                id="llm-output"
            />
            <span className="port">Output</span>
        </div>
      </div>
    </div>
  );
};

export default LLMNode;
