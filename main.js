function setup()
{
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose,gotPoses');

}
function draw() {
background('#0000FF')

document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference +"px";
fill('#90093');
stroke('#90093');
square(noseX, noseY,difference);
}
function modelLoaded() {
console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
if(results.legnth > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX +" noseY = " + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWrist);

console.log("leftWristX =" + leftWristX +" rightWristX = " + rightWristX +" difference = " + difference);

}
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;