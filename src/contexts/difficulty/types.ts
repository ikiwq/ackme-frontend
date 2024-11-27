export type Difficulty = "easy" | "medium" | "hard";

export interface DifficultyContextProps {
  difficulty: Difficulty;
  setDifficulty: (d: Difficulty) => void;
}