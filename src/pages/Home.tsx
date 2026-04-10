import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-8">
          Bem vindo ao questionário de React!
        </h1>
        <Button title="Questionário" onClick={() => navigate("/question1")} />
      </div>
    </div>
  );
}
