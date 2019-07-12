/*  Back up for jQuery
$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
});*/

function openMobleMenu() {
	var element = document.getElementById('toggle');
	element.classList.toggle('active');
	var element = document.getElementById('overlay');
	element.classList.toggle('open');
}
