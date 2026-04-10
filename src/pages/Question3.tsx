import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export function Question3() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pegunta 3</h1>
      <Button onClick={() => navigate("/question4")} title="Próximo" />
    </div>
  );
}
