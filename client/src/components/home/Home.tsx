import React from "react";
import NewTreeButton from "./NewTreeButton";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="home__header-text">Get Started By Creating A New SkillTree!</h1>
      <NewTreeButton />
    </div>
  );
};

export  default Home;
