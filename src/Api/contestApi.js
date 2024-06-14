import axiosSecure from ".";

export const getAllContest = async () => {
  const { data } = await axiosSecure("/AllContest");
  return data;
};

export const getCodingContest = async () => {
  const { data } = await axiosSecure("/AllContest/coding");
  return data;
};

export const addContest = async (contestData) => {
  const { data } = await axiosSecure.post("/addContest", contestData);
  return data;
};

export const deleteContest = async (id) => {
  const { data } = await axiosSecure.delete(`/deleteContest/${id}`);
  return data;
};
