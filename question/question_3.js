function set_date() {
    var date = new Date();
    date.setDate(date.getDate() + 2);
    var str = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    $(".x_price_previous").text(str)
}

$( document ).ready(function() {
    set_date()
});
