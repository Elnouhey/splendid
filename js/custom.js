$(function(){"use strict";$(".nav--menu-button").on("click",function(){$(this).toggleClass("is-opened"),setTimeout(function(){$(".nav--ul").toggleClass("is-clicked")},200)}),$(".nav--ul li a").on("click",function(e){e.preventDefault(),$(this).addClass("active").parent().siblings().find("a").removeClass("active"),$("html, body").animate({scrollTop:$("#"+$(this).data("value")).offset().top+1},1e3)}),$(".header--arrow").on("click",function(){$("html, body").animate({scrollTop:$(".services").offset().top},700)})}),$(window).on("load",function(){"use strict";$(".loader-overlay .loading").fadeOut(1e3,function(){$(this).parent().fadeOut(1500,function(){$(this).remove()})}),$(".header--intro h1").addClass("animated-intro"),$(".header--intro p").addClass("animated-p"),$(".header--button").addClass("animated-button"),$(".header--plane").addClass("animated-plane"),$(".header--arrow").addClass("animated-arrow")}),$(window).scroll(function(){var e=$(this).scrollTop();e>$(".service--wrap").offset().top-$(window).height()/1.2&&$(".service--wrap .service").each(function(e){setTimeout(function(){$(".service--wrap .service").eq(e).addClass("is-visible")},150*(e+1))}),e>$(".choose-us--wrap").offset().top-$(window).height()/1.2&&$(".choose-us--wrap .choose").each(function(e){setTimeout(function(){$(".choose-us--wrap .choose").eq(e).addClass("is-showing")},150*(e+1))}),e>$(".destinations-divider-wrap").offset().top-$(window).height()/1.2&&$(".destinations-divider-wrap .divider").each(function(e){setTimeout(function(){$(".destinations-divider-wrap .divider").eq(e).addClass("showing")},150*(e+1))}),e>$(".deal-wrap").offset().top-$(window).height()/1.2&&$(".deal-wrap .deal-box").each(function(e){setTimeout(function(){$(".deal-wrap .deal-box").eq(e).addClass("showing")},150*(e+1))})});
