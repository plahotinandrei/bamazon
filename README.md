# Тестовое задание в компанию VISION-WEB

### `Готовое приложение:` [http://bamazon.webdev-pro.ru](http://bamazon.webdev-pro.ru)

Необходимо реализовать приложение *BAMAZON*, которые умеет показывать следующие страницы:

/ - главная

/login - авторизация

/books - список книг

/profile - профиль

Необходимо реализовать навигацию в шапке: переход на главную, на список книг и в профиль.

Если пользователь не авторизован, и переходит на список книг или профиль, необходим редирект на страницу авторизации.

*Форма авторизации принимает «фейковые» данные:*

admin

password

Если введены другие данные, то показывается сообщение: «Имя пользователя или пароль введены не верно»

Если введены корректные данные, то перебрасывать на страницу /profile

На странице профиля выводится имя, фамилия пользователя. На странице книг необходимо реализовать постраничный вывод книг (книга содержит название и автора) по 5 книг на страницу.

Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно. Где необходимо - использовать Redux. Оформление (дизайн) — не важно. Сделайте, чтобы можно было комфортно смотреть пример в браузере. Код необходимо оформить на GitLab / GitHub с заполненным Readme, и НЕ одним коммитом.

## Доступные скрипты

### `npm run dev`

Запускает приложение в режиме разработки.<br />
Откройте [http://localhost:3000](http://localhost:3000) чтобы просмотреть его в браузере.

### `npm run build`

Производит сборку приложения в папку `dist`.
