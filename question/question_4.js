function change_number() {
    let value = localStorage.getItem('value');
    value = value - 1
    if(value >= 7) {
        $(".lastpack").empty()
        $(".lastpack").text(value)
        localStorage.setItem('value', value);
    } else {
        return
    }
}

function check_current_value() {
    var state = localStorage.getItem("state")
    if(state == null || state == "null" ) {
        localStorage.setItem('value', 60);
        localStorage.setItem("state", 1)
        $(".lastpack").text(60)
    }
    else {
        let value = localStorage.getItem('value');
        $(".lastpack").text(value)
    }
}

function refresh() {
    localStorage.setItem('value', 60);
    localStorage.setItem('state', null);
}

$( document ).ready(function() {
    //refresh()
    check_current_value()
    setInterval(change_number, 5000);
});
