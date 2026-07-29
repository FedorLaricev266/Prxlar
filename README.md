# PRXLAR Portal

Статический портал PRXLAR для GitHub Pages: главная, релизы ARMv7/ARM64, исходники, предложения и демо-аккаунт.

## Релизы

Файлы APK и ZIP должны лежать в папке `releases/` рядом с `index.html`. Сайт уже ожидает:

- `PRXLAR_arm64_release.apk`
- `PRXLAR_armv7_release.apk`
- `PRXLAR_fast_tabs_source.zip`

Регистрация и вход работают в демо-режиме через `localStorage`. Для реальных пользователей, ролей администратора, загрузки релизов и базы предложений нужен backend (например Supabase/Firebase или отдельный API).

## Перед публикацией

Замени ссылки `your_username` и `your_page` в `index.html` на свои Telegram, Boosty и другие страницы донатов.

## GitHub Pages

1. Загрузи `index.html` и `styles.css` в корень репозитория.
2. Открой **Settings → Pages**.
3. В поле **Source** выбери `Deploy from a branch`, ветку `main` и папку `/ (root)`.
4. Сохрани настройки — GitHub выдаст адрес сайта.
