class GoutService {}

const getResouce = async url => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}
	return await res.json();
};

getResouce('123')
	.then(res => console.log('Succes, ', res))
	.catch(error => console.error(error));

//Доделать
