import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchAllTrees } from "../../app/requests";
import NewTreeButton from "./NewTreeButton";

const Home: React.FC = () => {
  const [ trees, setTrees ] = useState([]);
  const history = useHistory();

  const getTrees = async () => {
    const trees = await fetchAllTrees();
    if (trees) setTrees(trees);
  };

  useEffect(() => {
    getTrees();
  }, []);

  return (
    <div className="home">
      <h1 className="home__header-text">Get Started By Creating A New SkillTree!</h1>
      <NewTreeButton />
      {trees.map((tree: any) => (
        <div
          className="home__new-btn"
          onClick={() => history.push(`/trees/${tree.id}`)}
        >{tree.name}</div>
      ))}
    </div>
  );
};

export  default Home;
