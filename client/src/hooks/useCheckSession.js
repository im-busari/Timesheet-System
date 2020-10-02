// Checks the user's browser for an auth cookie
// Automatically logs them if one is found

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkSession } from "../redux/slices/auth";

export function useCheckSession() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);
}
