import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export function Question1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pergunta 1</h1>
      <Button onClick={() => navigate("/question2")} title="Próximo" />
    </div>
  );
}
