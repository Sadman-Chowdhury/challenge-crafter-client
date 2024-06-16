import Loader from "../Shared/Loader";
import UseAuth from "../Hooks/UseAuth";
import UseCreator from "../Hooks/UseCreator";
import { Navigate, useLocation } from "react-router-dom";

const CreatorRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isCreator, isCreatorLoading] = UseCreator();
  const location = useLocation();

  if (loading || isCreatorLoading) {
    return <Loader />;
  }
  if (user && isCreator) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default CreatorRoute;
