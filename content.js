window.onload = function () {
	document.getElementsByClassName("crayons-layout")[ 0 ].style.grid = "none";
	document.querySelector("#main-content").style.padding = "8em"

	const AsideLists = document.getElementsByTagName("Aside");
	for (let i = 0; i < AsideLists.length; i++) {
		AsideLists[ i ].style.display = "none"
	}
}