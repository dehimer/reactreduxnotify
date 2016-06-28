# reactreduxnotify

Тестовое задание для собеседования на позицию react+redux разработчика


!Для установки зависимостей выполните npm install


Требования 
1. Нужно сделать SPA-приложение на React/Redux, с 2мя страницами, первая индексная, просто с текстом, и вторая - форма контактов, на которой будет 2 инпута: email, text, и отправить. 

2. При нажатии на отправить проверяется что email не пустой и должен показываться нотис с ошибой, которая должна быть скрыта автоматически через несколько секунд, если все ок, то данные просто отсылаются на сервер (на любой урл, не важно чтобы он существовал). 

3. Нотисы должны быть сделаны черзе отдельный компонент, ну и на индексе можно так же разместить 2 кнопки для показа либо warning либо info нотиса. 
Приложение должно собираться через webpack.



TODO (ALL DONE!)

1. настроить среду

	1.1. packages.json

	1.2. webpack

	1.3. babel

2. два роута

	2.1 Поставить redux-react-router

	2.2 Тестовые роуты

3. по одному отображается компонент с текстом

4. по второму форма контактов

5. форма ввода email, текста, кнопка отправить

6. обработка кнопки отправки сообщения

	6.1 Если форма пустая - генерировать action об этом

	6.2 Если не пустая - генерировать action с данными для отправки

7. компонент вывода уведомления.

8. 2 кнопки в индексе для показа warning и info уведомлений

9. отправка запроса с данными письма