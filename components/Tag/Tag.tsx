import { JSX } from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({ size = 'm', children, color='ghost',href, className, ...props }:TagProps): JSX.Element => {
  return (<div
    className={cn(styles.tag, className, {
      [styles.m]: size == 'm',
      [styles.s]: size == 's',
      [styles.ghost]: color == 'ghost',
      [styles.red]: color == 'red',
      [styles.grey]: color == 'grey',
      [styles.green]: color == 'green',
      [styles.primary]: color == 'primary',
    })}
    { ...props }
  >
    {href ? <a href={href}>{ children }</a> : <>{ children }</>}
    
  </div>);
};