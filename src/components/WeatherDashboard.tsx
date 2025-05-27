
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWeather } from "@/hooks/useWeather";
import { LogOut, RefreshCw, MapPin, Thermometer, Droplets, Wind, Eye, Sun, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WeatherDashboard = () => {
  const { logout } = useAuth();
  const { weather, isLoading, error, refetch } = useWeather();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Выход выполнен",
      description: "До свидания!",
    });
  };

  const handleRefresh = () => {
    refetch();
    toast({
      title: "Данные обновлены",
      description: "Прогноз погоды актуализирован",
    });
  };

  if (isLoading) {
    return (
      <Card className="w-full backdrop-blur-sm bg-white/90 shadow-2xl border-0 animate-in slide-in-from-bottom-4 duration-500">
        <CardContent className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center space-y-4">
            <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
            <p className="text-gray-600">Загружаем данные о погоде...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full backdrop-blur-sm bg-white/90 shadow-2xl border-0 animate-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="text-center space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Обновить
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-gray-600 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Выйти
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-700">
          <MapPin className="w-5 h-5 text-blue-500" />
          <CardTitle className="text-xl font-bold">Москва, Россия</CardTitle>
        </div>
        <p className="text-sm text-gray-500">
          {new Date().toLocaleDateString('ru-RU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        {error && (
          <div className="flex items-center space-x-2 text-amber-600 bg-amber-50 p-2 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Используются демо-данные</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Основная информация о погоде */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              {weather?.icon ? (
                <img 
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                  className="w-12 h-12"
                />
              ) : (
                <Sun className="w-8 h-8 text-white" />
              )}
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800">{weather?.temperature}°C</div>
              <div className="text-gray-600 capitalize">{weather?.description}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Ощущается как {weather?.feelsLike}°C
          </div>
        </div>

        {/* Детальная информация */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-blue-700">
              <Droplets className="w-5 h-5" />
              <span className="text-sm font-medium">Влажность</span>
            </div>
            <div className="text-xl font-bold text-blue-800 mt-1">{weather?.humidity}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-green-700">
              <Wind className="w-5 h-5" />
              <span className="text-sm font-medium">Ветер</span>
            </div>
            <div className="text-xl font-bold text-green-800 mt-1">{weather?.windSpeed} м/с</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-purple-700">
              <Eye className="w-5 h-5" />
              <span className="text-sm font-medium">Видимость</span>
            </div>
            <div className="text-xl font-bold text-purple-800 mt-1">{weather?.visibility} км</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-orange-700">
              <Thermometer className="w-5 h-5" />
              <span className="text-sm font-medium">Давление</span>
            </div>
            <div className="text-xl font-bold text-orange-800 mt-1">{weather?.pressure} мм</div>
          </div>
        </div>

        {/* Минимальная и максимальная температура */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="text-sm text-gray-600">Мин.</div>
              <div className="text-lg font-bold text-gray-800">{weather?.tempMin}°</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Макс.</div>
              <div className="text-lg font-bold text-gray-800">{weather?.tempMax}°</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherDashboard;
