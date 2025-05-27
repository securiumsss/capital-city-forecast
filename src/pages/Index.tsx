
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import WeatherDashboard from "@/components/WeatherDashboard";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isAuthenticated ? <WeatherDashboard /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Index;
