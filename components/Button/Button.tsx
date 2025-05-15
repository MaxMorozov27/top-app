import { JSX } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import Arrow from "./arrow.svg";


export const Button = ({ appearance: appearance, arrow='none', children, className, ...props }:ButtonProps): JSX.Element => {
  
  return (
    <button
      className={cn(styles.button,className,{
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}

      {...props}
    >
      { children }
      { arrow !='none' && <span className={cn(styles.arrow,{
        [styles.down]: arrow =='down',
        [styles.right]: arrow == 'right'
      })}>
        <Arrow/>
      </span>}
    </button>
  );
  
};