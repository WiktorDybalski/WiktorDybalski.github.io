// document.getElementById("reload0").addEventListener("click", function () {
//     location.reload();
// });
document.getElementById("reload0").addEventListener("click", function() {
    document.getElementById("s1").scrollIntoView({ behavior: 'smooth' });

    setTimeout(function() {
        location.reload();
    }, 500);
});

document.getElementById("reload1").addEventListener("click", function() {
    document.getElementById("a1").scrollIntoView({ behavior: 'smooth' });

    setTimeout(function() {
        location.reload();
    }, 500);
});
document.getElementById("reload2").addEventListener("click", function() {
    document.getElementById("a2").scrollIntoView({ behavior: 'smooth' });

    setTimeout(function() {
        location.reload();
    }, 500);
});
