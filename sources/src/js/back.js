import $ from "jquery";

$(function() {

    $('.subscribe__form').on('submit', (e) => {
        e.preventDefault();

        $.ajax({
            "url": "/api/request-mailing",
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "email": $('#email').val(),
                "news": $('#sub-news').prop('checked') ? 'true' : 'false',
                "promotions": $('#sub-promo').prop('checked') ? 'true' : 'false'
            }
        })

        $('.subscribe__form .subscribe__submit').text('Вы успешно подписались!');
        $('.subscribe__form .subscribe__submit').attr('disabled', true);
    })


    $('#smarthome-order-body-form').on('submit', (e) => {
        e.preventDefault();
        const commentText = $('#comment').val().trim();

        $.ajax({
            "url": "/api/request-consultation",
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "phone": $('#phone').val(),
                "name": $('#client').val(),
                "comment": commentText === '' ? null : commentText,
            }
        })

        $('#smarthome-order-body-form').html('<span style="margin-top:-25px;">Заявка успешно отправлена!</span>');
    })

    $('#smarthome-order-popup-form').on('submit', (e) => {
        e.preventDefault();
        const commentText = $('#popup-comment').val().trim();

        $.ajax({
            "url": "/api/request-order",
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "phone": $('#popup-phone').val(),
                "name": $('#popup-client').val(),
                "good": $('#popup-id').val(),
                "comment": commentText === '' ? null : commentText,
            }
        })

        $('#popup-item .popup__body').html('<span>Заявка успешно отправлена!</span>');
    })

    $('#smarthome-idea-popup-form').on('submit', (e) => {
        e.preventDefault();
        const commentText = $('#popup-fb-message').val().trim();
        
        $.ajax({
            "url": "/api/request-suggestion",
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "email": $('#popup-fb-mail').val(),
                "phone": $('#popup-fb-phone').val(),
                "message": commentText === '' ? null : commentText,
                "theme": $('#popup-fb-theme').val(),
                "fio": $('#popup-fb-name').val(),
            }
        })

        $('#popup-feedback .popup__body').html('<span>Ваша идея успешно отправлена!</span>');
    })
})
