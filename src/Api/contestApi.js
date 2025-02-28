import axiosSecure from ".";

export const getAllContest = async () => {
  const { data } = await axiosSecure("/AllContest");
  return data;
};

export const getOneContest = async (id) => {
  const { data } = await axiosSecure(`/getOneContest/${id}`);
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

export const updateContest = async (id, contestData) => {
  const { data } = await axiosSecure.patch(`/updateContest/${id}`, contestData);
  return data;
};

export const commentContest = async (id, { comment }) => {
  const { data } = await axiosSecure.patch(`/allContest/comment/${id}`, {
    comment,
  });
  return data;
};

export const bannerContests = async (type) => {
  const { data } = await axiosSecure.get(
    `/AllContests/contestType?contestType=${type}`
  );
  return data;
};

export const UpdateParticipantsCounts = async (id) => {
  const { data } = await axiosSecure.patch(`/updateParticipantsCounts/${id}`);
  return data;
};

export const getParticipatedContestData = async (id) => {
  const { data } = await axiosSecure(`/getParticipatedContestData/${id}`);
  return data;
};

export const postSubmissionDetails = async (contestId, submissionDetails) => {
  try {
    const response = await axiosSecure.post("/submit-contest-task", {
      contestId,
      submissionDetails,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting submission details:", error);
    throw error;
  }
};

//contest winner details
export const postContestWinner = async (contestData) => {
  const { data } = await axiosSecure.post("/postContestWinner", contestData);
  return data;
};
