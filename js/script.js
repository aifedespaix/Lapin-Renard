$("#inptPas").val(window.pas);
$("#inptReproduction").val(window.reproductionLap);
$("#inptDureeVie").val(window.dureeVie);

$("#addL").on('click', function() {
	foret.ajouteLapin($("#addNbL").val());
});

$("#addR").on('click', function() {
	foret.ajouteRenard($("#addNbR").val());
});

$("#go").on('click', function() {
	window.pas = $("#inptPas").val();
	window.reproductionLap = $("#inptReproduction").val();
	window.dureeVie = $("#inptDureeVie").val();
});

window.foret = new Da_Forest('area');
