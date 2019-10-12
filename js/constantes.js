const TOP = 1;
const BOTTOM = 2;
const LEFT = 3;
const RIGHT = 4;
const IDPERE = "area";
const MALE = "male";
const FEMALE = "female";

/**
 * Valeur random de X
 * @return Valeur random de X Conforme à la balise area
 */
function randomX() {
    return parseInt(Math.random() * parseInt($("#area").css('width'), 10));
}

/**
 * Valeur random de Y
 * @return Valeur random de Y Conforme à la balise area
 */
function randomY() {
    return parseInt(Math.random() * parseInt($("#area").css('height'), 10));
}

function randomDirection() {
    return parseInt(Math.random() * 4) + 1;
}

function randomSexe() {
    return parseInt(Math.random() * 2) + 1 == 1 ? MALE : FEMALE;
}

function substrpx(sch) {
    return sch.substr(0, sch.length - 2);
}
