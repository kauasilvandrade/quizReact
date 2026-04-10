import { useNavigate } from "react-router";

export function Question2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pegunta 2</h1>
      <button onClick={() => navigate("/question3")}>Próximo</button>
    </div>
  );
}
