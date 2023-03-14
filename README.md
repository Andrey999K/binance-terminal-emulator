# Binance terminal emulator
Приложение эмулирующее покупку и продажу криптовалют.
Состоит из формы покупки или продажи криптовалюты и таблицы с историей ордеров.
Помимо вашего ордера в истории ордеров раз в секунду герерируется ордер с рандомными значениями в определённом диапозоне, чтобы создать видимость ордеров других трейдеров.<br><br>
Демо: <https://andrey999k.github.io/binance-terminal-emulator/>

Pet-проект с использованием js-фреймворка <b>React</b> и css-фреймворка <b>Tailwind CSS</b>.

Используемые технологии:<br>
— HTML<br>
— SCSS<br>
— JavaScript<br>
— React<br>
— Tailwind CSS<br>

В разработке использовал компонентный подход. Компоненты функциональные.
Для написания стилей использовал Tailwind CSS и в некоторых случаях CSS-препроцессор SCSS.

**Компонент FormsOrder:** <br>
    Содержит 2 копмонента форм. Одна для покупки криптовалюты, вторая для продажи.<br>
    Принимает 3 пропса:<br>
        1) _data_ — данные о текущем курсе криптовалюты<br>
        2) _create_ — функция для создания нового ордера<br>
        3) _available_ — данные об имеющейся паре криптовалют<br><br>
**Компонент FormOrder**<br>
    Компонент FormOrder — форма для создания ордера.<br>
    Принимает 4 пропса:<br>
        1) _typeForm_ — тип формы (buy или sell, для покупки и продажи соответственно)
        2) _data_ — данные о текущем курсе криптовалюты<br>
        3) _create_ — функция для создания нового ордера<br>
        4) _available_ — данные об имеющейся криптовалюте<br><br>
        
**Компонент TableOrders**<br>
    Компонент TableOrder — таблица для вывода истории ордеров.<br>
    Принимает 1 пропс _orders_ — массив ордеров<br><br>

**Компонент MyButton**<br>
    Компонент кнопки. Принимает 2 основных пропса:<br>
    1) _children_ — дочерние ноды<br>
    2) _className_ — имя класса<br>

**Компонент MyInput**<br>
    Компонент поля ввода. Принимает 2 основных пропса:<br>
    1) _placeholderLabel_ — плейсхолдер<br>
    2) _currency_ — текущее значение<br>
    
**Компонент FormInputRange**<br>
    Компонент поля ввода с ползунком.<br>

Новые ордера в таблице ордеров генерируются с помощью функции _createRandomOrder_ раз в секунду со случайными значениями в заданном диапозоне.
    

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
