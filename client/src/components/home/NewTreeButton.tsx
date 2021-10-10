import React from "react";
import { useHistory } from "react-router-dom";
import { createTree } from "../../app/requests";

const NewTreeButton: React.FC = () => {
  const history = useHistory();

  const handleClick = async () => {
    const tree = await createTree("Cooking");
    if (tree) history.push(`/trees/${tree.id}`);
  };

  return (
    <div
      className="home__new-btn"
      role="button"
      onClick={handleClick}
    >
      New SkillTree
    </div>
  );
};

export default NewTreeButton;
