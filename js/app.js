$(document).ready(function () {



    const t = new CardDeck({element: document.querySelector('.cd-card-container')});
    function remove()  {
        var $confirm = $('.confirm');
        var $reject = $('.reject');
        if ($('.cd-card').first()){
            $confirm.on('click', function() {
                $(this).parent().parent().remove();
                $("div.background>div:first-child").remove();
            });
            $reject.on('click', function() {
                $(this).parent().parent().remove();
                $("div.background>div:first-child").remove();
            });
        }
    }
    remove();

});