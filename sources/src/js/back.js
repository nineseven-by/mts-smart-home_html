import $ from "jquery";

$(function() {

    $('.subscribe__form').on('submit', (e) => {
        e.preventDefault();

        const currentFormData = $('#submitable-form__footer').serializeArray();
          
        $.ajax({
            "url": "http://localhost:3500/request-mailing",
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "email": currentFormData.find(({ name }) => name === 'client-email')?.value,
                "news": currentFormData.find(({ name }) => name === 'sub-news')?.value === 'on' ? 'true' : 'false',
                "promotions": currentFormData.find(({ name }) => name === 'sub-promo')?.value === 'on' ? 'true' : 'false'
            }
        })

        $('#submitable-form__footer .subscribe__submit').text('Вы успешно подписались!');
        $('#submitable-form__footer .subscribe__submit').attr('disabled', true);
    })


    $('.smarthome-order__form').on('submit', (e) => {
        e.preventDefault();

        const form = $('.smarthome-order__form');
        const commentText = $('#comment').val().trim();

        $.ajax({
            "url": "http://localhost:3500/request-consultation",
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

        $('.smarthome-order__form').html('<span style="margin-top:-25px;">Заявка успешно отправлена!</span>');
    })
})