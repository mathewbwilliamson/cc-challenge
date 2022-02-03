import classNames from "classnames";
import React from "react";
import { Direction } from "../types/main";

interface BumperProps {
  direction: Direction;
  onClick: (dir: Direction) => void;
}

export const Bumper: React.FC<BumperProps> = ({ direction, onClick }) => {
  return (
    <button
      className={classNames("bumper", direction)}
      onClick={() => onClick(direction)}
    />
  );
};
