// dummy data
city = ["Dubai", "Egypt", "Tunisia", "Riyadh", "Doha", "city6", "city7", "city8", "city9", "city10", "city11", "city12"];
specialty = ["accounting", "computer science", "sales", "finanical audit", "finanical review", "specialty6", "specialty7", "specialty8", "specialty9", "specialty10", "specialty11", "specialty12"];
scope = ["finance", "technology", "scope3", "scope4", "scope5", "scope6", "scope7", "scope8", "scope9", "scope10", "scope11", "scope12"];

$(function () {
    'use strict';

    // show first menu
    $(".circle").click(function () {
        $("#city").fadeIn(500);
        $("#title").text("Choose City");

        // for more than 6 options
        if (city.length > 6) {
            $("#city").children(".row").css("width", "370px")
        }
    })

    // show second menu
    $(".option1").click(function () {
        $(this).siblings().hide(500);
        // for more than 6 options
        $(this).parent().siblings().hide();
        $(this).parent().removeClass("col-md-6");
        $(this).parent().parent().css("width", "20px");
        if (city.length > 6) {
            $("#specialty").children(".row").css("width", "370px")
        }

        // show menu
        $("#specialty").fadeIn(1000);
        $("#title").text("Choose specialty");
        $("#line1").fadeIn(1500);
        $("#line1").css("display", "flex");

        if (city.length > 6) {
            $("#city").children(".row").css("width", "370px")
        }
    })

    // show third menu
    $(".option2").click(function () {
        $(this).siblings().hide(500);
        // for more than 6 options
        $(this).parent().siblings().hide();
        $(this).parent().removeClass("col-md-6");
        $(this).parent().parent().css("width", "20px");
        if (city.length > 6) {
            $("#scope").children(".row").css("width", "370px")
        }

        // show menu
        $("#scope").fadeIn(1000);
        $("#title").text("Choose scope");
        $("#line2").fadeIn(1500);
        $("#line2").css("display", "flex");;
    })

    // show fourth menu
    $(".option3").click(function () {
        $(this).siblings().hide(500);
        // for more than 6 options
        $(this).parent().siblings().hide();
        $(this).parent().removeClass("col-md-6");
        $(this).parent().parent().css("width", "20px");

        $("#date").fadeIn(1000);
        $("#title").text("Choose Date");
        $("#line3").fadeIn(1500);
        $("#line3").css("display", "flex");;
    })

    // show hide fourth menu options and show btns
    $(".option4").click(function () {
        $(this).siblings().hide(500);
        $("a").fadeIn(1500);
        $("#line4").fadeIn(1500);
        $("#line4").css("display", "flex");
        window.location.href = 'search.html';
    })

});

// menus columns
var menu1_col1 = document.getElementById("city__col1");
var menu1_col2 = document.getElementById("city__col2");

var menu2_col1 = document.getElementById("specialty__col1");
var menu2_col2 = document.getElementById("specialty__col2");

var menu3_col1 = document.getElementById("scope__col1");
var menu3_col2 = document.getElementById("scope__col2");

var menu4 = document.getElementById("date");

// monthes
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let m = d.getMonth();
let y = d.getFullYear();

// show options dynamically
// start city options
for (let i = 0; i < city.length; i++) {
    if (i < 6) {
        menu1_col1.innerHTML +=
            `<div class="option1" id="option">
                <div class="option-number1"><span>${i + 1}</span></div>
                <div class="option-details"><h4>${city[i]}</h4></div>
                <div class="option__icon"><i class="fa-solid fa-angles-right"></i></div>
            </div>`;
    } else {
        menu1_col2.innerHTML +=
            `<div class="option1" id="option">
                <div class="option-number1"><span>${i + 1}</span></div>
                <div class="option-details"><h4>${city[i]}</h4></div>
                <div class="option__icon"><i class="fa-solid fa-angles-right"></i></div>
            </div>`;
    }
    // end city options

    // start specialty options
    if (i < 6) {
        menu2_col1.innerHTML +=
            `<div class="option2" id="option">
                <div class="option-number2"><span>${i + 1}</span></div>
                <div class="option-details"><h4>${specialty[i]}</h4></div>
                <div class="option__icon"><i class="fa-solid fa-angles-right"></i></div>
            </div>`;
    } else {
        menu2_col2.innerHTML +=
            `<div class="option2" id="option">
                <div class="option-number2"><span>${i + 1}</span></div>
                <div class="option-details"><h4>${specialty[i]}</h4></div>
                <div class="option__icon"><i class="fa-solid fa-angles-right"></i></div>
            </div>`;
    }

    if (i < 6) {
        menu3_col1.innerHTML +=
            `<div class="option3" id="option">
                <div class="option-number3"><span>${i + 1}</span></div>
                <div class="option-details"><h4>${scope[i]}</h4></div>
                <div class="option__icon"><i class="fa-solid fa-angles-right"></i></div>
            </div>`;
    } else {
        menu3_col2.innerHTML +=
            `<div class="option3" id="option">
                <div class="option-number3"><span>${i + 1}</span></div>
                <div class="option-details"><h4>${scope[i]}</h4></div>
                <div class="option__icon"><i class="fa-solid fa-angles-right"></i></div>
            </div>`;
    }

    if (i < 6) { //remove this.. it is for testing
        menu4.innerHTML +=
            `<div class="option4" id="option">
                <div class="line1"></div>
                <div class="option-number4"><span>${i + 1}</span></div>
                <div class="option-details"><h4>${month[m++]} ${y}</h4></div>
                <div class="option__icon"><i class="fa-solid fa-angles-right"></i></div>
            </div>`;
    }
}


// options colors

var colors = ['#473ba3', '#30b67c', '#fba813', '#ed308e', '#1fb2e2'];


for (let i = 0, j = 0; i < city.length; i++) {
    let option1 = document.getElementsByClassName("option1")[i];
    let option2 = document.getElementsByClassName("option2")[i];
    let option3 = document.getElementsByClassName("option3")[i];
    let option4 = document.getElementsByClassName("option4")[i];
    let option_number1 = document.getElementsByClassName("option-number1")[i];
    let option_number2 = document.getElementsByClassName("option-number2")[i];
    let option_number3 = document.getElementsByClassName("option-number3")[i];
    let option_number4 = document.getElementsByClassName("option-number4")[i];

    if (j > 4)
        j = 0
    option1.style.backgroundColor = option_number1.style.color = colors[j]
    option2.style.backgroundColor = option_number2.style.color = colors[j]
    option3.style.backgroundColor = option_number3.style.color = colors[j]
    if (i < 6) {
        option4.style.backgroundColor = option_number4.style.color = colors[j]
    }
    j++
}


// reset btn
function reset() {
    location.reload();
}


// 
function headingNoneFun(){
    document.getElementById("discoverHeadingID").style.display = "none";
    document.getElementById("resetBTN").classList.remove("resetBTNClass")
}


// 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true
})