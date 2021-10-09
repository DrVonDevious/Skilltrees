import React from "react";

type TreeHeaderProps = {
  treeName: string;
};

const TreeHeader: React.FC<TreeHeaderProps> = ({ treeName }) => {
  return (
    <div className="tree__header">
      <span className="tree__header--title">{treeName}</span>
    </div>
  );
};

export default TreeHeader
