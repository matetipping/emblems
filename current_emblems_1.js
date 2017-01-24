var emblem_data = {
    emblems: [
        ["Administrator", "rgb(16, 37, 63)", "http://b3.ifrm.com/30609/91/0/p3003755/emblemdesigns_white.png", "-750px 0px", "0", "http://b3.ifrm.com/30609/91/0/p3003840/emblemdesigns_tangerine.png", "-450px 0px", "0"]
    ]
}

function set_back_col(id, colour) {
    document.getElementById(id).style.background = colour;
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
            set_back_col(id, emblems[i][1]);
        }
    }
}

$(function () {
    var player_name = get_this_player();
    set_emblem("emblem_user", player_name, emblem_data.emblems);
}
 
