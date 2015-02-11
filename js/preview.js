"use strict";
window.app = window.app || {};

window.app.preview = {
    el:"#previewDiv",
    show: function(companies) {
        console.log($(this.el));
        $(this.el).empty();
        for(var companyId in companies) {
            var company=companies[companyId];
            $(this.el).append($("<img>").attr({src:"images/logos_exposants/"+company.logo}));
        }
    }
};