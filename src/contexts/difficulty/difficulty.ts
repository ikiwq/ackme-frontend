import {createContext, useContext} from "react";
import {DifficultyContextProps} from "./types";

const DifficultyContext = createContext<DifficultyContextProps | undefined>(undefined);

function useDifficultyContext() {
  const difficultyContext = useContext(DifficultyContext);
  if(!difficultyContext) {
    throw new Error("DifficultyContext must be used withing a DifficultyProvider");
  }

  return difficultyContext;
}

export {DifficultyContext, useDifficultyContext};