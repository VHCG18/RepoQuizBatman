$(document).on("ready",main);
function main()
{
    $("a").on("click", irA);
}
function irA()
{
    var seccion= $(this).attr("href");
    $("body, html").animate({

        scrollTop: $(seccion).offset().top
    }, 1000);
    return false;

}