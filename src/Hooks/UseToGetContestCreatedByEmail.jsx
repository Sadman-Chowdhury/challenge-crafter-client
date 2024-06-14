import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";
import UseAuth from "./UseAuth";

const UseToGetContestCreatedByEmail = () => {
  const { user } = UseAuth();
  const { data: contests = [], refetch } = useQuery({
    queryKey: ["contests", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/contestByEmail`, {
        params: { email: user.email },
      });
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [contests, refetch];
};

export default UseToGetContestCreatedByEmail;
