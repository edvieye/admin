import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/common/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { scheduleTokenRefresh } from "./services/tokenService";
import { setCredentials } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    scheduleTokenRefresh(); // Initialize token refresh timer if user is logged in

    // Listen for token refresh events from tokenService
    const handleTokenRefresh = (event) => {
      const { user, token, refreshToken } = event.detail;
      dispatch(setCredentials({ user, token, refreshToken }));
      console.log('📡 Token refresh event received with user:', event.detail.user);
    };
    
    window.addEventListener('tokenRefreshed', handleTokenRefresh);
    return () => window.removeEventListener('tokenRefreshed', handleTokenRefresh);
  }, [dispatch]);

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