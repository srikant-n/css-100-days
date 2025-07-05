import "./scss/main.scss";
import "./scss/day1.scss";
import "./scss/day2.scss";
import "./scss/day3.scss";

/**
 * Toggle class for day 2
 */

 document.querySelector("#day2 > .center").onclick = function() {
	const isClose = document.getElementsByClassName("close").length > 0;
	if(isClose)	{
		document.getElementsByClassName("line-1")[0].classList.remove("close");
		document.getElementsByClassName("line-2")[0].classList.remove("close");
		document.getElementsByClassName("line-3")[0].classList.remove("close");
	} else {
		document.getElementsByClassName("line-1")[0].classList.add("close");
		document.getElementsByClassName("line-2")[0].classList.add("close");
		document.getElementsByClassName("line-3")[0].classList.add("close");
	}
}