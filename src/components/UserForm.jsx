import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { dataValidation } from "../utils";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [validationError, setValidationError] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleFormSubmit() {
    const errorMsg = dataValidation(
      email.current.value,
      password.current.value
    );
    setValidationError(errorMsg);
    if (errorMsg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/ogw/AF2bZyjw_v_G98uZ-seFjpCyaX9LmIsT0KW73qUXwVJ_BUJzP7g=s64-c-mo",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(authenticateUser({ uid, email, displayName, photoURL }));
              navigate("/home");
            })
            .catch((error) => {
              const errorCode = error.code;
              setValidationError("Error - " + errorCode.split("/")[1]);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationError("Error - " + errorCode.split("/")[1]);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(authenticateUser({ uid, email, displayName, photoURL }));
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          setValidationError("Error - " + errorCode.split("/")[1]);
        });
    }
  }

  return (
    <div className="">
      <div className="absolute top-0 bg-black w-screen h-screen opacity-50"></div>
      <img
        className="h-screen w-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="bg-img"
      />

      <form
        onClick={(e) => e.preventDefault()}
        className="w-[30%] px-12 py-8 pb-18 absolute z-10 top-30 left-135 bg-black/70 text-white rounded-lg"
      >
        <h1 className="font-bold text-[32px] mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter name"
            className="my-2 text-shadow-indigo p-4 border-[1px] border-gray-500 rounded-sm w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="my-2 text-shadow-indigo p-4 border-[1px] border-gray-500 rounded-sm w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 text-shadow-indigo p-4 border-[1px] border-gray-500 rounded-sm w-full"
        />

        <p className="mt-1 text-[#f3465a]">{validationError}</p>

        <button
          className={`bg-red-700 cursor-pointer p-2 w-full my-6 rounded-lg ${
            validationError ? "mt-3" : ""
          }`}
          onClick={handleFormSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          <span className="text-gray-400">
            {isSignInForm ? "New to Bingeflix? " : "Already have account? "}
          </span>
          <span
            className="cursor-pointer"
            onClick={() => setSignInForm(!isSignInForm)}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default UserForm;
