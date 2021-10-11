import React from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";

const Tier: React.FC<{
  id: string;
  treeId: string;
  tier: any;
  x: number;
  y: number;
}> = ({ id, treeId, tier, x, y }) => {
  const updateArrow = useXarrow();

  return (
    <Draggable onDrag={updateArrow} onStop={updateArrow}>
      <div
        id={id}
        className="tree__new-tier-btn tree__node"
        role="button"
        style={{ left: x, top: y }}
      >
        {tier.name}
      </div>
    </Draggable>
  );
};

export default Tier;
