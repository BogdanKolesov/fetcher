class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api'; //Нижнее подчеркивание -  статичные данные, которые ну нужно трогать ВООБЩЕ
	}
	async getResouce(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	}
	getAllChatacters() {
		return this.getResouce('/characters?page=5&pageSize=10');
	}
	getChatacter(id) {
		return this.getResouce(`/characters/${id}`);
	}
}

const got = new GotService();

//Вывод имени персонажа
got.getAllChatacters().then(res => {
	console.log(res.forEach(item => console.log(item.name)));
});

got.getChatacter(130).then(res => console.log(res));
