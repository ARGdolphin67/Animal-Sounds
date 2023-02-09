//https://teachablemachine.withgoogle.com/models/VNl-mLZFg/ animal
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VNl-mLZFg/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear -'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy -'+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img1=document.getElementById('alien1');
        img2=document.getElementById('alien2');
        img3=document.getElementById('alien3');
        img4=document.getElementById('alien4');

        if(results[0].label=="Meowing"){
            img1.src='catgif.gif';
            img2.src='dog.jpeg';
            img3.src='lion.jpeg';
            img4.src='cow.webp';
        }
        else if(results[0].label=="barking"){
            img1.src='cat.jpeg';
            img2.src='doggif.gif';
            img3.src='lion.jpeg';
            img4.src='cow.webp';
        }
        else if(results[0].label=="Roaring"){
            img1.src='cat.jpeg';
            img2.src='dog.jpeg';
            img3.src='liongif.gif';
            img4.src='cow.webp';
        }
        else if(results[0].label=="mooing"){
            img1.src='cat.jpeg';
            img2.src='dog.jpeg';
            img3.src='lion.jpeg';
            img4.src='cowgif.gif';
        }
    }
}