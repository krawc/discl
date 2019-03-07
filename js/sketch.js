let video;


function setup() {
    createCanvas(640, 480);
    background(255);
    video = createCapture(VIDEO);
    faceapi.load;
    faceapi.loadFaceLandmarkModel('/models');

}



function draw() {
    fill(255);
    stroke(255);

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

          }

        });

    }
