import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseToGetGamingContest = () => {
  const { data: gamingReviewContest = [], refetch } = useQuery({
    queryKey: ["Gaming Review"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/gamingReview");
      return res.data;
    },
  });
  return [gamingReviewContest, refetch];
};

export default UseToGetGamingContest;
