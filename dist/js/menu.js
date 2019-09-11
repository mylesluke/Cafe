
$(function () {
    // Open and Close Menu
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
    // When Link in Menu is Clicked, Close the Menu
    $('.nav-link').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
});



// Buffet 1
function on1() {
    document.getElementById("overlay").style.transform = "Scale(1)";
}

function off1() {
    document.getElementById("overlay").style.transform = "Scale(0)";
}


// Buffet 2
function on2() {
    document.getElementById("overlay2").style.transform = "Scale(1)";
}

function off2() {
    document.getElementById("overlay2").style.transform = "Scale(0)";
}

// Buffet 3
function on3() {
    document.getElementById("overlay3").style.transform = "Scale(1)";
}

function off3() {
    document.getElementById("overlay3").style.transform = "Scale(0)";
}

// Buffet 4
function on4() {
    document.getElementById("overlay4").style.transform = "Scale(1)";
}

function off4() {
    document.getElementById("overlay4").style.transform = "Scale(0)";
}

// Buffet 5 - Children's Buffet
function on5() {
    document.getElementById("overlay5").style.transform = "Scale(1)";
}

function off5() {
    document.getElementById("overlay5").style.transform = "Scale(0)";
}

// Buffet 6 - Hot Pot Supper
function on6() {
    document.getElementById("overlay6").style.transform = "Scale(1)";
}

function off6() {
    document.getElementById("overlay6").style.transform = "Scale(0)";
}