function take_Snapshot() {
    save("student_name.png");
}

function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    canvas.center();
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    rect(30, 20, 48, 425, 60);
    rect(530, 20, 48, 425, 60);
    rect(30, 20, 548, 55, 60);
    rect(30, 398, 548, 55, 60);
    ellipse(56, 426, 55, 55);
    ellipse(56, 46, 55, 55);
    ellipse(556, 426, 55, 55);
    ellipse(556, 46, 55, 55);
}