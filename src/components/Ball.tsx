import React from "react";
import { Coordinates } from "../types/main";

interface BallProps {
  coordinates: Coordinates;
}
export const Ball: React.FC<BallProps> = ({ coordinates }) => {
  return (
    <div className="ball" style={{ top: coordinates.y, left: coordinates.x }} />
  );
};
