function showDiv(id) {
    for (var i = 1; i < 6; i++) {
        document.getElementById(i).style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

function test(id) {
    document.getElementById(id).style.display = "block";
}