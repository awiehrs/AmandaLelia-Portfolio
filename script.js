$(document).ready(function() {
    //Variables
    var aboutLink = $(".aboutBtn")
    var photoLink = $(".photoBtn")
    var codeLink = $(".codeBtn")
    var nameLink = $(".nameHead")
    var contactLink = $(".contactBtn")
    var aboutTxt = $(".myTitle")
    var photoTxt = $(".photoTxt")
    var codeTxt = $(".codeTxt")

    //functions for making different sections appear

    function aboutInit(e) {
        e.preventDefault();
        $(".frontImg").slideUp(1050);
        $(".aboutDiv").animate({width: '100%'}, 2000);
        $(".photoDiv").hide(300);
        $(".codeDiv").hide(300);
        $(".contactContent").hide();
        $(".aboutContent").fadeIn(4000);
        $(".aboutDiv").addClass("boxWidth");
        $(".aboutDiv").show();
        $(".aboutDiv").removeClass("text-center");
    };
    
    function photoInit(e) {
        e.preventDefault();
        $(".frontImg").slideUp(1050);
        $(".photoDiv").animate({width: '100%'}, 2000);
        $(".aboutDiv").hide(300);
        $(".codeDiv").hide(300);
        $(".contactContent").hide();
        $(".photoContent").fadeIn(4000);
        $(".photoDiv").addClass("boxWidth");
        $(".photoDiv").show();
        $(".photoDiv").removeClass("text-center");
        $(".photoTxt").removeClass("titlePosition");
    };

    function codeInit(e) {
        e.preventDefault();
        $(".frontImg").slideUp(1050);
        $(".codeDiv").animate({width: '100%'}, 2000);
        $(".photoDiv").hide(300);
        $(".aboutDiv").hide(300);
        $(".contactContent").hide();
        $(".codeContent").fadeIn(4000);
        $(".codeDiv").addClass("boxWidth");
        $(".codeDiv").show();
        $(".codeDiv").removeClass("text-center");
        $(".codeTxt").removeClass("titlePosition");
    };

    function contactInit(e) {
        e.preventDefault();
        $(".frontImg").slideUp(1050);
        $(".photoDiv").hide(300);
        $(".aboutDiv").hide(300);
        $(".codeDiv").hide(300);
        $(".contactContent").show(2000);

    }

    //function for returning to landing page
    function resetLanding(e) {
        e.preventDefault();
        location.reload();
    };

    //callbacks for functions
  
    $(aboutLink).click(aboutInit);
    $(aboutTxt).click(aboutInit);
    $(photoLink).click(photoInit);
    $(photoTxt).click(photoInit);
    $(codeLink).click(codeInit);
    $(codeTxt).click(codeInit);
    $(nameLink).click(resetLanding);
    $(contactLink).click(contactInit);





});