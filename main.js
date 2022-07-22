song = "";
leftWristX = 0;
leftWristY = 0;


function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600 , 420);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
    }
    }

function modelLoaded(){
    console.log("Posenet is initialize");
}

function draw(){
    image(video , 0 , 0 , 600 , 420);
}

function play(){
    song.play();
}

function stop(){
    song.stop();
}