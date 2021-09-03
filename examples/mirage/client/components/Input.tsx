import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef<HTMLInputElement, { helperText?: string }>(
  ({ helperText, ...rest }, ref) => {
    return (
      <>
        {helperText && <span className={styles.helperText}>{helperText}</span>}
        <input className={styles.input} ref={ref} {...rest} />
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };