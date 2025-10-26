# Practice NestJS

Учебный проект на NestJS для практики разработки REST API с аутентификацией, ролевой системой и управлением постами.

## Описание

Это приложение представляет собой backend API с следующим функционалом:

- **Аутентификация и авторизация** - регистрация, вход с использованием JWT токенов
- **Управление пользователями** - создание, получение списка, назначение ролей, блокировка
- **Ролевая система** - разграничение доступа на основе ролей (Admin, User и т.д.)
- **Посты** - создание постов с возможностью загрузки изображений

## Технологический стек

- **NestJS** - фреймворк для построения серверных приложений
- **TypeScript** - типизированный JavaScript
- **PostgreSQL** - реляционная база данных
- **Sequelize** - ORM для работы с БД
- **JWT** - для аутентификации
- **bcryptjs** - для хеширования паролей
- **Swagger** - документация API
- **class-validator & class-transformer** - валидация данных

## API Endpoints

### Аутентификация
- `POST /auth/registration` - регистрация нового пользователя
- `POST /auth/login` - вход в систему

### Пользователи
- `GET /users` - получить список всех пользователей
- `POST /users` - создать пользователя
- `POST /users/role` - назначить роль пользователю
- `POST /users/ban` - заблокировать пользователя (только для Admin)

### Посты
- `POST /posts` - создать пост

## Установка и запуск

### Требования
- Node.js (v18+)
- PostgreSQL
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Настройка окружения

Создайте файлы конфигурации для разных окружений:

**.development.env**
```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=practice_nest_dev
PRIVATE_KEY=your_jwt_secret_key
```

**.production.env**
```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=practice_nest_prod
PRIVATE_KEY=your_jwt_secret_key
```

### Запуск приложения

```bash
# режим разработки
npm run start:dev

# режим отладки
npm run start:debug

# production режим
npm run start:prod
```

Приложение будет доступно по адресу `http://localhost:3000`

### Swagger документация

После запуска приложения документация API доступна по адресу:
```
http://localhost:3000/api/docs
```

## Структура проекта

```
src/
├── auth/           # Модуль аутентификации
├── posts/          # Модуль постов
├── roles/          # Модуль ролей
├── users/          # Модуль пользователей
├── pipes/          # Кастомные пайпы (валидация)
├── app.module.ts   # Корневой модуль приложения
└── main.ts         # Точка входа
```

## Дополнительные команды

```bash
# форматирование кода
npm run format

# линтинг
npm run lint

# сборка проекта
npm run build
```

## Модели данных

### User
- id
- email
- password
- banned (boolean)
- banReason (string)
- roles (связь many-to-many)
- posts (связь one-to-many)

### Role
- id
- value (например: "Admin", "User")
- description
- users (связь many-to-many)

### Post
- id
- title
- content
- image (путь к файлу)
- userId (внешний ключ)
- author (связь с User)

## Лицензия

UNLICENSED - частный учебный проект
