Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{facingMode:"environment"}
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
 
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src ="'+data_uri+'"/>';
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelloaded);
function modelloaded() {
    console.log("modelloaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results) {
    if(error){
        console.error(error);
    }
    else{console.log(result);
    document.getElementById("object_name").innerHTML=results[0].label;}
}