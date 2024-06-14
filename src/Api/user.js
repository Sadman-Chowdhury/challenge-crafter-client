import axiosSecure from ".";

export const deleteUser = async (id) => {
  const { data } = await axiosSecure.delete(`/deleteUser/${id}`);
  return data;
};
