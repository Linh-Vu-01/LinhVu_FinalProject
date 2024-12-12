pastry.addEventListener('click',function(){
	console.log("pastry");
	document.body.classList.remove("dessert");
	document.body.classList.remove("drink");
	document.body.classList.add("pastry");
	document.getElementById("menu-gallery").src="images/garlic-bread.jpeg";
	document.getElementById("menu-gallery").alt="Garlic Bread";
    menuname.innerHTML = "PASTRY";
    details.innerHTML = "Let's discover our variety of sweet and savory pastries, breads, and donuts, freshly baked every day."
});
dessert.addEventListener('click',function(){
	console.log("dessert");
	document.body.classList.remove("pastry");
	document.body.classList.remove("drink");
	document.body.classList.add("dessert");
	document.getElementById("menu-gallery").src="images/croffle.jpeg";
	document.getElementById("menu-gallery").alt="Croffle";
    menuname.innerHTML = "DESSERT";
    details.innerHTML = "Enjoy the heavenly desserts made by our master bakers and decorated to perfection, down to the last detail."
});
drink.addEventListener('click',function(){
	console.log("drink");
	document.body.classList.remove("pastry");
	document.body.classList.remove("dessert");
	document.body.classList.add("drink");
	document.getElementById("menu-gallery").src="images/cookies-coffee.jpeg";
	document.getElementById("menu-gallery").alt="Cookies and Coffee";
    menuname.innerHTML = "DRINK";
    details.innerHTML = "Explore our delightful fusion of freshly brewed coffee, house-made tea, and thoughtfully crafted beverages."
});
