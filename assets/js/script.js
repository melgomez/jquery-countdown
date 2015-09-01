$(function(){

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 
	
	today = mm+'/'+dd+'/'+yyyy;

	var note = $('#note');

	$('form').submit(function(e) {

		e.preventDefault();
		var date = new Date($('input#date').val());

		today = new Date(today) / 1000;
		date = date / 1000;

		if (date > today) {
			$('#countdown').html("");
			// $('#countdown').after("<p id='note'></p>");
			

			$('#countdown').countdown({
				timestamp	: new Date($('input#date').val()),
				callback	: function(days, hours, minutes, seconds) {
					
					var message = "";
					
					message += days + " day" + ( days==1 ? '':'s' ) + ", ";
					message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
					message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
					message += seconds + " second" + ( seconds==1 ? '':'s' ) + " to go!";
					
					
					$('#note').html(message);
				}
			});

		} else {
			alert("Please give a valid future date.");
		}
	});
});
