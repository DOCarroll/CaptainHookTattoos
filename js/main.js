$(function() {
    $('#slides').slidesjs({
        width: 200,
        height: 528,
        effect: {
            slide: {
                speed: 2500
            }
        },
        play: {
            active: true,
            auto: true,
            interval: 5000,
            swap: true,
            pauseOnHover:true
        },
        navigation: {
            active:false
        },
        pagination: {
            active:false
        }
    });

});
