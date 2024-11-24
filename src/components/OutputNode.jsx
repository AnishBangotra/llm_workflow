import React, { useRef, useEffect } from "react";
import { ReactComponent as OutputIcon } from '../icons/OutputIcon.svg';
import { Handle } from "@xyflow/react";

const OutputNode = ({ data, outputData, success }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [outputData]);
    return (
        <div
          style={{
            borderRadius: "12px",
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
                <OutputIcon />
                <span style={{ marginLeft: '10px', fontWeight: "bold", fontSize: "16px" }}>OUTPUT</span>
            </div>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: success ? "#0FA958" : "#888",
                borderRadius: "50%",
              }}
            ></div>
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
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#666666",
                    marginLeft: "15px"
                }}
            >
                LLM Output to your request
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
              Output Response 
            </label>
            <textarea
                id="output"
                ref={textareaRef}
                value={outputData}
                disabled
                style={{
                    width: "93%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                    resize: "none", // Disable resizing by the user
                    overflow: "hidden", // Hide any unintended overflow
                    whiteSpace: "pre-wrap", // Ensure text wraps to the next line
                }}
                rows={outputData ? Math.ceil(outputData.length / 50) : 1} // Dynamically calculate rows
                />
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: "20px",
            marginRight: "20px",
            // marginLeft: "55%", 
            // marginTop: "10px"
        }}>
            <Handle
                type="target"
                position="left"
                style={{ 
                    top: "90%", 
                    background: "#fff",
                    width: "12px", 
                    height: "12px",
                    borderRadius: "50%",
                    border: '1px solid #5DB6F6'
                }}
                id="output-target"
            />
            <span style={{
                fontSize: "12px",
                color: "#555",
                marginBottom: "5px",
                fontWeight: "500",
            }}>LLM Engine</span>
        </div>
        </div>
      );
};

export default OutputNode;