import { JSX } from "react";
import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({ size, children, className, ...props }:PProps): JSX.Element => {
  switch(size){
    case "s":
      return <p className={cn(styles.s, className)} {...props}>{children}</p>;
    case "m":
      return <p className={cn(styles.m, className)} {...props}>{children}</p>;
    case "l":
      return <p className={cn(styles.l, className)} {...props}>{children}</p>;
    default:
      return <p className={cn(styles.m, className)} {...props}>{children}</p>;
  }
};