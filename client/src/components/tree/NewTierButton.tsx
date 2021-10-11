import React from "react";
import { createTier } from "../../app/requests";

const NewTierButton: React.FC<{
  id: string;
  treeId: string;
  tierCount: number;
  x: number;
  y: number;
}> = ({ id, treeId, tierCount, x, y }) => {
  const handleClick = (id: string) => {
    createTier("Boiling", id, tierCount);
  };

  return (
    <div
      id={id}
      className="tree__new-tier-btn tree__node"
      role="button"
      onClick={() => handleClick(treeId)}
      style={{ left: x, top: y }}
    >
      New Tier
    </div>
  );
};

export default NewTierButton;
