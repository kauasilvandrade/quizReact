import { ScoreProvider } from "./contexts/ScoreContext";
import { AppRouter } from "./route/AppRouter";

export function App() {
  return (
    <ScoreProvider>
      <AppRouter />
    </ScoreProvider>
  );
}
