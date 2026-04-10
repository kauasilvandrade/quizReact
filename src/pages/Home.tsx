import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem vindo!</h1>
      <button onClick={() => navigate("/question1")}>Próximo</button>
    </div>
  );
}
