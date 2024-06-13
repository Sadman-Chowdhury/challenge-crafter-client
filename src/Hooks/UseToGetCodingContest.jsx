import axiosSecure from "../Api";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const UseToGetCodingContest = () => {
  const { user } = UseAuth();
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
