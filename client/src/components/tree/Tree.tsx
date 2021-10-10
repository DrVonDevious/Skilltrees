import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTree, fetchTreeTiers } from "../../app/requests";
import NewTierButton from "./NewTierButton";
import TreeHeader from "./TreeHeader";

const Tree: React.FC = () => {
  const { id } = useParams<{id: string}>();

  const [ tree, setTree ] = useState<{ name: string }>({
    name: "",
  });
  const [ tiers, setTiers ] = useState([]);

  const getTree = async () => {
    const tree = await fetchTree(id);
    setTree(tree);
  };

  const getTiers = async () => {
    const tiers = await fetchTreeTiers(id);
    setTiers(tiers);
  };

  useEffect(() => {
    getTree();
    getTiers();
  }, []);

  return (
    <div className="tree">
      <TreeHeader treeName={tree.name} />
      <NewTierButton id={id} tierCount={tiers.length} />
      {tiers.map((tier: any) => (
        <div className="tree__new-tier-btn">{tier.name}</div>
      ))}
    </div>
  );
};

export default Tree;
