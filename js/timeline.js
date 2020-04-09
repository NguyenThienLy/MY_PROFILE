function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("timeline-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("timeline__btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" timeline__btn--active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " timeline__btn--active";
}

document.getElementById("defaultOpen").click();
