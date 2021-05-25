function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('', modelLoaded);
}

function modelLoaded(){
    console.log('Model Loaded')
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function gotResult(error, results){
    if(error)
else{
    document.getElementById("result_object_name").innerHtml=results[0].label;
    document.getElementById("result_object_accuracy").innerHtml=results[0].cofidence.tofixed(3);
}
}