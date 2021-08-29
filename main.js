$(document).ready(function() {
    $('.gallery-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
    $(".click").click(function() {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Download Successful',
            showConfirmButton: false,
            timer: 1500
        })
    })


    var typed = new Typed('.type', {
        strings: [
            "Hello I'm",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 5500,
        loop: true,

    });
    var typed = new Typed('.type-h1', {
        strings: [
            "Web Designe and",
            'Web Devloper'
        ],
        startDelay: 1500,
        typeSpeed: 120,
        backSpeed: 100,
        backDelay: 100,
        loop: true,



    });
})