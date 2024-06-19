import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import axiosSecure from "../Api";

const UseToGetWinnerByEmail = () => {
  const { user } = UseAuth();

  const { data: winnerContest = [], refetch } = useQuery({
    queryKey: ["winnerContest", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/winnerContestByEmail`, {
        params: { email: user.email },
      });
      return res.data;
    },
    enabled: !!user?.email,
  });

  return [winnerContest, refetch];
};

export default UseToGetWinnerByEmail;
