import React from "react";
import { createTier } from "../../app/requests";

const NewTierButton: React.FC<{id: string, tierCount: number}> = ({ id, tierCount }) => {
  const handleClick = (treeId: string) => {
    createTier("Boiling", treeId, tierCount);
  };

  return (
    <div
      className="tree__new-tier-btn"
      role="button"
      onClick={() => handleClick(id)}
    >
      New Tier
    </div>
  );
};

export default NewTierButton;
