let video;
let poseNet; // This would be the machine learning model
let poses;
let emojis = [];
let neutral;
// import FaceExpressionNet from 'lib/faceapi'
// let net = FaceExpressionNet();
// console.log(net);
let canv;


function setup() {
    createCanvas(640, 480);
    background(255);
    video = createCapture(VIDEO);
    filter(INVERT);

    faceapi.load
    // faceapi.loadSsdMobilenetv1Model('/models')
    // faceapi.loadFaceExpressionModel('/models');
    faceapi.loadFaceLandmarkModel('/models');

}



function draw() {
    //background(0);
    fill(255);
    stroke(255);
    //console.log(video.elt)


    faceapi.detectLandmarks(video.elt)
        .then((faces) => {


          image(video, 0, 0); // Video gives an image every frame, display at given coords
          filter(GRAY);
          if (faces == undefined) {

            console.log("No face detected");

          } else {

            var pos = faces.positions;
            //console.log(faces);
            noFill();
            stroke(255);
            strokeWeight(2);
            beginShape();
            vertex(pos[0].x, pos[0].y);
            for (let i = 1; i < pos.length; i++) {
              vertex(pos[i].x, pos[i].y);
            }
            endShape();
            //faceapi.drawLandmarks(canv, faces, {lineWidth: 2, color: 'black'})

          }

        });

    //
    // faceapi.detectAllFaces(video.elt).withFaceExpressions()
    //     .then((allFaces) => {
    //
    //         background(255);
    //         image(video, 640, 0, -640, 480)
    //         for (var detectionsWithExpressions of allFaces) {
    //             console.log(allFaces);
    //
    //             let bestExpr = "";
    //             let max = 0;
    //
    //
    //             if (detectionsWithExpressions == undefined) {
    //                 console.log("No face detected");
    //                 // bestExpr = "neutral";
    //                 // max = 1;
    //                 // background(255);
    //                 // image(video, 0, 0);
    //             }
    //             else {
    //
    //                 let face = detectionsWithExpressions.detection;
    //                 let exprs = detectionsWithExpressions.expressions;
    //                 for (let i = 0; i < exprs.length; i++) {
    //                     if (exprs[i].probability > max) {
    //                         max = exprs[i].probability;
    //                         bestExpr = exprs[i].expression;
    //                         bestImg = emojis[i];
    //                     }
    //                 }
    //
    //                 console.log(landmarks);
    //
    //                 let small = Math.max(face.box.width, face.box.height);
    //
    //                 image(bestImg, face.box.x, face.box.y, small, small);
    //                 // console.log(neutral, face.box.x, face.box.y, small, small);
    //                 // co
    //             }
    //         }
    //     });
    }
