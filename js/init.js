$(function() {
	"use strict";
	var app = window.app;

	app.menu.init();

	app.map.init();

	/* Configuration de la fenêtre donnant des détails sur les gens */
	$("#infosDetaillees").dialog({
		autoOpen: false,
		width : "60%",
		modal: true,
		closeText: "Fermer"
	});

	/* Configuration de la fenêtre permettant de se rajouter/modifier les informations à son sujet */

	$("#conteneurFormulaireModifs").dialog({
		autoOpen: false,
		width : "85%",
		modal: true,
		closeText: "Fermer"
	});

	$("#searchInput").keyup(function() {
		app.menu.render();
		app.map.redraw();
	}).change(function() {
		app.menu.render();
		app.map.redraw();
	});
});

