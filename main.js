var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "" ;
    recognition.start();
} 

recognition.onresult = function(event) {
    console.log(event) ;

    var content = event.results[0][0].transcript ;
    console.log(content) ;

    if(content=="selfie") {
        console.log("taking selfie ----") ;
       speak() ;
} }

 Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");


function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function() {
        img_id = "selfie1" ;
        take_snapshot();
        speak_data = "Taking Your Next Selfie in 10 Seconds" ;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000) ;

    setTimeout(function() {
        img_id = "selfie2" ;
        take_snapshot();
        speak_data = "Taking Your Next Selfie in 15 Seconds" ;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000) ;

    setTimeout(function() {
        img_id = "selfie3" ;
        take_snapshot();
    }, 15000) ;
}

function take_snapshot() {
    console.log(img_id) ;
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+ data_uri +'">' ;
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+ data_uri +'">' ;
            
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+ data_uri +'">' ;
        }
    }) ;
}