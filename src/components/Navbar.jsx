import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white  h-20 flex items-center">
      <div className="wrapper-container w-full">
        <div
          className="flex items-center gap-3 cursor-pointer text-xl"
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          <p className="font-semibold">
            <span className="text-yellow-500">C</span>rypto
            <span className="text-yellow-500 ml-1">U</span>pdates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
