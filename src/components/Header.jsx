import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router";
import {auth} from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(authenticateUser(null));
        navigate("/");
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div className="pt-2 absolute z-10 flex bg-black w-screen justify-between items-center">
      <img
        className="w-44 h-20 ml-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex text-white mr-7">
          <img className="w-10 h-10 mr-3" src={user?.photoURL} alt="User DP" />
          <button className="cursor-pointer" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
