import React from "react";
import { useHistory } from "react-router-dom";

const NewTreeButton: React.FC = () => {
  const history = useHistory();

  const handleClick = async () => {
    const tree = await fetch("http://localhost:8020/trees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Cooking",
        description: "Everything you need to know about cooking",
      }),
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        console.log(data, response);
        return;
      }

      history.push(`/trees/${data.id}`);
    });
    console.log(tree);
  };

  return (
      <div className="home__new-btn" role="button" onClick={handleClick}>New SkillTree</div>
  );
};

export default NewTreeButton;
