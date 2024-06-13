import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseToGetAIContest = () => {
  const { data: AIContest = [], refetch } = useQuery({
    queryKey: ["AIContest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/AI");
      return res.data;
    },
  });
  return [AIContest, refetch];
};

export default UseToGetAIContest;
