"use strict";
window.app = window.app || {};

window.app.menu = {
    el:"#companyListContainer",
    filterEl:"#searchInput",
    init: function() {
        var $el = $(this.el);

        this.companyList = $("<ul>").attr("id", "companyList");
        $el.append(this.companyList);
        this.render();
    },
    render: function() {
        window.app.lastRender = (new Date()).getTime();
        var filter;
        if($(".ui-keyboard-preview").length>0)
            filter = $(".ui-keyboard-preview").val();
        else
            filter = $(this.filterEl).val().toLowerCase();
        this.companyList.empty();
        var toggleCompany = function(ev) {
            window.app.lastRender = (new Date()).getTime();
            var target = $(ev.currentTarget);
            target.toggleClass("active");

            var targetActive = target.hasClass("active");

            $(window.app.menu.el)
                .find("li")
                .removeClass("active")
                .css("background-color", "white");

            if(targetActive) {
                target.addClass("active");
                target.css("background-color", target.data("locationColor"));
                app.preview.show([app.getCompanyByName(target.data("companyname"))]);
            } else {
                target.removeClass("active");
                target.css("background-color", "white");
                app.preview.show(null);
            }

            app.map.redraw();
        };

        for(var sectorId in app.companiesBySector) {
            var sector = app.companiesBySector[sectorId];
            var sectorLis = [];
            sectorLis.push(
                $("<li>").append(
                    $("<span>").text(sector.name)
                ).addClass("sector")
            );
            for(var companyId in sector.companies) {
                var company = sector.companies[companyId];

                var companyLi = $("<li>")
                            .text(company.name)
                            .prepend(
                                $("<div>").addClass("locationId").text(company.locationId)
                            )
                            .click(toggleCompany);

                var companyLocation = app.locations[company.locationId];
                if(companyLocation!==undefined) {
                    companyLi.attr("data-locationid", company.locationId);
                    companyLi.attr("data-companyname", company.name);
                    if(companyLocation.fill!==undefined) {
                        companyLi.data("locationColor", companyLocation.fill);
                    } else {
                        companyLi.data("locationColor", "#FFB548");
                    }
                }
                if(company.name.toLowerCase().indexOf(filter)!==-1 || company.locationId.toLowerCase()===filter)
                    sectorLis.push(companyLi);
            }

            if(sectorLis.length>1) {
                for(var id in sectorLis)
                    this.companyList.append(sectorLis[id]);
            }
        }

        this.companyList.append(
            $("<li>")
                .attr({class: "sector reset"})
                .text("Retour")
                .click(function() {
                    $("#searchInput").val("");
                    app.menu.render();
                    app.map.redraw();
                    app.preview.show(null);
                })
            .append(
                $("<img>").attr({src:"images/refresh.png"})
            )
            .prepend(
                $("<img>").attr({src:"images/refresh.png"})
            )
        );

    }
};