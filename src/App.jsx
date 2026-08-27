import { useEffect, useState } from "react";
import Professional from "./modes/Professional";
import Unprofessional from "./modes/Unprofessional";

const MODE_STORAGE_KEY = "krithi-portfolio-mode";

function getInitialMode() {
  if (typeof window === "undefined") return "professional";
  const stored = window.localStorage.getItem(MODE_STORAGE_KEY);
  return stored === "unprofessional" ? "unprofessional" : "professional";
}

function App() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(MODE_STORAGE_KEY, mode);
  }, [mode]);

  if (mode === "unprofessional") {
    return <Unprofessional onExit={() => setMode("professional")} />;
  }

  return (
    <Professional onEnterUnprofessional={() => setMode("unprofessional")} />
  );
}

export default App;