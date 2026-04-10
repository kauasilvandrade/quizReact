import { useNavigate } from "react-router";

export function Question1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pergunta 1</h1>
      <button onClick={() => navigate("/question2")}>Próximo</button>
    </div>
  );
}
