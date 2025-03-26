var dest = new Date("Mar 27,2025 10:30:00").getTime();
var x = setInterval(function () {
        var now = new Date().getTime();

        var diff = dest - now;
        console.log(diff);

        var days = Math.floor(diff / (60 * 60 * 24 * 1000));
        console.log(days);

        var hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        console.log(hours)

        var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        console.log(min)
        var sec = Math.floor((diff % (60 * 1000)) / 1000);
        console.log(sec)

        document.getElementById("demo").innerHTML = days + "days," + hours + "hrs:" + min + "min:" + sec + "s"

}, 1000);
