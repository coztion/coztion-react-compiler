import { createRoot } from "react-dom/client";
import { scan } from "react-scan"; // must be imported before React and React DOM

import App from "@/App";

scan({
  enabled: import.meta.env.VITE_REACT_SCAN === "ENABLED",
});

createRoot(document.getElementById("root")!).render(<App />);
