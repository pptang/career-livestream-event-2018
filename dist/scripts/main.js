"use strict";$(document).ready(function(){var e=$("#all_article"),s=$("#speaker_article"),a=$("#event_intro"),l=$("#all_section"),d=$("#event_section"),o=$("#speaker_section");e.click(function(){e.addClass("tab_selected"),s.removeClass("tab_selected"),a.removeClass("tab_selected"),l.removeClass("hidden"),d.addClass("hidden"),o.addClass("hidden")}),s.click(function(){e.removeClass("tab_selected"),s.addClass("tab_selected"),a.removeClass("tab_selected"),l.addClass("hidden"),d.addClass("hidden"),o.removeClass("hidden")}),a.click(function(){e.removeClass("tab_selected"),s.removeClass("tab_selected"),a.addClass("tab_selected"),l.addClass("hidden"),d.removeClass("hidden"),o.addClass("hidden")}),$("#modal__close").click(function(){$("#modal-member").css("display","none"),$("body").removeClass("noscroll")}),$("#modal-close").click(function(){$("#modal-column").css("display","none"),$("body").removeClass("noscroll")}),$(".speaker__list-item").click(function(){var e=$(this).attr("data-video");$("#modal-speaker iframe").attr("src",e),$("#modal-speaker").css("display","block"),$("body").addClass("noscroll")}),$("#modal-speaker-close").click(function(){$("#modal-speaker").css("display","none"),$("#modal-speaker iframe").attr("src",""),$("body").removeClass("noscroll")}),window.onclick=function(e){switch($(e.target).attr("id")){case"modal-member":$("#modal-member").css("display","none"),$("body").removeClass("noscroll");break;case"modal-column":$("#modal-column").css("display","none"),$("body").removeClass("noscroll");break;case"modal-speaker":$("#modal-speaker").css("display","none"),$("#modal-speaker iframe").attr("src",""),$("body").removeClass("noscroll")}};var c=function(){var e=$(window).width();e<800&&$("#ytplayer").attr("width",e)};c(),$(window).resize(function(){c()}),$(".menu-wrapper a").click(function(){$(".navbar__menu").click()})});