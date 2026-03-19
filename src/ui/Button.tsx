import React from "react";

type BUTTONPROPS = {
  title: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onClick?: () => void;
  classNames: string;
};

function Button({
  title,
  leftIcon,
  rightIcon,
  onClick,
  classNames,
}: BUTTONPROPS) {
  return (
    <button onClick={onClick} className={classNames}>
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
}

export default Button;
