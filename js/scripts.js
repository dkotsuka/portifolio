const projects = [
	{
		id: 'u-wfe-pj4',
		name: 'My Reads App',
		url: 'https://dkotsuka.github.io/my-reads/',
		img: './portfolio/img/u-wfe-pj4.jpg',
		skills: ['react', 'javascript', 'html', 'css']
	},
	{
		id: 'u-wfe-pj3',
		name: 'Restaurants Reviews',
		url: 'https://dkotsuka.github.io/mws-restaurant-stage-1/',
		img: './portfolio/img/u-wfe-pj3.jpg',
		tags: ['javascript', 'css', 'html']
	},
	{
		id: 'u-wfe-pj1',
		name: 'Frog Game Clone',
		url: 'https://dkotsuka.github.io/front-end-nanodegree-frog-clone/',
		img: './portfolio/img/u-wfe-pj1.jpg',
		tags: ['javascript']
	},
	{
		id: 'pc-js-pj1',
		name: 'Conversor de Moedas',
		url: 'https://dkotsuka.github.io/pm-projetos/Projeto012/index.html',
		img: './portfolio/img/pm-js-pj1.jpg',
		tags: ['javascript','css']
	},
	{
		id: 'pc-js-pj2',
		name: 'Calculadora de IMC',
		url: 'https://dkotsuka.github.io/pm-projetos/Projeto011/index.html',
		img: './portfolio/img/pm-js-pj2.jpg',
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
