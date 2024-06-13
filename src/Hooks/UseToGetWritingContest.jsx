import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseToGetWritingContest = () => {
  const { data: writingContest = [], refetch } = useQuery({
    queryKey: ["writingContest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/writing");
      return res.data;
    },
  });
  return [writingContest, refetch];
};

export default UseToGetWritingContest;
