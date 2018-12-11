const projects = [
	{
		id: 'u-wfe-pj4',
		name: 'My Reads App',
		url: 'https://dkotsuka.github.io/my-reads/',
		img: 'https://user-images.githubusercontent.com/25888192/49825805-7241a480-fd6c-11e8-8095-0543b2525621.JPG',
		skills: ['react', 'javascript', 'html', 'css']
	},
	{
		id: 'u-wfe-pj3',
		name: 'Restaurants Reviews',
		url: 'https://dkotsuka.github.io/mws-restaurant-stage-1/',
		img: 'https://user-images.githubusercontent.com/25888192/49825803-7241a480-fd6c-11e8-956a-56e754801b89.JPG',
		tags: ['javascript', 'css', 'html']
	},
	{
		id: 'u-wfe-pj1',
		name: 'Frog Game Clone',
		url: 'https://dkotsuka.github.io/front-end-nanodegree-frog-clone/',
		img: 'https://user-images.githubusercontent.com/25888192/49825802-71a90e00-fd6c-11e8-9268-0b4903fa30c1.JPG',
		tags: ['javascript']
	},
	{
		id: 'pc-js-pj1',
		name: 'Conversor de Moedas',
		url: 'https://dkotsuka.github.io/pm-projetos/Projeto012/index.html',
		img: 'https://user-images.githubusercontent.com/25888192/49825806-7241a480-fd6c-11e8-9c98-99baf0f32315.JPG',
		tags: ['javascript','css']
	},
	{
		id: 'pc-js-pj2',
		name: 'Calculadora de IMC',
		url: 'https://dkotsuka.github.io/pm-projetos/Projeto011/index.html',
		img: 'https://user-images.githubusercontent.com/25888192/49825801-71a90e00-fd6c-11e8-9e64-6b007e400db2.JPG',
		tags: ['javascript','css']
	},
];

const container = document.querySelector('.project-container');

projects.map((item) => {
	const project = document.createElement('div');
	project.classList.add('project');
	project.classList.add('col-sm-12');
	project.classList.add('col-md-6');
	project.classList.add('col-lg-4');

	const image = document.createElement('div');
	image.style.backgroundImage = `url(${item.img}`;
	image.classList.add('pj-img-container');

	const link = document.createElement('a');
	const linkText = document.createElement('span');
	link.setAttribute('href', item.url);
	linkText.innerHTML = 'Visite!'
	link.append(linkText);

	const title = document.createElement('h2');
	title.innerHTML = item.name;
	
	project.append(image);
	project.append(title);
	project.append(link);

	container.append(project);

})
