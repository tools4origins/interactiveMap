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
        var filter=$(this.filterEl).val().toLowerCase();
        this.companyList.empty();
        var toggleCompany = function(ev) {
            var target = $(ev.target);
            target.toggleClass("active");
            if(target.hasClass("active")) {
                target.css("background-color", target.data("locationColor"));
            } else {
                target.css("background-color", "white");
            }
            app.map.redraw();
        };


        var numberOfHiddenLi=0;
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
                            .click(toggleCompany);

                var companyLocation = app.locations[company.locationId];
                if(companyLocation!==undefined) {
                    companyLi.attr("data-locationid", company.locationId);
                    if(companyLocation.fill!==undefined) {
                        companyLi.data("locationColor", companyLocation.fill);
                    } else {
                        companyLi.data("locationColor", "#FFB548");
                    }
                }
                if(company.name.toLowerCase().indexOf(filter)!==-1)
                    sectorLis.push(companyLi);
                else
                    numberOfHiddenLi++;
            }

            if(sectorLis.length>1) {
                for(var id in sectorLis)
                    this.companyList.append(sectorLis[id]);
            }
        }

        for(var i=0; i<numberOfHiddenLi; i++) {
          //  this.companyList.append($("<li>").addClass("hidden"));
        }

    }
};