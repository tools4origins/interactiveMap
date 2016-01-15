"use strict";
window.app = window.app || {};

window.app.preview = {
    el:"#previewDiv",
    formatPageNumber: function(num) {
        return ("00"+num).substr(-3);
    },
    init: function() {
        this.pageList=$("<div>");
        $(this.el).append(this.pageList);
        $(this.el).prepend(
            $("<img>").attr({
                src: "images/previous.png",
                alt: "<",
                class:"button prevButton"
            }).click(function() {
                console.log("test");
                window.app.preview.navPage(-1);
            })
        );
        $(this.el).append(
            $("<img>").attr({
                src: "images/next.png",
                alt: ">",
                class:"button nextButton"
            }).click(function() {
                window.app.preview.navPage(1);
            })
        );
        $(this.el).hide();
    },
    show: function(companies) {
        if(companies!==null) {
            $(this.el).show();
            this.pageList.empty();
            for(var companyId in companies) {
                var company=companies[companyId];

                this.pageList.append(
                    $(company.logo).addClass("logo")
                );

                if(company.pages!==undefined) {
                    for(var i=0; i<company.pages.length; i++) {
                        var pageNumber=this.formatPageNumber(company.pages[i]);
                        this.pageList.append(
                            $("<img>").attr({
                                src:"images/catalogue/page-"+pageNumber+".png",
                                class: "page"
                            })
                        );
                    }
                }
            }
            this.pageList.find("img:first").addClass("showed"); //.show() is not better since we use the class in a selector after
            this.updateButton();
        } else {
            $(this.el).hide();
        }
    },

    navPage: function(dp) {
        var imgs=this.pageList.find("img");
        var imgShowed = this.pageList.find("img.showed");
        var imgShowedPos = imgs.index(imgShowed);

        if(0<=imgShowedPos+dp && imgShowedPos+dp<=imgs.length-1) {
            imgShowed.removeClass("showed");
            imgs.eq(imgShowedPos+dp).addClass("showed");
        }

        this.updateButton();
    },

    updateButton: function() {
        var imgs=this.pageList.find("img");
        var imgShowed = this.pageList.find("img.showed");
        var imgShowedPos = imgs.index(imgShowed);
        console.log(imgShowedPos);
        if(0>=imgShowedPos) {
            $(this.el).find(".prevButton").css({opacity:0});
        } else {
            $(this.el).find(".prevButton").css({opacity:1});
        }

        console.debug(imgShowedPos>=imgs.length-1);
        if(imgShowedPos>=imgs.length-1) {
            $(this.el).find(".nextButton").css({opacity:0});
        } else {
            $(this.el).find(".nextButton").css({opacity:1});
        }
    }
};