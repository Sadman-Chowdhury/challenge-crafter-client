import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseToGetArticleWritingContest = () => {
  const { data: articleWritingContest = [], refetch } = useQuery({
    queryKey: ["Article Writing"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/articleWriting");
      return res.data;
    },
  });
  return [articleWritingContest, refetch];
};

export default UseToGetArticleWritingContest;
