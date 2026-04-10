import { useNavigate } from "react-router";
import { Button } from "../components/Button";

import { questions } from "../utils/questions";
import { useState } from "react";
import { Radio } from "../components/Radio";

type Props = {
  question: (typeof questions)[number];
};

export function Question3({ question }: Props) {
  const navigate = useNavigate();
  const [option, setOption] = useState("");

  return (
    <div>
      <h1 className="text-xl mb-6">{question.pergunta}</h1>
      <Radio options={question.options} value={option} setValue={setOption} />
      <Button onClick={() => navigate("/question4")} title="Próximo" />
    </div>
  );
}
