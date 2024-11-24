// src/edges/StraightEdge.js
import React from 'react';
import { EdgeProps } from 'reactflow';

const StraightEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) => {
  // Calculate the straight path (a line between the source and target coordinates)
  const path = `M${sourceX},${sourceY}L${targetX},${targetY}`;

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={path}  // Use a simple line (M = move, L = line to)
      style={{
        strokeWidth: 2,
        stroke: '#888',
        strokeDasharray: '5, 5', // Create breaks or dashed lines
      }}
      markerEnd="url(#arrow)"
    />
  );
};

export default StraightEdge;
