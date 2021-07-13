Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:100,
    constrainbts:(
        facingMode:"environment"
    )
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
