import {useState} from "react";
import {Difficulty} from "./types";
import {DifficultyContext} from "./difficulty";

const DEFAULT_DIFFICULTY : Difficulty = "easy";

function DifficultyProvider({children} : {children: React.ReactNode}) {
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);

  return (
    <DifficultyContext.Provider
      value={{
        difficulty,
        setDifficulty
      }}
    >
      {children}
    </DifficultyContext.Provider>
  )
}

export {DifficultyProvider};