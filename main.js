$(document).ready(function(){
    var navHeight = $(".nav-container").outerHeight(true);
    var aboutPos = 0;
    var expPos = $(".container-work-edu").offset().top - navHeight + margin(".container-work-edu");
    var projPos = $(".project-container").offset().top - navHeight + margin(".project-container");
    var progPos = $(".container-skills").offset().top - navHeight + margin(".container-skills");
    var contactPos = $(".container-contact").offset().top - navHeight + margin(".container-contact");

    var aboutLen = $(".about").outerHeight(true);
    var expLen = $(".about").outerHeight(true);
    var projLen = $(".about").outerHeight(true);
    var progLen = $(".about").outerHeight(true);

    var sec1 = aboutLen;
    var sec2 = sec1 + expLen;
    var sec3 = sec2 + projLen;
    var sec4 = sec3 + progLen;
    console.log(expPos);
    console.log(sec1);
    $(".nav-placeHolder").css("height",navHeight);
    $(".about").click(function(){
        focus(".about",aboutPos,true);
    });
    $(".exp").click(function(){
        focus(".exp",expPos,true);
    });
    $(".proj").click(function(){
        focus(".proj",projPos,true);
    });
    $(".prog").click(function(){
        focus(".prog",progPos,true);
    });
    $(".contact").click(function(){
        focus(".contact",contactPos,true);
    });



});

var margin = function(selector){
    var totalHeight = $(selector).outerHeight(true);
    var height = $(selector).outerHeight(false);
    return (totalHeight - height) / 2;
};

var focus = function(element,pos,scroll){
    if(scroll){
        window.scrollTo(0,pos);
    }

};
