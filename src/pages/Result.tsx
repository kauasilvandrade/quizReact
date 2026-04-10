import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";
import type { Question } from "../utils/questions";

type Props = {
  questions: Question[];
};

export function Result({ questions }: Props) {
  const { score } = useContext(ScoreContext);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-8 text-center">Resultado!</h1>
        <p className="text-2xl font-semibold ">
          Você acertou {score} de {questions.length} questões.
        </p>
      </div>
    </div>
  );
}
