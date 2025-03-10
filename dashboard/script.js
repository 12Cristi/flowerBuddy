let navItems = [".bouquets", ".arrangements", ".plants", ".events", ".care"];
const loginBtn = document.querySelector(".login-dialog");
const loginMenu = document.querySelector(".login-menu");
const emailLogin = document.querySelector(".email-auth");
const backBtn = document.querySelector(".back-button");
const standardLogin = document.querySelector(".standard-login");
const closeButton = document.querySelector(".close-btn");
const roseRedirect = document.querySelector(".roses-images");
const logo = document.querySelector(".logo");

function getClick(selector) {
	const trigger = document.querySelector(`${selector} > a`);
	const list = document.querySelector(`${selector} > .dropdown-menu-entries`);
	menuItemsClick(trigger, list);
}
function menuItemsClick(trigger, list) {
	list.classList.remove("open");
	list.style.display = "none";

	trigger.addEventListener("click", (e) => {
		console.log(e);
		e.preventDefault();
		if (list.classList.contains("open") || list.style.display === "none") {
			list.classList.add("open");
			list.style.display = "block";
			list.style.listStyle = "none";

			let links = list.querySelectorAll("a");
			links.forEach((link) => {
				link.style.textDecoration = "none";
			});

			let items = list.querySelectorAll("ul li");
			items.forEach((item) => {
				item.style.paddingTop = "10px";
			});
		} else {
			list.style.display = "none";
			console.log("pe aici iesim");
		}
	});

	window.addEventListener("click", (event) => {
		if (!list.contains(event.target) && event.target !== trigger) {
			list.style.display = "none";
		}
	});
}

navItems.forEach((nav) => {
	getClick(nav);
});

logo.addEventListener("click", () => {
	window.location = "../dashboard/index.html";
});

loginBtn.addEventListener("click", () => {
	loginMenu.classList.add("open");
});

closeButton.addEventListener("click", (e) => {
	e.stopPropagation();
	loginMenu.classList.remove("open");
});

standardLogin.addEventListener("click", (e) => {
	e.preventDefault();
	loginMenu.classList.remove("open");
	emailLogin.classList.add("open");
});

backBtn.addEventListener("click", (e) => {
	e.preventDefault();
	emailLogin.classList.remove("open");
});

roseRedirect.addEventListener("click", () => {
	window.location = "../roses/roses.html";
});
