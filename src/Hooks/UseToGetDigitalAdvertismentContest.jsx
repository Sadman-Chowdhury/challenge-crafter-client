import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api";

const UseToGetDigitalAdvertismentContest = () => {
  const { data: digitalAdvertismentContest = [], refetch } = useQuery({
    queryKey: ["Digital advertisement"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllContest/digitalAdvertis");
      return res.data;
    },
  });
  return [digitalAdvertismentContest, refetch];
};

export default UseToGetDigitalAdvertismentContest;
