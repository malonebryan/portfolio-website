console.log("hello, welcome to my portfolio site")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
    } else {
    x.className = 'navtoggle';
    }
}

$('#goTop').on('click', function(e){
    $("html, body").animate({scrollTop: $("#top").offset().top}, 500);
    return false;
    });