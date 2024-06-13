import axiosSecure from ".";

export const getAllContest = async () => {
  const { data } = await axiosSecure("/AllContest");
  return data;
};

export const getCodingContest = async () => {
  const { data } = await axiosSecure("/AllContest/coding");
  return data;
};
