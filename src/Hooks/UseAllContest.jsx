import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseAllContest = () => {
  const { data: allContests = [], refetch } = useQuery({
    queryKey: ["allContests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest");
      return res.data;
    },
  });
  return [allContests, refetch];
};

export default UseAllContest;
