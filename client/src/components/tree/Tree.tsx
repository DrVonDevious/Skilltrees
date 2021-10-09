import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTree } from "../../app/requests";
import NewTierButton from "./NewTierButton";
import TreeHeader from "./TreeHeader";

const Tree: React.FC = () => {
  const { id } = useParams<{id: string}>();

  const [ tree, setTree ] = useState<{ name: string }>({
    name: "",
  });

  const getTree = async () => {
    const tree = await fetchTree(id);
    setTree(tree);
  };

  useEffect(() => {
    getTree();
  }, []);

  return (
    <div className="tree">
      <TreeHeader treeName={tree.name} />
      <NewTierButton id={id} />
    </div>
  );
};

export default Tree;
