var emblem_data = {
    emblems: [
        ["Administrator", "rgb(16, 37, 63)"]
    ]
}

function set_back_col(id, colour) {
    $(id + ".emblem").css({ background: colour });
}

// returns the player's name
function get_this_player() {
    return $("div#top_info strong a").html ();
}

function set_emblem(id, name, emblems) {
    var name_chk = "";
    var i;
    var len = emblems.length;
    for (i = 0; i < len; i++) {
        name_chk = emblems[i][0];
        if (name_chk === name) {
            var back_col = emblems[i][1];
            set_back_col(id, back_col);
            return;
        }
    }
}

$(function () {
    var player_name = get_this_player();
    set_emblem("emblem_user", player_name, emblem_data.emblems);
}
 
