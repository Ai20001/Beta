$(document).ready(function() {
    // Обработка кликов
    $('#click-img').click(function() {
        $.post('/click', function(data) {
            $('#coins').text(data.coins);
        });
    });

    // Покупка улучшений
    $('.buy-btn').click(function() {
        var upgradeId = $(this).data('upgrade-id');
        $.post('/buy_upgrade', { upgrade_id: upgradeId }, function(data) {
            $('#coins').text(data.coins);
            // Обновление монет в час и другой логики
        }).fail(function(response) {
            alert(response.responseJSON.error);
        });
    });

    // Загрузка данных при инициализации страницы
    $.get('/load_data', function(data) {
        $('#coins').text(data.coins);
        // Обновление монет в час и другой логики
    });
});
