const navLinks = document.querySelectorAll(".navItem a"),
	pageSections = document.querySelectorAll(".sections");

window.addEventListener("scroll", () => {
	pageSections.forEach((section) => {
		let top = window.scrollY,
			offset = section.offsetTop,
			height = section.offsetHeight,
			id = section.getAttribute("id");

		if (top >= offset && top < offset + height) {
			navLinks.forEach((link) => {
				link.classList.remove("active");
				document
					.querySelector("nav a[href*=" + id + "]")
					.classList.add("active");
			});
		}
	});
});