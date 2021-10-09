const _catchFetchErrors = async (response: any) => {
  console.log(response);
  if (response.status >= 200 && response.status <= 299) {
    return await response.json();
  } else {
    console.log(response.status, response.statusText);
    return;
  } 
};

export const fetchTree = async (id: string) => {
  const response = await fetch(`http://localhost:8020/trees/${id}`);
  return await _catchFetchErrors(response);
};

export const fetchTier = async () => {};

export const fetchBranch = async () => {};

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

export const createTier = async (tierName: string, treeId: string, tierCount: number) => {
  const response = await fetch(`http://localhost:8020/trees/${treeId}/tiers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tierName,
      description: "",
      position: tierCount + 1,
    }),
  });
  return await _catchFetchErrors(response);
};

export const createBranch = async () => {};
