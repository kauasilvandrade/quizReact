import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export function Question2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pegunta 2</h1>
      <Button onClick={() => navigate("/question3")} title="Próximo" />
    </div>
  );
}
