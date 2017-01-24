var emblem_data = {
    emblems: [
        ["Administrator", "rgb(16, 37, 63)", "http://b3.ifrm.com/30609/91/0/p3003755/emblemdesigns_white.png", "-750px 0px", "0", "http://b3.ifrm.com/30609/91/0/p3003840/emblemdesigns_tangerine.png", "-450px, 0px", "0"]
    ]
}

function set_back_col(id, colour) {
    document.getElementById(id).style.backgroundColor = colour;
}

function set_layer_col(id, pos, colour) {
  document.getElementById(id + "_" + pos).style.backgroundImage = "url('" + colour + "')";
}

function set_layer_des(id, pos, design) {
  document.getElementById(id + "_" + pos).style.backgroundPosition = design;
}

function set_layer_rot(id, pos, no_degrees) {
  document.getElementById(id + "_" + pos).style.transform = "rotate(" + no_degrees + "deg)";
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
            set_back_col(id, emblems_all[i][1]);
            set_layer_col(id, "low", emblems_all[i][2]);
            set_layer_des(id, "low", emblems_all[i][3]);
            set_layer_rot(id, "low", emblems_all[i][4]);
            set_layer_col(id, "top", emblems_all[i][5]);
            set_layer_des(id, "top", emblems_all[i][6]);
            set_layer_rot(id, "top", emblems_all[i][7]);
        }
    }
}

$(function () {
    var player_name = get_this_player();
    set_emblem("emblem_user", player_name, emblem_data.emblems);
});
