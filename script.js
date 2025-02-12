let navItems = [".bouquets", ".arrangements", ".plants", ".events", ".care"];

function getClick(selector) {
	const trigger = document.querySelector(`${selector} > a`);
	const list = document.querySelector(`${selector} > .dropdown-menu-entries`);

	trigger.addEventListener("mouseover", (event) => {
		if (list.style.display === "none" || list.style.display === "") {
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
		}
	});

	// Click outside event
	window.addEventListener("mouseover", (event) => {
		if (!list.contains(event.target) && event.target !== trigger) {
			list.style.display = "none";
		}
	});
}

navItems.forEach((nav) => {
	getClick(nav);
});
