const API = 'https://goodreads-books.p.rapidapi.com/lists/33669939';

const content=null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'be8488ecb7msh41268d4149dcadap1210a1jsn1231b6add235',
		'X-RapidAPI-Host': 'goodreads-books.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response= await fetch(urlApi, options);
    const data= await response.json();
    return data;
}

(async () => {
    try {
        const libros = await fetchData(API);
        let view = `
        ${libros.items.map(libro => `
        <!-- content -->
         <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${libro.imageURL}" alt="${libro.tittle}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${libro.tittle}
            </h3>
          </div>
        </div>
        `).slice(0,5).join('')}
        `;
    } catch {

    }
})();