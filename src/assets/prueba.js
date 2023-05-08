const API = 'https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details';
const content=null || document.getElementById('content');
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'be8488ecb7msh41268d4149dcadap1210a1jsn1231b6add235',
		'X-RapidAPI-Host': 'linkedin-profiles-and-company-data.p.rapidapi.com'
	},
	body: {
		profile_id: 'julian-guarin-m',
		profile_type: 'personal',
		contact_info: false,
		recommendations: false,
		related_profiles: false
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi,options);
  const data=await response.json();
  console.log(data);
  return data;
}

(async ()=>{
  try{
    const cursos=await fetchData (API);
    let view = `
    ${cursos.education.map(curso => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${curso.school.logo}" alt="Logo ${curso.school.name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${curso.degree_name}
          </h3>
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${curso.school.name}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}

    `;
    content.innerHTML=view;
  }catch (error){
    console.log(error);
  }
})();