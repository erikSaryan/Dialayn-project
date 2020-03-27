function get_geo() {
    window.onload = function () {
        let country = ymaps.geolocation.country
        let city = ""
        if(country == "Россия" ){
            city = ymaps.geolocation.city
        }
        else {
            city = "Странах СНГ"
        }
        let text = "Средство №1 в " + city + " стабилизирующее выработку инсулина и уровень фосфора в организме"
        $('#show_country_text').text(text);
    }

}

$( document ).ready(function() {
    get_geo()
});
