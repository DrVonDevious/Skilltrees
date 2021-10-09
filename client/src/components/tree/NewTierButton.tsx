import React from "react";
import { createTier } from "../../app/requests";

const NewTierButton: React.FC<{id: string}> = ({ id }) => {
  const handleClick = (treeId: string) => {
    const tier = createTier("Boiling", treeId, 0);
    if (tier) console.log(tier);
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
