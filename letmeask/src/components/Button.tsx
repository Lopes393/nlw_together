import { ButtonHTMLAttributes } from "react";
import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  //Spreed Operator
  return <button className="button" {...props} />;
}
