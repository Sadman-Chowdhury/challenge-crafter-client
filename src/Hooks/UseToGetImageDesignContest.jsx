import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseToGetImageDesignContest = () => {
  const { data: imageDesignContest = [], refetch } = useQuery({
    queryKey: ["Image design"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/imageDesign");
      return res.data.filter((contest) => contest.status === "accepted");
    },
  });
  return [imageDesignContest, refetch];
};

export default UseToGetImageDesignContest;
