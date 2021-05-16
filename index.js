const express = require('express');
const products = require('./src/scripts/products');
const features = require('./src/scripts/features');
const bodyParser = require('body-parser');
const bot = require('./src/scripts/telegraf');

const port = 3000;
const requestCallChatId = '-558512046';

const app = express();
bot.launch();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/axios/dist'));

app.get('/', (req, res) => {
	res.render(
		'index',
		{
			pageTitle: 'Главная',
			message: 'Привествую вас, добро пожаловать, алоха, гуд морнинг',
			products,
			features
		}
	)
})

app.get('/product', (req, res) => {
	res.render(
		'product',
		{
			pageTitle: 'Страница продукта',
		}
	)
})

app.get('/api/request-call', (req, res) => {
	console.log('Запрос: ', req.query);
	bot.telegram.sendMessage(
		requestCallChatId,
		`Привет! Тут новая заяка, позвони!
		Имя клиента: ${req.query.name}
		Почта клиент: ${req.query.email}
		Телефон клиента: ${req.query.phone}
		`
	)
	res.redirect('/');
})

app.listen(port, () => {
	console.log(`сервер запущен на порту ${port}`);
})