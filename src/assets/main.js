const API ='https://pokeapi.co/api/v2/pokemon';

const content = null || document.getElementById("contenido");

const options = {
	method: 'GET'
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    console.log('paso 1');
    try {
        const pokemon = await fetchData(`${API}/greninja`);
        console.log(pokemon.sprites.other["official-artwork"].front_default);
        console.log('paso 2');
    
        let view = `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${pokemon.forms[0].name}
                    </h3>
                </div>
            </div>      
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();