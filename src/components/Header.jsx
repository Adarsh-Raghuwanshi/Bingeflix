import { useSelector } from "react-redux";
import {auth} from "../firebase";
import { signOut } from "firebase/auth";
import { LOGO_URL } from "../constants";

const Header = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="pt-2 absolute z-10 flex bg-gradient-to-b from-black w-screen justify-between items-center">
      <img
        className="w-44 h-20 ml-14"
        src={LOGO_URL}
        alt="logo"
      />

      {user && (
        <div className="flex text-white mr-14">
          <img className="w-8 h-8 mr-3" src={user?.photoURL} alt="User DP" />
          <button className="cursor-pointer" onClick={() => signOut(auth)}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
