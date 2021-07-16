Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:100,
    constrainbts:{
facingMode:"enviroment"
    }
});
var camera=document.getElementById("cam");
Webcam.attach('  #cam  ');
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="cap_img" src"'+ data_uri +'"/>';
    });
}
console.log("ml5 version",ml5.version);
var varh=ml5.imageClassifier("MobileNet",hello);
function hello(){
    console.log("modeltoaded")
}
function heck(){
    var maam=document.getElementById("cap_img");
    varnmala.classify(maam,gotreselta)
}
function gotreselta(error,results){
    if(error){
        console.error(error);
    }else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label
    }
}