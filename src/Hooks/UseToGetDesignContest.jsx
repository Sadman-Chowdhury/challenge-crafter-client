import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseToGetDesignContest = () => {
  const { data: designContest = [], refetch } = useQuery({
    queryKey: ["designContest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/design");
      return res.data;
    },
  });
  return [designContest, refetch];
};

export default UseToGetDesignContest;
