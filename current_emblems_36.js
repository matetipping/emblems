var emblem_data = {
    emblems: [
        ["Administrator", "rgb(16, 37, 63)", "http://b3.ifrm.com/30609/91/0/p3003755/emblemdesigns_white.png", "-750px 0px", "0", "http://b3.ifrm.com/30609/91/0/p3003840/emblemdesigns_tangerine.png", "-450px 0px", "0"],
        ["Daniel Terrington", "rgb(3, 23, 26)", "http://b3.ifrm.com/30609/91/0/p3005770/emblemdesigns_darkteal.png", "0px -450px", "0", "http://b3.ifrm.com/30609/91/0/p3003755/emblemdesigns_white.png", "-150px -450px", "0"]
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
            return;
        }
    }
    set_back_col(id, "rgb(0, 0, 0)");
    set_layer_col(id, "low", "none");
    set_layer_col(id, "top", "none");
}

function set_topic_avatars(emblems) {
    var len = emblems.length;
    var i;
    for (i = 0; i < len; i++) {
        var avatarHTML = '<div class="emblem" style="width: 150px;height: 150px;background: ' + emblems[i][1] + '; z-index: 0; overflow: hidden; display: inline-block; box-shadow: 0px 0px 2px #000;"><div class="low_design" style="background: url(' + emblems[i][2] + ') ' + emblems[i][3] + '; width: 150px; height: 150px; transform:rotate(' + emblems[i][4] + 'deg); position: absolute;"></div><div class="top_design" style="background: url(' + emblems[i][5] + ') ' + emblems[i][6] + '; width: 150px; height: 150px; transform:rotate(' + emblems[i][7] + 'deg); position: absolute;"></div><div class="overlay" style="background: url(http://b3.ifrm.com/30609/91/0/f7005563/emblem_overlay.png); width: 150px; height: 150px; background-size: 150px; position: absolute; box-shadow: 0px 0px 1px #000;"></div></div>';

            $('table.profile thead tr th.1').each(function() {
                if ($(this).html() === emblems[i][0]) {
                    $(this).parents('table.profile').find('div.emblem').replaceWith(avatarHTML);
                }
            });

        
        if (location.href.indexOf('/msg/') == -1) {
            $('td.c_username span').each(function() {
                if ($(this).html() === emblems[i][0]) {
                    $(this).parents('tr[id*="post-"]').next('tr').find('div.emblem').replaceWith(avatarHTML);
                }
            });
        }
    }
}

$(function () {
    var player_name = get_this_player();
    set_emblem("emblem_user", player_name, emblem_data.emblems);
    var opponent_name = get_opponent(player_name, tipping_data.round, tipping_data.fixtures);
    set_emblem("emblem_opponent", opponent_name, emblem_data.emblems);
    set_topic_avatars(emblem_data.emblems);
});
