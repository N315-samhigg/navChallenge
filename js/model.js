var navOpen = false;
var itemCount = 4;

export function toggleNav() {
    if(navOpen){
        for (let i = 0; i < itemCount; i++) {
            $(".navLink").get(i).style.display = "none";
        }
        console.log("closing nav");
        navOpen = false;
    } else {
        for (let j = 0; j < itemCount; j++) {
            $(".navLink").get(j).style.display = "flex";
        }
        console.log("opening nav");
        navOpen = true;
    }
}

export function changePage(pageName) {
    console.log(pageName);
    if (pageName != "") {
        $.get("pages/" + pageName + ".html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
        });
    } else {
        $.get("pages/home.html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
        });
    }
}