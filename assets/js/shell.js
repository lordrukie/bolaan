document.addEventListener('DOMContentLoaded', function () {
	// TOP NAVIGATION
	function topNav() {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status != 200) return;
				// Muat navigasi
				document.querySelector('.topnav').innerHTML = xhttp.responseText;
				// Inisialisasi dropdown materialize
				$('.dropdown-button').dropdown();
				

				document.querySelectorAll('.link').forEach(function (lnk) {
					lnk.addEventListener('click', function (event) {
						// Muat konten halaman yang dipanggil
						page = event.target.getAttribute('href').substr(1);
						loadPage(page);
					});
				});
			}
		};

		xhttp.open('GET', '/assets/shell/topnav.html', true);
		xhttp.send();
	}
	topNav();
	// SIDEBAR NAVIGATION
	function sideNav() {
		const xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status != 200) return;

				// Muat navigasi

				document.querySelector('.sidenav').innerHTML = xhttp2.responseText;
				// Inisialisasi Materialize
				$('.dropdown-button').dropdown();
				$('.sidenav').sidenav();

				document.querySelectorAll('.link2').forEach(function (lnk) {
					lnk.addEventListener('click', function (event) {
						// Tutup sidenav
						const sidenav = document.querySelector('.sidenav');
						M.Sidenav.getInstance(sidenav).close();
						// Muat konten halaman yang dipanggil
						page = event.target.getAttribute('href').substr(1);
						loadPage(page);
					});
				});
			}
		};

		xhttp2.open('GET', '/assets/shell/sidenav.html', true);
		xhttp2.send();
	}
	sideNav();
	// eslint-disable-next-line linebreak-style
});
