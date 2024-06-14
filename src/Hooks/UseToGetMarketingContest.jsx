import axiosSecure from "../Api";
import { useQuery } from "@tanstack/react-query";

const UseToGetMarketingContest = () => {
  const { data: marketingContest = [], refetch } = useQuery({
    queryKey: ["Marketing Strategy"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/marketingStrategy");
      return res.data;
    },
  });
  return [marketingContest, refetch];
};

export default UseToGetMarketingContest;
