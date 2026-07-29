# PRXLAR Portal

Статический портал PRXLAR для GitHub Pages: главная, релизы ARMv7/ARM64, исходники и предложения.

## Релизы

Кнопки APK ведут на прямые файлы в GitHub-репозитории `FedorLaricev266/Tg-proxy`:

- `PRXLAR V2.1 arm8.apk` — ARM64-v8a
- `PRXLAR V2.1 arm7.apk` — armeabi-v7a

Исходники сайта и проекта можно скачать из локальной папки `releases/`.

GitHub Pages не предоставляет сервер или базу данных, поэтому регистрация, хранилище пользователей и админка удалены. Предложения принимаются через Telegram: https://t.me/Larchikof. Для настоящих аккаунтов нужен отдельный backend (например Supabase/Firebase или API).

## Перед публикацией

В `index.html` уже указаны прямые GitHub-ссылки на оба APK, QR-код и реквизиты для поддержки, а также Telegram разработчика `@Larchikof`. Регистрации, авторизации и админки на статическом сайте нет. APK скачиваются напрямую с GitHub без промежуточной страницы.

## GitHub Pages

1. Загрузи `index.html` и `styles.css` в корень репозитория.
2. Открой **Settings → Pages**.
3. В поле **Source** выбери `Deploy from a branch`, ветку `main` и папку `/ (root)`.
4. Сохрани настройки — GitHub выдаст адрес сайта.
