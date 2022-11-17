
object=[];
status="";



function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380)
    video.hibe();
}

function draw() {
    image(video,0,0,380,380);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Detechting Objects";
    object_name=document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status =true;
    
}