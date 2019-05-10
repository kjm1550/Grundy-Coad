$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
});

/* Back up vanila JavaScript
function funcName() {
	var element = document.getElementById('toggle');
	element.classList.toggle('active');
	var element = document.getElementById('overlay');
	element.classList.toggle('open');
}
*/
