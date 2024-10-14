import toggleNav from "./model";

function initSite() {
    var navOpen = true;
    toggleNav(navOpen);
    $(".navHead").on("click", toggleNav(navOpen))
}

$(document).ready(function () {
    initSite();
});