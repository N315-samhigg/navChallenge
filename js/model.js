export default function toggleNav(currentOpen) {
    if(currentOpen){
        $(".navLink").display = none;
        console.log("closing nav");
    } else {
        $(".navLink").display = flex;
        console.log("opening nav");
    }
}