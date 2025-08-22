import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header";
import { useEffect } from "react";
import { auth } from "./firebase";
import { authenticateUser } from "./redux/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(authenticateUser({ uid, email, displayName, photoURL }));
        navigate("/home");
      } else {
        dispatch(authenticateUser(null));
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
