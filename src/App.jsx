import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/common/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoadingSpinner from "./components/common/LoadingSpinner";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <AppRoutes />
      </Suspense>

      <ThemeToggle />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;
