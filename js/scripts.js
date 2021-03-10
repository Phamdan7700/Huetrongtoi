
/* Time festival banner */


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