var canvas;

window.onload = function() {
    canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    shard.setupcanvas(canvas);
    var c = canvas.getContext('2d');
    var circles = [];
    var speed = 3;
    var warm = [
        "red", "darkred", "orange", "darkorange", "yellow", "darkyellow", "crimson"
    ]
    var cold = [
        "blue", "darkblue", "green", "darkgreen", "lime", "teal"
    ]
    var mystical = [
        "indigo", "violet", "purple", "magenta"
    ]
    var rainbow = [
        "red", "orange", "yellow", "green", "blue", "indigo", "violet", "magenta"
    ]

    var clrs = mystical;

    for (let i = 0; i < 1000; i++) {
        var clr;
        clr = clrs[Math.floor((Math.random() * clrs.length - 0.00001))];

        var circ = new shard.circle(Math.random() * innerWidth, Math.random() * innerHeight, 30, c, "transparent", clr)
        circ.setdrawevent(circanim);
        circ.dx = (Math.random() * 2 - 1) * speed;
        circ.dy = (Math.random() * 2 - 1) * speed;
        circles.push(circ);
    }



    function animate() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.clear();
        circles.forEach(circ => {
            circ.draw();
        });
        requestAnimationFrame(animate);

    }

    animate();
}

function circanim(circ) {
    if (circ.dism(canvas) > 50) {
        circ.setrad(5);
    } else {
        circ.setrad(5 + (Math.pow(10 - circ.dism(canvas) / 5, 2)) / 2);
    }

    circ.changepos(circ.dx, circ.dy);

    if (circ.x > innerWidth + circ.r) {
        circ.x = -circ.r;
    }
    if (circ.x < -circ.r) {
        circ.x = innerWidth + circ.r;
    }

    if (circ.y > innerHeight + circ.r) {
        circ.y = -circ.r;
    }
    if (circ.y < -circ.r) {
        circ.y = innerHeight + circ.r;
    }

}