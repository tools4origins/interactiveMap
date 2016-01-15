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
//                    elem.animate({"fill-opacity": 0.3}, 100, "<");

                    app.preview.show(companies);

                    $("#searchInput").val(locationId);
                    app.menu.render();
                    app.map.redraw();
                } else {
                    $("#searchInput").val("");

                    app.preview.show(null);
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
        if(location.stroke!==undefined)
            location.path.attributes.stroke = location.stroke;

        location.path.el = this.el.path(location.pathString)
                            .attr(location.path.attributes);
//                          .animate({"fill-opacity": 0.50}, 400, ">");

        bindEvents(location.path.el, locationId);

/*
        var locationBBox = location.path.el.getBBox();

        var x = locationBBox.cx;
        var y = locationBBox.cy;

        var locationName = this.el.print(x, y, locationId, this.el.getFont("Museo"), 10)
                                .attr({color:"white"});*/
        //el.transform("t100,100r45t-100,0");

    }
};

window.app.map.redraw = function() {
    for(var locationId in app.locations) {
        var location = app.locations[locationId];

        if((
                $("#companyListContainer").find(".active").length === 0 ||
                $("#companyListContainer").find(".active[data-locationid='"+locationId+"']").length > 0
            ) && (
                $("#searchInput").val()==="" &&
                (
                    $(".ui-keyboard-preview").val()===undefined ||
                    $(".ui-keyboard-preview").val()===""
                ) ||
                $("#companyListContainer").find("[data-locationid='"+locationId+"']").length > 0
            )) {


            if(location.fill!==undefined && location.fill!=="#131d34") {
                location.path.el.animate({"fill-opacity": 1}, 200, ">");
                location.path.el.animate({"stroke-opacity": 1}, 200, ">");
            } else {
                location.path.el.animate({"fill-opacity": 1}, 200, ">");
            }
        } else {
            if(location.fill!==undefined && location.fill!=="#131d34") {
                location.path.el.animate({"fill-opacity": 0.20}, 200, ">");
                location.path.el.animate({"stroke-opacity": 0.30}, 200, ">");
            } else {
                location.path.el.animate({"fill-opacity": 0.70}, 200, ">");
            }
        }
    }
};