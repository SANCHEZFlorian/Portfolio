
function generate() {

    // Fonction de génération du code Hexadécimal
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = hexValues[x];
            a += y;
        }
        return a;
    }

    // Génère les deux codes Hexadécimal et l'angle du gradient
    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);

    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

    document.querySelector(".box").style.background = gradient;


    // var newColor3 = populate('#');
    // var newColor4 = populate('#');
    // var angle2 = Math.round(Math.random() * 360);

    // var gradient2 = "-webkit-linear-gradient(" + newColor3 + ", " + newColor4 + ") ; -webkit-background-clip: text -webkit-text-fill-color: transparent";

    // document.querySelector(".titre").style.background = gradient2;
}

document.addEventListener("DOMContentLoaded", generate());
