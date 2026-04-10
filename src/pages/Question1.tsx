import { useNavigate } from "react-router";
import { Button } from "../components/Button";

import { questions } from "../utils/questions";
import { Radio } from "../components/Radio";

import { useContext, useState } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

type Props = {
  question: (typeof questions)[number];
};

export function Question1({ question }: Props) {
  const navigate = useNavigate();
  const [option, setOption] = useState("");
  const { addPoint } = useContext(ScoreContext);

  function handleQuestion() {
    if (option === question.resposta) {
      addPoint();
    }
    navigate("/question2");
  }

  return (
    <div>
      <h1 className="text-xl mb-6">{question.pergunta}</h1>
      <Radio options={question.options} value={option} setValue={setOption} />
      <Button onClick={handleQuestion} title="Próximo" />
    </div>
  );
}
