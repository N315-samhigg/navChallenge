import { changePage, toggleNav } from "./model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(pageID);
    //console.log("route " + pageID);
}

function initSite() {
    $(".navHead").on("click", function() {toggleNav()});
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initSite();
});