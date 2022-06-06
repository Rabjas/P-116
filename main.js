noseX="";
noseY="";
function preload(){
    mustache=loadImage("https://i.postimg.cc/6QHkxfrF/download-removebg-preview-1.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,30,30);
}
function takeSnapshot(){
    save("Mustache Filter Image.png");
}
function modelLoaded(){
    console.log("Model Is Loaded");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX+ " nose y = "+noseY);
    }
}