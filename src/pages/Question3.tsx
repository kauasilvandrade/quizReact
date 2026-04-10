import { useNavigate } from "react-router";

export function Question3() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pegunta 3</h1>
      <button onClick={() => navigate("/question4")}>Próximo</button>
    </div>
  );
}
