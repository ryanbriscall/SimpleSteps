var steps = document.querySelectorAll('.step');
function changeStep(adjustment)
{
	var current_page = -1;
	steps.forEach(function(el, i) {
		if ( el.classList.contains('active') )
		{
			current_page = i;
			return false;
		}
	});

	var change_page = current_page + adjustment;
	if ( change_page < 0 ) change_page = steps.length - 1;
	else if ( change_page == steps.length ) change_page = 0;

	steps.forEach(function(el, i) {
		el.classList.remove('active');
		if ( i === change_page )
		{
			el.classList.add('active');
			return false;
		}
	});
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode > 36 && e.keyCode < 41) { e.preventDefault(); }
  if (e.keyCode == 38 || e.keyCode == 37) { changeStep(-1); }
  else if (e.keyCode == 40 || e.keyCode == 39) { changeStep(1); }
});
