import { ImSpinner3 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ImSpinner3 className="text-cyan-600 text-8xl animate-spin" />
    </div>
  );
};

export default Loader;
