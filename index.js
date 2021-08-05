const getResouce = async (url) => {
    const res = await fetch(url);

    if (!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    const some = await res.json();

    return some;
}

getResouce('')
    .then((res) => console.log('Succes, 'res))
    .catch(error => console.error(error));