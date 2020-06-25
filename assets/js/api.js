const API_KEY = '101cb5d428ba489f8f9702921cb74950';
const BASE_URL = 'https://api.football-data.org/v2/';

const Endpoint_Ing = `${BASE_URL}competitions/2021/standings`;
const Endpoint_Jer = `${BASE_URL}competitions/2002/standings`;
const Endpoint_Spn = `${BASE_URL}competitions/2014/standings`;
const Endpoint_Prc = `${BASE_URL}competitions/2015/standings`;

const fetchAPI = (url) => {
	return fetch(url, {
		headers: {
			'X-Auth-Token': API_KEY,
		},
	})
		.then((res) => {
			if (res.status !== 200) {
				console.log('Error: ' + res.status);
				return Promise.reject(new Error(res.statusText));
			} else {
				return Promise.resolve(res);
			}
		})
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
};

function getStandingsIng() {
	if ('caches' in window) {
		caches.match(Endpoint_Ing).then(function (response) {
			if (response) {
				response.json().then(function (data) {
					console.log('Competition Data: ' + data);
					showStanding(data);
				});
			}
		});
	}

	fetchAPI(Endpoint_Ing)
		.then((data) => {
			showStanding(data);
		})
		.catch((error) => {
			console.log(error);
		});
}
function getStandingsPrc() {
	if ('caches' in window) {
		caches.match(Endpoint_Prc).then(function (response) {
			if (response) {
				response.json().then(function (data) {
					console.log('Competition Data: ' + data);
					showStanding(data);
				});
			}
		});
	}

	fetchAPI(Endpoint_Prc)
		.then((data) => {
			showStanding(data);
		})
		.catch((error) => {
			console.log(error);
		});
}
function getStandingsSpn() {
	if ('caches' in window) {
		caches.match(Endpoint_Spn).then(function (response) {
			if (response) {
				response.json().then(function (data) {
					console.log('Competition Data: ' + data);
					showStanding(data);
				});
			}
		});
	}

	fetchAPI(Endpoint_Spn)
		.then((data) => {
			showStanding(data);
		})
		.catch((error) => {
			console.log(error);
		});
}

function getStandingsJer() {
	if ('caches' in window) {
		caches.match(Endpoint_Jer).then(function (response) {
			if (response) {
				response.json().then(function (data) {
					console.log('Competition Data: ' + data);
					showStanding(data);
				});
			}
		});
	}

	fetchAPI(Endpoint_Jer)
		.then((data) => {
			showStanding(data);
		})
		.catch((error) => {
			console.log(error);
		});
}

function getAllTeam(id) {
	const url = `${BASE_URL}teams/${id}`;

	if ('caches' in window) {
		caches.match(url).then(function (response) {
			if (response) {
				response.json().then(function (team) {
					showTeam(team);
				});
			}
		});
	}

	fetchAPI(url)
		.then((team) => {
			showTeam(team);
		})
		.catch((error) => {
			console.log(error);
		});
}
