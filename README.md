# 🌤️ Capital City Forecast - Прогноз погоды в Москве

Простое веб-приложение для просмотра текущего прогноза погоды в Москве с авторизацией пользователя.

## 🎯 Особенности

- ✅ **Авторизация** через ReqRes.in API
- ✅ **Прогноз погоды** через OpenWeatherMap API
- ✅ **Современный UI** с shadcn-ui и Tailwind CSS
- ✅ **Адаптивный дизайн** для мобильных устройств
- ✅ **TypeScript** для типобезопасности

## 🚀 Быстрый старт

### Тестовые данные для входа:
- **Email:** `eve.holt@reqres.in`
- **Пароль:** `cityslicka`

### Локальная разработка

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/capital-city-forecast.git
cd capital-city-forecast

# Установить зависимости (требуется Node.js 18+)
npm install

# Запустить dev сервер
npm run dev
```

### Сборка для продакшена

```bash
npm run build
```

## 🛠️ Технологии

- **Frontend:** React 18, TypeScript, Vite
- **UI:** shadcn-ui, Tailwind CSS, Lucide Icons
- **API:** ReqRes.in (авторизация), OpenWeatherMap (погода)
- **Deployment:** GitHub Pages, GitHub Actions

## 📋 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── LoginForm.tsx   # Форма авторизации
│   ├── WeatherDashboard.tsx # Дашборд погоды
│   └── ui/             # UI компоненты (shadcn-ui)
├── hooks/              # Кастомные хуки
│   ├── useAuth.tsx     # Хук авторизации
│   └── useWeather.tsx  # Хук погодных данных
├── pages/              # Страницы
│   └── Index.tsx       # Главная страница
└── lib/                # Утилиты
```

## 🔧 API интеграции

### ReqRes.in (Авторизация)
- **Endpoint:** `https://reqres.in/api/login`
- **Метод:** POST
- **Заголовки:** `x-api-key: reqres-free-v1`

### OpenWeatherMap (Погода)
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Координаты Москвы:** `lat=55.7558&lon=37.6176`
- **API Key:** Демонстрационный ключ включен

## 🎨 UI/UX

- 📱 **Адаптивный дизайн** для всех устройств
- 🎭 **Плавные анимации** и переходы
- 🎨 **Градиентные фоны** для создания атмосферы
- 💬 **Toast уведомления** для обратной связи
- ⚡ **Состояния загрузки** для лучшего UX

## 🔐 Безопасность

- Токены хранятся в localStorage
- Автоматическая проверка авторизации при загрузке
- Fallback данные при сбоях API

## 📱 Адаптивность

Приложение оптимизировано для:
- 📱 Мобильные устройства (320px+)
- 💻 Планшеты (768px+)
- 🖥️ Десктопы (1024px+)

## 🚀 Деплой

Проект автоматически деплоится на GitHub Pages при пуше в main ветку.

**Live Demo:** `https://your-username.github.io/capital-city-forecast/`

## 📄 Лицензия

MIT License

---

Веб-приложение для просмотра прогноза погоды в Москве с авторизацией пользователя
