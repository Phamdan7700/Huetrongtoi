
/* Time festival banner */
timeCountdown();

function timeCountdown() {
    var now = new Date().getTime();
    var futureTime = new Date('2020-08-26T00:00:00');
    var time = futureTime - now;
    var date = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time - date * 24 * 60 * 60 * 1000) / (1000 * 60 * 60));
    var minutes = Math.floor((time - (date * 24 * 60 * 60 * 1000 + hours * 60 * 60 * 1000)) / (1000 * 60));
    var seconds = Math.floor((time - (date * 24 * 60 * 60 * 1000 + hours * 60 * 60 * 1000 + minutes * 60 * 1000)) / (1000));
    if (date < 10) {
        date = '0' + date;
    }   
    if (hours < 10) {
        hours = '0' + hours;
    }   
    if (minutes < 10) {
        minutes = '0' + minutes;
    }   
    if (seconds < 10) {
        seconds = '0' + seconds;
    }   
    if (date = hours = minutes = seconds == 0) {
        clearTimeout(timeCountdown);
    }
    var day = date + ' Ngày  ' ;
    var hours = hours + ' Giờ ' ;
    var minutes = minutes + ' Phút ' ;
    var seconds = seconds + ' Giây ' ;
    document.getElementById('day').innerHTML = day;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    setTimeout(timeCountdown, 10);
};

//functtion aleart
function notice() {
    alert('Chức năng đang xây dựng...')
}
//video


$(".video-icon-btn").click(function(){
    $(".video-icon-area").hide();
    $("#video").removeClass('invisible');

  });

$('document').ready(
    function(){
        var video = $('#video')[0];
        $('.video-icon-btn').click(function() {
            if( video.paused ) {
                video.play();
            }
            else {
                video.pause();
            }
        });
    }
);