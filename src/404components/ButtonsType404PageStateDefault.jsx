import React from "react";
import "./ButtonsType404PageStateDefault.css";
import { Link } from "react-router-dom";

export const ButtonsType404PageStateDefault = ({
  type = "sign-in",
  state = "default",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type + " state-" + state;

  return (
    <div
      className={
        "buttons-type-404-page-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <Link to="/">
      <div className="rectangle-1"></div>
      <div className="go-home">Go Home </div>
      </Link>
    </div>
  );
};
