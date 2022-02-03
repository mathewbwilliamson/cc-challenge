import React from "react";
import { Coordinates, Direction, directions } from "../types/main";
import { Bumper } from "./Bumper";
import "../styles/gameScreen.css";
import { Ball } from "./Ball";
import {
  ballMovementSpeed,
  ballStartingXPos,
  ballStartingYPos,
} from "../constants/main";

interface GameScreenProps {}

const calculateNewPosition = (
  currentCoords: Coordinates,
  direction: Direction
) => {
  // I like to make sure I keep as many variables immutable as possible and my functions do as little
  // as possible. Easier to make unit tests.
  const newCoords = { ...currentCoords };

  if (direction === Direction.UP) {
    newCoords.y = currentCoords.y - ballMovementSpeed;
  }

  if (direction === Direction.DOWN) {
    newCoords.y = currentCoords.y + ballMovementSpeed;
  }

  if (direction === Direction.LEFT) {
    newCoords.x = currentCoords.x - ballMovementSpeed;
  }

  if (direction === Direction.RIGHT) {
    newCoords.x = currentCoords.x + ballMovementSpeed;
  }
  return newCoords;
};

export const GameScreen: React.FC<GameScreenProps> = () => {
  const [ballCoords, setBallCoords] = React.useState<Coordinates>({
    x: ballStartingXPos,
    y: ballStartingYPos,
  });

  const onClick = (dir: Direction) => {
    // Below, I use current because setX hooks are async (ish). React Batches these functions together.
    // That means that we cannot guarantee that ballCoords is what we expect if clicks happen fast.
    setBallCoords((current) => calculateNewPosition(current, dir));
  };

  return (
    <div className="gameScreen__container">
      {directions.map((dir) => {
        return <Bumper key={dir} direction={dir} onClick={onClick} />;
      })}
      <Ball coordinates={ballCoords} />
    </div>
  );
};
