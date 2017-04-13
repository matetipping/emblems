easter_data = {
    tips: [
        ["Dannelboyz", 5, 12, 40, 3, 7, 30, 10, 30, 35],
        ["Kaytley🐐", 2, 10, 30, 1, 8, 25, 10, 35, 35],
        ["Mann", 3, 5, 35, 2, 6, 29, 9, 31, 33],
        ["Bigbadbrucey", 2, 6, 35, 3, 6, 24, 9, 26, 26],
        ["Flagpies", 6, 22, 46, 5, 13, 34, 16, 30, 36],
        ["Craig Terrington", 3, 9, 40, 3, 8, 33, 7, 32, 32],
        ["Alex Rowland", 3, 7, 47, 2, 7, 25, 7, 29, 35],
        ["Harry Rowland", 2, 12, 41, 3, 8, 26, 9, 32, 31],
        ["Steve", 2, 13, 40, 3, 8, 30, 8, 40, ]
}

get_tips(player_name) {
    var i;
    var len = easter_data.tips.length;
    for (i=0; i < len; i++) {
        if (easter_data.tips[i][0] === player_name) {
            return easter_data.tips[i];
        }
    }
    return [];
}

calculate_score(player_name, game_no, scale_factor) {
    var results = get_tips("Administrator");
    var player_tips = get_tips(player_name);
    result = results[game_no];
    player_tip = player_tips[game_no];
    var score;
    if (player_tip <= result) {
        score = player_tip * scale_factor;
    } else {
        var difference = player_tip - result;
        score = result - 2*difference;
        if (score < 0) {
            score = 0;
        }
    }
    return score;
}

set_scores() {
    
}|
