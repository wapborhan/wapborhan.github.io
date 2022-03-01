//Form
$(function () {
    if (!$(".envelope").hasClass("open")) {
        $(".envelope").click(function () {
            $(this).removeClass("new").addClass("open");
        });
    }
});




// Redirect
function DelayRedirect() {
    var seconds = 10;
    var dvCountDown = document.getElementById("dvCountDown");
    var lblCount = document.getElementById("lblCount");
    dvCountDown.style.display = "block";
    lblCount.innerHTML = seconds;
    setInterval(function () {
        seconds--;
        lblCount.innerHTML = seconds;
        if (seconds == 0) {
            dvCountDown.style.display = "none";
            window.location = "birthday_wish.html";
        }
    }, 1000);
}
