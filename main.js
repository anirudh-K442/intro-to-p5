function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(410, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 100, 100, 440, 280);
    rect(0, 0, 640, 480);
    stroke("red");
    noFill();

    circle(0, 0, 70)
    circle(640, 0, 70)
    circle(640, 480, 70)
    circle(0, 480, 70)
    strokeWeight(50)
}

function take_snapshot() {
    save('student_name.png');
}