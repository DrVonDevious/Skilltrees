const _catchFetchErrors = async (response: any) => {
  console.log(response);
  if (response.status >= 200 && response.status <= 299) {
    return await response.json();
  } else {
    console.log(response.status, response.statusText);
    return;
  } 
};

export const fetchAllTrees = async () => {
  const response = await fetch(`http://localhost:8020/trees`);
  return await _catchFetchErrors(response);
};

export const fetchTreeTiers = async (treeId: string) => {
  const response = await fetch(`http://localhost:8020/trees/${treeId}/tiers`);
  return await _catchFetchErrors(response);
};

export const fetchTree = async (id: string) => {
  const response = await fetch(`http://localhost:8020/trees/${id}`);
  return await _catchFetchErrors(response);
};

export const createTree = async (name: string) => {
  const response = await fetch("http://localhost:8020/trees", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      description: "",
    }),
  });
  return await _catchFetchErrors(response);
};

export const createTier = async (name: string, treeId: string, tierCount: number) => {
  const response = await fetch(`http://localhost:8020/trees/${treeId}/tiers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      description: "",
      position: tierCount + 1,
      treeId,
    }),
  });
  return await _catchFetchErrors(response);
};
