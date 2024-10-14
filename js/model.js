export default function toggleNav(currentOpen) {
    if(currentOpen){
        $(".navLink").get(0).style.display = "";
        console.log("closing nav");
    } else {
        $(".navLink").get(0).style.display = flex;
        console.log("opening nav");
    }
}