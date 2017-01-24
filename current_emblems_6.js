var emblem_data = {
    emblems: [
        ["Administrator", "rgb(16, 37, 63)"]
    ]
}

function set_back_col(id, colour) {
    document.getElementById(id).style.backgroundColor = colour;
}

// returns the player's name
function get_this_player() {
    return $("div#top_info strong a").html ();
}

function set_emblem(id, name, emblems_all) {
    var name_chk = "";
    var i;
    var len = emblems_all.length;
    for (i = 0; i < len; i++) {
        name_chk = emblems_all[i][0];
        if (name_chk === name) {
            var back_colour = emblems_all[i][1];
            set_back_col(id, back_colour);
        }
    }
}

$(function () {
    var player_name = get_this_player();
    set_emblem("emblem_user", player_name, emblem_data.emblems);
});
