import React from 'react';

const StraightEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) => {
  const path = `M${sourceX},${sourceY}L${targetX},${targetY}`;

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={path}
      style={{
        strokeWidth: 2,
        stroke: '#888',
        strokeDasharray: '5, 5',
      }}
      markerEnd="url(#arrow)"
    />
  );
};

export default StraightEdge;
