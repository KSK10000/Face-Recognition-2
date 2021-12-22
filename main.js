Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function captureimg(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JDw6WDVVN/model.json',modelloaded);
function modelloaded(){
    console.log("Your Model is successfully loaded");
}