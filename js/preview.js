"use strict";
window.app = window.app || {};

window.app.preview = {
    el:"#previewDiv",
    show: function(company) {
        console.log($(this.el));
        $(this.el).empty();
        $(this.el).append($("<img>").attr({src:"images/logos_exposants/"+company.logo}));
    }
};