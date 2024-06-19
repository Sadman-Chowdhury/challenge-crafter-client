import axiosSecure from "../Api";
import { useQuery } from "@tanstack/react-query";

const UseToGetAllWinner = () => {
  const { data: winners = [], refetch } = useQuery({
    queryKey: ["winners"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getContestWinner");
      return res.data;
    },
  });
  return [winners, refetch];
};

export default UseToGetAllWinner;
