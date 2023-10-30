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

    document.getElementById("textbox").innerHTML = content ;
    if(content=="take my selfie") {
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
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot();
    }, 5000)
}

var img_id = "selfie1" ;

function take_snapshot() {
    var img_id = "selfie1" ;
    console.log(img_id) ;
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+ data_uri +'">' ;
            img_id = "selfie2" ;

            var synth = window.speechSynthesis;
            speak_data = "Taking your next Selfie in 5 seconds";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);

            setTimeout(function () {
                save1();
            }, 5000)
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+ data_uri +'">' ;
            img_id = "selfie3" ;

            var synth = window.speechSynthesis;
            speak_data = "Taking your next Selfie in 5 seconds";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);

            setTimeout(function () {
                save2();
            }, 5000)
            
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+ data_uri +'">' ;
            save3() ;
        }
    }) ;
}

function save1() {
    link1 = document.getElementById("link1");
    image_src1 = document.getElementById("selfie1").src;
    link1.href = image_src1;
    link1.click();
}

function save2() {
    link2 = document.getElementById("link2");
    image_src2 = document.getElementById("selfie2").src;
    link2.href = image_src2;
    link2.click();
}

function save3() {
    link3 = document.getElementById("link3");
    image_src3 = document.getElementById("selfie3").src;
    link3.href = image_src3;
    link3.click();
}