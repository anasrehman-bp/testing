import React, { ReactElement } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }: { children: any }): ReactElement => {
  const navigate = useNavigate();
  const data: string | null = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : "";
  const location = useLocation();

  return user.user_id
    ? children
    : navigate(
        `/?redirect=${btoa(
          location.pathname + location.search + location.hash
        )}`
      );
};

const PublicRoutes = ({ children }: { children: any }): ReactElement => {
  const navigate = useNavigate();
  const data: string | null = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : "";
  const location = useLocation();
  const qs = queryString.parse(location.search);
  const redirectURL = qs.redirect ? atob(qs.redirect.toString()) : "/app";

  return user.user_id ? navigate(redirectURL) : children;
};

export { PublicRoutes, PrivateRoutes };
