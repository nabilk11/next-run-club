import { login, setLoading, logout } from "@/redux/features/authSlice";
import { auth } from "@/utils/firebase_client";
import { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
  useSignOut,
} from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";

export default function useAuth() {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const userObj = { username: user.displayName };
      dispatch(login(userObj));
      dispatch(setLoading(false));
      return;
    }
    if (loading) {
      dispatch(setLoading(true));
      return;
    }
    if (!loading && !user) {
      dispatch(logout());
      dispatch(setLoading(false));
      return;
    }
  }, [user, loading, dispatch]);

  const handleCreateUser = async (
    email: string,
    password: string,
    username: string,
  ) => {
    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      return;
    }
    try {
      await updateProfile({ displayName: username });
    } catch (error) {
      console.log(error);
      return;
    }
    const userObj = { username };
    dispatch(login(userObj));
  };

  return {
    signInWithEmailAndPassword,
    handleCreateUser,
    signOut,
  };
}
