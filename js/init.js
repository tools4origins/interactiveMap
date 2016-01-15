$(function() {
	"use strict";
	var app = window.app;

	$("#searchInput")
	.val("")
	.keyup(function() {
		app.menu.render();
		app.map.redraw();
	}).change(function() {
		app.menu.render();
		app.map.redraw();
	});

	app.menu.init();
	app.map.init();
	app.preview.init();
	$("#searchInput").keyboard({
		layout: "french-azerty-2",
		css: {
			// input & preview
			input: "form-control input-sm ui-keyboard-autoaccepted",
			// keyboard container
			container: "center-block dropdown-menu", // jumbotron
			// default state
			buttonDefault: "btn btn-default",
			// hovered button
			buttonHover: "btn-primary",
			// Action keys (e.g. Accept, Cancel, Tab, etc);
			// this replaces "actionClass" option
			buttonAction: "active",
			// used when disabling the decimal button {dec}
			// when a decimal exists in the input area
			buttonDisabled: "disabled"
		},
		change : function() {
			console.log("ici", $(".ui-keyboard-preview").val());
			$("searchInput").val($(".ui-keyboard-preview").val());
			app.menu.render();
			app.map.redraw();
		},
		/*beforeClose : function(e,kb,el) {
			window.filter = kb.last.val;
		},
		hidden : function() {
			console.log("win");
			if(window.filter!==undefined) {
				$("searchInput").val(window.filter);
				console.log("et", window.filter);
			}
		},
		valid:function() { console.log("triggered"); return true; }
*/

	});


	setInterval(function() {
		var now = (new Date()).getTime();
		if(window.app.lastRender+12*1000 < now) {
			console.log("oui");
			$("#searchInput").val("");
			app.menu.render();
			app.map.redraw();
			app.preview.show(null);
		}
	}, 1000);


	// This is quick and really dirty
	// it prevent selection
	function ffalse()
	{
		return false;
	}
	function ftrue()
	{
		return true;
	}
	document.onselectstart = function() {
		return false;
	};
	if(window.sidebar)
	{
		document.onmousedown = ffalse;
		document.onclick = ftrue;
	}
});
