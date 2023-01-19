//https://teachablemachine.withgoogle.com/models/oN9BbutVo/

//https://teachablemachine.withgoogle.com/models/VNl-mLZFg/ animal
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VNl-mLZFg/model.json',modelReady);
}

function modelReady(){
    classifier.classifier(gotResults);
}