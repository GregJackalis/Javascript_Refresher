var golfWords = ["Hole in one!", "Eagle", "Birdie", "Par", "Boogie", "Double Boogie", "Go Home!"]

function golfScore(par_of_course, strokes) {
    var score;
    if (strokes == 1) {
        score = golfWords[0]
    } else if (strokes <= (par_of_course - 2)) {
        score = golfWords[1]
    } else if (strokes == (par_of_course - 1)) {
        score = golfWords[2]
    } else if (strokes == par_of_course) {
        score = golfWords[3]
    } else if (strokes == (par_of_course + 1)) {
        score = golfWords[4]
    } else if (strokes == (par_of_course + 2)) {
        score = golfWords[5]
    } else if (strokes >= (par_of_course + 3)) {
        score = golfWords[6]
    }

    return score
}

console.log(golfScore(5, 1))