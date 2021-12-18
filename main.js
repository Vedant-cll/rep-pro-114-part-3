noseX=0;
noseY=0;

function preload(){
    clownNose = loadImage('https://th.bing.com/th/id/R.6467df6ed6a1f066fe2145f5d2e8847f?rik=%2fyg13uN8oEICMA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmustache-transparent-png%2fmustache-transparent-png-23.png&ehk=QH6qARlW%2b0AbXN3Hi8OBVUhUXVZJOTZl9srfXIresgc%3d&risl=&pid=ImgRaw&r=0');
}

function setup() {
canvas = createCanvas(590,590);
canvas.center(); 
video = createCapture(VIDEO);
video.size(590, 590);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    noseX =results[0].pose.nose.x - 40;
    noseY = results[0].pose.nose.y;
    
    console.log("noseX =" + noseX);
    console.log("noseY=" + noseY);
    
    } 
    }

    function draw(){
        image(video, 0, 0, 590, 590);
        image(clownNose,noseX, noseY, 90,80 );
    }
    
        function take_snapshot(){
            save('vedant.png');
        }