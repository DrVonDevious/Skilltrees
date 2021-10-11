import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useParams } from "react-router-dom";
import Xarrow, { Xwrapper } from "react-xarrows";
import { fetchTree, fetchTreeTiers } from "../../app/requests";
import NewTierButton from "./NewTierButton";
import Tier from "./Tier";
import TreeHeader from "./TreeHeader";

const Tree: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [tree, setTree] = useState<{ name: string }>({
    name: "",
  });
  const [tiers, setTiers] = useState([]);
  const [treeSize, setTreeSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

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

    const treeElement = document.querySelector(
      ".tree__container"
    ) as HTMLDivElement;

    if (treeElement) {
      setTreeSize({
        width: treeElement.offsetWidth,
        height: treeElement.offsetHeight,
      });
    }
  }, []);

  return (
    <div className="tree">
      <TreeHeader treeName={tree.name} />
      <ScrollContainer className="tree__container">
        <Xwrapper>
          <NewTierButton
            id="tier-node-0"
            treeId={id}
            tierCount={1}
            x={treeSize.width / 2}
            y={treeSize.height - 128}
          />
          {tiers.map((tier: any, index) => (
            <>
              <Tier
                id={"tier-node-" + (index + 1)}
                treeId={id}
                tier={tier}
                x={treeSize.width / 2}
                y={treeSize.height - 208 - 82 * index}
              />
              <Xarrow
                start={"tier-node-" + index}
                end={"tier-node-" + (index + 1)}
                showHead={false}
              />
            </>
          ))}
        </Xwrapper>
      </ScrollContainer>
    </div>
  );
};

export default Tree;
