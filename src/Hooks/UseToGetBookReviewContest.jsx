import axiosSecure from "../Api";
import { useQuery } from "@tanstack/react-query";

const UseToGetBookReviewContest = () => {
  const { data: bookReviewContest = [], refetch } = useQuery({
    queryKey: ["Book Review"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/bookReview");
      return res.data;
    },
  });
  return [bookReviewContest, refetch];
};

export default UseToGetBookReviewContest;
