# Фронтенд | Отбор в Интенсивы Академии Яндекса 22/23

# Второе отборочное задание

# Первые мысли 

Изначально страница была оформлена в виде слайдера. Однако позже я решил, что этот вариант не совсем подходит: так-как верстка не была адаптивной, на body и слайдер было навешано свойство *overflow:hidden*, что в некоторых ситуациях могло обрезать картинки,к тому же места в слайдере не хватало пространства, чтобы поместить туда карточки с практикой, пэтому пришлось сделать появление карточек при наведении на иконку.

# Классическая

В итоге решил сверстать сайт в классическом формате (по некоторым причинам **footer** и **header** не входили в мое видение "*классической* страницы"). Мне подходила простая и быстрая реализация, ведь на то, чтобы свестать первый вариант, ушло много времени. Все эффекты, примененные на странице реализованы для придания ей более индивидуального характера.

# Темна и светлая тема

Тема определяется по медиа-запросу *prefers-color-scheme*. По умолчанию страничка отображается в светлой теме. Цвета прописаны в отдельных css-файлах: *light.css* и *dark.css*.

# Печатающийся текст

Реализован с помощью таймеров в js. Измпользуется не **setInterval**, а множество вложенных **setTimeout-ов**, так-как они позволяют задать условия, при которых таймер перестанер работать. 
Каждоя строка - отдельный абзац. Так легче регулировать отсупы между строками и от левого края. Для того, чтобы текст был цветным, я вписал его **span-ы** c различными классами. Для того, чтобы не тратить время на пропечатку *<span>* (каждый символ "печатется" 50 миллисекунд), стал вписывать его в контент парпграфа-строки посимвольно при виде символа '<' до тех пор пока, не увижу символ '>'.

# Имитация 3d у каротчек

Первый раз пробовал релизовать такой эффект. При сробатывании события **mouse move** на карточках смотрел, на сколько сильно откланена мышь от цетра карточки, вычислял процентное соотношение и вписывал в стили карточки *transform:skew*.

# Скроллбар при прокручивании

Сделан довольно просто. Контейнеру присовено свойство *position:fixed*. Ширина, прописываемая в js-коде, определяется за счет объема прокрученной страницы.
