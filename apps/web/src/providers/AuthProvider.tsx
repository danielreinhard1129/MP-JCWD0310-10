"use client";

import useKeepLogin from "../hooks/api/auth/useKepp-Login";
import { FC, PropsWithChildren, useEffect } from "react";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { keeplogin } = useKeepLogin();

  useEffect(() => {
    keeplogin();
  }, []);

  return <>{children}</>;
};
