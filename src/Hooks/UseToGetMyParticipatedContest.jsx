import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import axiosSecure from "../Api";

const UseToGetMyParticipatedContest = () => {
  const { user } = UseAuth();
  const { data: myContests = [], refetch } = useQuery({
    queryKey: ["myContests", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/myParticipatedContestByEmail`, {
        params: { email: user.email },
      });
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [myContests, refetch];
};

export default UseToGetMyParticipatedContest;
