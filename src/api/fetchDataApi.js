export const getUsers = async (url, method = "GET", bodyContent) => {
  const result = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyContent),
  });
  const response = {
    data: (await result.json()) || [],
  };
  return response;
};
