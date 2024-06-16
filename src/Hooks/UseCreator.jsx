import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";
import UseAuth from "./UseAuth";

const UseCreator = () => {
  const { user, loading } = UseAuth();

  const { data: isCreator, isPending: isCreatorLoading } = useQuery({
    queryKey: [user?.email, "isCreator"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users/creator/${user.email}`);
      //   console.log(res.data);
      return res.data?.creator;
    },
  });
  return [isCreator, isCreatorLoading];
};

export default UseCreator;
