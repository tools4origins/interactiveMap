"use strict";
window.app = window.app || {};

window.app.map = {};

window.app.map.init = function() {
    var app = window.app;
    // Create an new empty map
    var width = 400, height = 600;
    this.el = new ScaleRaphael("map", width, height);
    this.el.scaleAll(2);
    this.el.setViewBox(0, 0, width, height );

    this.el.canvas.setAttribute("preserveAspectRatio", "none");

    var bindEvents = function(elem, locationId) {
        var companies = app.getCompaniesByLocation(locationId);
        if(companies.length>0) {
            elem.click(function () {
                if(locationId!==$("#searchInput").val()) {
                    elem.animate({"fill-opacity": 0.3}, 100, "<", function() {
                        elem.animate({"fill-opacity": 1}, 700, "<");
                    });

                    app.preview.show(companies);

                    $("#searchInput").val(locationId);
                    app.menu.render();
                    app.map.redraw();
                } else {
                    $("#searchInput").val("");

                    app.preview.show("");
                    app.menu.render();
                    app.map.redraw();
                }
            });

            elem[0].style.cursor = "pointer";
            // @Debug:
            //elem.attr({fill: "red"});
        } else {
        }
    };

    /* Add locations on map */
    for(var locationId in app.locations) {
        var location = app.locations[locationId];

        location.path = {};
        location.path.attributes = {};

        location.path.attributes.fill = (location.fill!==undefined) ? location.fill : "white";
        if(location["stroke-width"]!==undefined)
            location.path.attributes["stroke-width"] = location["stroke-width"];

        location.path.el = this.el.path(location.pathString)
                            .attr(location.path.attributes);
//                          .animate({"fill-opacity": 0.50}, 400, ">");

        bindEvents(location.path.el, locationId);
    }
};

window.app.map.redraw = function() {
    for(var locationId in app.locations) {
        var location = app.locations[locationId];

        if((
            $("#companyListContainer").find(".active").length === 0 ||
            $("#companyListContainer").find(".active[data-locationid='"+locationId+"']").length > 0
            ) && ($("#searchInput").val()==="" || $("#companyListContainer").find("[data-locationid='"+locationId+"']").length > 0)) {
            location.path.el.animate({"fill-opacity": 1}, 400, ">");
        } else {
            location.path.el.animate({"fill-opacity": 0.10}, 400, ">");
        }
    }
};