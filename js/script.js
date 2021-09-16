
const searchData = () => {
	const searchField = document.getElementById("search-input").value;
	document.getElementById("search-input").value = '';
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${searchField}&units=metric&appid=4790ee056ae64b62210d1aa67664447a`
	)
		.then((response) => response.json())
		.then((data) => showData(data));
};
const showData = (data) => {

	// console.log(data);
	// destructring data from objects
	const {name} = data;
	// const {main} = data.weather[0];
	const {temp} = data.main;
	const {description,main, icon} = data.weather[0];
	// const {icon} = data.weather[0];
	// console.log(main);
	const showElement = document.getElementById('show-data');
	showElement.innerHTML = `
		<h1>Weather in ${name}</h1>
		<h3>${main}</h3>
		<p>${temp}°C</p>
		<img ;>
		<img  src="https://openweathermap.org/img/wn/${icon}.png">
		<p>${description}</p>
	`
	

}
