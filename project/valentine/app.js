// GETTING ALL VARRIABLES

var link = window.location.href;
var title = document.querySelector('#main .title');
var index = 0;
var next = document.getElementById('next-btn');
var content = document.querySelector('.content');
var txt = document.querySelector('.txt');

var form, box, popupCloseBtn, popupBtn, popupInput, proposeBtn;

form = document.querySelector('#popup-form');
box = document.querySelector('.popup-box');
popupInput = document.querySelector('.popup-input');
popupCloseBtn = document.querySelector('.popup-close');
popupBtn = document.querySelector('.popup-btn');
proposeBtn = document.querySelector('#propose-btn');

// VERIFYING THE LINK
if (link.indexOf('#') != -1 && link.indexOf('#') != (link.length - 1)) {
    // HIDING HADER AND SHOWING THE MAIN SECTION
    document.getElementById('header').classList.add('hide');
    // document.getElementById('footer').classList.add('hide');
    document.getElementById('main').classList.remove('hide');
    // GETTING THE TITLE FROM LINK
    link = link.slice(link.indexOf('#') + 1);
    if (link.includes("%20+%20")) {
        var res = link.replace("%20+%20", ' <i style="color:red;" class="fas fa-heart"></i> ');
    } else if (link.includes("+")) {
        var res = link.replace("+", ' <i style="color:red;" class="fas fa-heart"></i> ');
    } else {
        var res = link;
    }

    title.innerHTML = res;
}

// LINES THAT ARE STORING IN A ARRAY
var lines = [
    "Are you Google search engine? Because you’ve got everything I’ve been searching for in life.",
    "Found the reason for my smile, the day I found you. Will you let me be the reason for your smile?",
    "In you, my life becomes whole, with you my days become bright. In your hands I would love to lay, this night and for the rest of my life!",
    "You deserve the world and all the good things it has to offer. If I fail to find that world for you, I promise to give you mine!",
    "When the rain is blowing in your face and the whole world is on your case, I could offer you a warm embrace to make you feel my love.",
    "Hold my hand tight as I want to grow old with you from this day forth.",
    "I Love You Very Much"
]

// MAKING FUNCTIONS

function load() {
    //MAKING BASIC ANIMATION
    content.classList.add('content-anim');
    txt.innerHTML = lines[index];
    setTimeout(() => {
        content.classList.remove('content-anim');
    }, 500)

    // WHILE INDEX REACH THE MAXIMUM NUMBER OF LINE
    if (index == (lines.length - 1)) {
        // STOP INCREASING INDEX
        index = (lines.length - 1);
    } else {
        // OTHERWISE INCREASING IT
        index++;
    }
}

function generate() {
    // VALIDATING BUTTON FOR COPY LINK
    if (popupBtn.innerHTML == "Copy") {
        // SELECTING LINK
        popupInput.select();
        popupInput.setSelectionRange(0, 99999);
        // COPYING LINK
        document.execCommand('copy');

        // RESTORING ITEMS
        popupBtn.innerHTML = "Submit";
        popupClose()
        // ALEART FOR COPYING
        alert('\n \n \n \nলিঙ্ক সঠিক ভাবে কপি হয়েছে \n \n আপনার ভালোবাসার মানুষটিকে লিঙ্কটি দিন।')
    } else {
        // VALIDATING INPUT VALUE
        if (popupInput.value.length != 0) {
            // CONCATING THE LINK WITH NAME
            var pageLink = window.location.href + "#" + popupInput.value;
            popupInput.value = pageLink;
            // CHANGING BUTTON TEXT FOR COPY
            popupBtn.innerHTML = "Copy";
        } else {
            // ALEART FOR INVALID INPUT
            alert('সঠিক নাম দিন!')
        }
    }
}

function popupOpen() {
    // MAKING POPUP VISIBLE WITH BASIC ANIMATION
    form.classList.remove('hide');
    setTimeout(() => {
        box.classList.add('box-anim');
    }, 10);
    setTimeout(() => {
        box.classList.remove('box-anim');
    }, 500);
}

function popupClose() {
    form.classList.add('hide');
    popupInput.value = "";
}

// CALLING THIS FUNCTION

next.addEventListener('click', load);
proposeBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
popupBtn.addEventListener('click', generate);
