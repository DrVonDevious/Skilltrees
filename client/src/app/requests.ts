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

export const fetchTierBranches = async (treeId: string, tierId: string) => {
  const response = await fetch(
    `http://localhost:8020/trees/${treeId}/tiers/${tierId}`
  );
  return await _catchFetchErrors(response);
};

export const fetchTree = async (id: string) => {
  const response = await fetch(`http://localhost:8020/trees/${id}`);
  return await _catchFetchErrors(response);
};

export const fetchTier = async (treeId: string, tierId: string) => {
  const response = await fetch(
    `http://localhost:8020/trees/${treeId}/tiers/${tierId}`
  );
  return await _catchFetchErrors(response);
};

export const fetchBranch = async (
  treeId: string,
  tierId: string,
  branchId: string
) => {
  const response = await fetch(
    `http://localhost:8020/trees/${treeId}/tiers/${tierId}/branches/${branchId}`
  );
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

export const createTier = async (
  name: string,
  treeId: string,
  tierCount: number
) => {
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

export const createBranch = async (
  name: string,
  treeId: string,
  tierId: string,
  branchId: string,
  branchCount: number
) => {
  const response = await fetch(
    `http://localhost:8020/trees/${treeId}/tiers/${tierId}/branches`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description: "",
        position: branchCount + 1,
        tierId,
        branchId,
      }),
    }
  );
  return await _catchFetchErrors(response);
};

export const deleteTree = async (treeId: string) => {
  const response = await fetch(`http://localhost:8020/trees/${treeId}`, {
    method: "DELETE",
  });
  return await _catchFetchErrors(response);
};

export const deleteTier = async (treeId: string, tierId: string) => {
  const response = await fetch(
    `http://localhost:8020/trees/${treeId}/tiers/${tierId}`,
    {
      method: "DELETE",
    }
  );
  return await _catchFetchErrors(response);
};

export const deleteBranch = async (
  treeId: string,
  tierId: string,
  branchId: string
) => {
  const response = await fetch(
    `http://localhost:8020/trees/${treeId}/tiers/${tierId}/branches/${branchId}`,
    {
      method: "DELETE",
    }
  );
  return await _catchFetchErrors(response);
};
