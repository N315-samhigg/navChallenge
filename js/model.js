export default function toggleNav(currentOpen) {
    if(currentOpen){
        $(".navLink").style.display = "";
        console.log("closing nav");
    } else {
        $(".navLink").style.display = flex;
        console.log("opening nav");
    }
}