import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import Auth from "../pages/Auth";

const AuthModel = ({ onClose }) => {
  const userData = useSelector((store) => {
    return store.user.userData;
  });

  useEffect(() => {
    if (userData) {
      onClose();
    }
  }, [userData, onClose]);

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-8 right-5 text-gray-800 hover:text-black text-xl"
        >
          <FaTimes size={18}></FaTimes>
        </button>

        <Auth isModel={true}></Auth>
      </div>
    </div>
  );
};

export default AuthModel;
