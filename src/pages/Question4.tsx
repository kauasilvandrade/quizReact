import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export function Question4() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pegunta 4</h1>
      <Button onClick={() => navigate("/result")} title="Resultado" />
    </div>
  );
}
