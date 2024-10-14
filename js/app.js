import toggleNav from "./model.js";

function initSite() {
    var navOpen = true;
    toggleNav(navOpen);
    $(".navHead").on("click", toggleNav(navOpen))
}

$(document).ready(function () {
    initSite();
});