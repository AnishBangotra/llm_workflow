import React from "react";
import { ReactComponent as InputIcon } from '../icons/InputIcon.svg';
import { ReactComponent as ErrorPop } from '../icons/ErrorPop.svg';
import { Handle } from "@xyflow/react";

const InputNode = ({ data, hasError, success }) => {

  const handleInputChange = (e) => {
    const value = e.target.value;
    data.setInputData(value);
  }

  return (
    <div
      style={{
        borderRadius: "12px",
        borderColor: hasError ? "1px solid #FF5353" : "1px solid #ddd",
        backgroundColor: "#fff",
        width: "325px", // Set width
        minHeight: "200px", // Set a height consistent with the design
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top Section with the title and dot */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "15px",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <div style={{display: 'flex',  alignItems: 'center'}}>
            <InputIcon />
            <span style={{ marginLeft: '10px', fontWeight: "bold", fontSize: "16px" }}>INPUT</span>
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
            position: "relative", // Enables positioning of the child icon
            display: "flex", // Enables centering content
            alignItems: "center", // Vertical centering
            justifyContent: "center", // Horizontal centering
          }}
        >
            { hasError ? 
            <ErrorPop style={{
                position: 'absolute',
                bottom: '14px'
                // left: "100%",
            }} /> : null }
        </div>
      </div>

      {/* Input description */}
      <div style={{
            height: '48.28px', 
            backgroundColor: '#EEF4FF', 
            display: 'flex',
            alignItems: 'center'
        }}>
        <p
            style={{
                fontSize: "14px",
                color: "#666666",
                fontFamily: "'Inter', sans-serif",
                marginLeft: "15px"
            }}
        >
            Write the input/question you want to ask
        </p>
      </div>

      {/* Input Field */}
      <div style={{padding: '18px'}}>
        <label
          htmlFor="input"
          style={{
            display: "block",
            marginBottom: "10px",
            fontSize: "14px",
            fontWeight: "400"
          }}
        >
          Input
        </label>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Type Something..."
          style={{
            width: "93%",
            height: "35px",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        padding: "20px",
        paddingBottom: "40px",
      }}>
        <span style={{
            position: 'absolute',
            right: "20px",
            fontSize: "12px",
            color: "#555",
            fontWeight: "500",
        }}>LLM Engine</span>
         <Handle
          type="source"
          position="right"
          style={{ 
            width: "12px", 
            height: "12px",
            top: "90%", 
            borderRadius: "50%",
            background: "#fff",
            border: '1px solid #7D5AC7' 
          }}
          id="input-source"
        />
      </div>
    </div>
  );
};

export default InputNode;
