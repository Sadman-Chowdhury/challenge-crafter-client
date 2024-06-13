import axiosSecure from "../Api";
import { useQuery } from "@tanstack/react-query";

const UseToGetCodingContest = () => {
  const { data: codingContest = [], refetch } = useQuery({
    queryKey: ["codingContest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/coding");
      return res.data;
    },
  });
  return [codingContest, refetch];
};

export default UseToGetCodingContest;
