
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { Lock, User, Cloud } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login(email, password);
    
    if (success) {
      toast({
        title: "Успешная авторизация",
        description: "Добро пожаловать в приложение погоды!",
      });
    } else {
      toast({
        title: "Ошибка авторизации",
        description: "Неверный email или пароль. Попробуйте eve.holt@reqres.in / cityslicka",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full backdrop-blur-sm bg-white/90 shadow-2xl border-0 animate-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Cloud className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">Погода в Москве</CardTitle>
        <CardDescription className="text-gray-600">
          Войдите, чтобы увидеть прогноз погоды
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">Пароль</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Вход..." : "Войти"}
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
          <p>Тестовые данные ReqRes:</p>
          <p><strong>Email:</strong> eve.holt@reqres.in</p>
          <p><strong>Пароль:</strong> cityslicka</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
