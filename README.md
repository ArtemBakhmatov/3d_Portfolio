Портфолио с использованием React Three Fiber

public:
    desktop_pc model
    planet model
    logo

src:
assets - содержит другие иконки и изображения приложения
index.css - некоторые стили градиента и загрузчика, включая ссылки для семейства шрифтов
tailwind.config.cjs - содержит конфигурации цвета, экрана, контура и фонового изображения
style.js - содержит повторно используемый объект стиля
utils/motion.js - содержит варианты анимации с использованием движения фреймера
constants - содержит фиктивные данные, необходимые для приложения

Настройка:
1 - Инициализация приложения
npm create vite@latest ./ -- --templace react

2 - Стилизация нашего приложения
npm install -D tailwindcss

3 - Инициализация tailwindcss
npx tailwindcss init

4 - npm i three @react-three/fiber @react-three/drei maath react-tilt

three: Библиотека 3D threejs
@react-three/fiber: Средство визуализации React для библиотеки threejs
@react-three/drei: Полезные дополнения для react three fiber. Предоставляет готовые компоненты
maath: для математических служебных функций
react-tilt: анимация при наведении курсора мыши. Здесь используется более старая версия React.js . С этого момента нам придется использовать :

5 - npm i --legacy-peer-deps (Устаревшая одноранговая система (нужен для совместимости))
6 - npm i react-vertical-timeline-component (анимированная шкала опыта работы)
7 - npm i @emailjs/browser (браузер электронной почты)
8 - npm i framer-motion (движение кадра)
9 - npm i react-router-dom  (маршрутизация) 
