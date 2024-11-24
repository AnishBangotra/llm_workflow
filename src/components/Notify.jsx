import React from 'react';
import { ReactComponent as CrossIcon } from '../icons/CrossIcon.svg'

export const Notify = ({ message, color, title, func }) => {
    const truncatedMessage = message.length > 100 ? `${message.slice(0, 100)}...` : message;
    return (
        <div style={{
            position: 'absolute',
            top: "10%",
            right: "0%",
            transform: "translate(-50%, -50%)",
            width: "426px",
            backgroundColor: color,
            borderRadius: "14px",
            height: "70px",
            alignItems: 'center',
            fontFamily: "'Inter', sans-serif",
            display: "flex",
            margin: "10px",
            zIndex: 10,
            gap: '4px'
        }}>
            <div style={{
                marginLeft: '65px',
                width: '100%',
                marginBottom: '2px',
            }}>
                <p style={{
                    color: "#fff",
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: "'Inter', sans-serif",
                    margin: "0 0 10px 0"
                }}>
                    {title}
                </p>
                <p style={{
                    color: "#fff",
                    fontSize: '14px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif",
                    margin: "0"
                }}>
                    {truncatedMessage}
                </p>
            </div>
            <CrossIcon 
                style={{
                    cursor: 'pointer', 
                    position: "absolute",
                    top: "10px",
                    left: "30px",
                }} 
                onClick={() => func(false)}
            />
        </div>
    );
}
