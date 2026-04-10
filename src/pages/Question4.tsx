import { useNavigate } from "react-router";

export function Question4() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pegunta 4</h1>
      <button onClick={() => navigate("/result")}>Resultado</button>
    </div>
  );
}
