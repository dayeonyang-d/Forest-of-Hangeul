let first;
let img2;
let img3;
let img4;
let imgLeaves;
let butter;

let squirrel;

let howto1withbutton;
let howto2withbutton;
let howto3withbutton;
let howto4withbutton;

let gobackbutton;
let enterbutton;
let fromstart;
let compliment1;
let compliment2;
let compliment3;
let remake;
let erase;

let moodwithbutton;
let moveontoforest;
let namewithbutton;

let butterfly, bird;
let butterflyX, butterflyY;
let birdX, birdY;

let butterflyOffset = 0;
let birdOffset = 0;

let showStartGuide = true;
let guideStartTime = 0;

let showQRCanvas = false;

let imgEffect;
let imgFade;

let radius = [];
let angle = [];

let butterflyImg;


let imga1;
let imga2;
let imga3;
let imga4;
let imga5;
let imga6;

let page = 1;

let input;
let userName = "";
let themeColor = null
let selected = '';

let mySound1;
let mySound2;
let mySound3;
let startSound;

let myFont;
let currentDateString;

let video;
let handpose;
let hands = [];
let letters = [];
let textToWrite = [];
let currentIndex = 0;
let currentBg = null;
let letterImages = {};
let letterImages1 = {};
let letterImages2 = {};

let lastAddedTime = 0;
let lastAddedTime1 = 0;
let time = 2000;

let finishStage0 = false;
let finishStage1 = false;

let textTime;
let getFinishStage0 = false;
let textTime1;
let getFinishStage1 = false;

let GE;
let fistGesture;
let isFist = false;
let palmCenter = null;

let today;

let generateQRButton = null;
let saveQRButton = null;
let qrCanvas = null;
let qrGenerated = false;
let exportCanvas;

let numDots = 10;
let angleOffset = 0;

let capturedImage;

const CHOSUNG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const JUNGSUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const JONGSUNG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

const complexVowelMap = {
  'ㅘ': ['ㅗ', 'ㅏ'],
  'ㅙ': ['ㅗ', 'ㅐ'],
  'ㅚ': ['ㅗ', 'ㅣ'],
  'ㅝ': ['ㅜ', 'ㅓ'],
  'ㅞ': ['ㅜ', 'ㅔ'],
  'ㅟ': ['ㅜ', 'ㅣ'],
  'ㅢ': ['ㅡ', 'ㅣ']
};

const complexConsonantMap = {
  'ㄲ': ['ㄱ', 'ㄱ'],
  'ㄸ': ['ㄷ', 'ㄷ'],
  'ㅃ': ['ㅂ', 'ㅂ'],
  'ㄳ': ['ㄱ', 'ㅅ'],
  'ㄵ': ['ㄴ', 'ㅈ'],
  'ㄶ': ['ㄴ', 'ㅎ'],
  'ㄺ': ['ㄹ', 'ㄱ'],
  'ㄻ': ['ㄹ', 'ㅁ'],
  'ㄼ': ['ㄹ', 'ㅂ'],
  'ㄽ': ['ㄹ', 'ㅅ'],
  'ㄾ': ['ㄹ', 'ㅌ'],
  'ㄿ': ['ㄹ', 'ㅍ'],
  'ㅀ': ['ㄹ', 'ㅎ'],
  'ㅄ': ['ㅂ', 'ㅅ']
};

const charToIndex = {
  'ㄱ': 1, 'ㄴ': 2, 'ㄷ': 3, 'ㄹ': 4, 'ㅁ': 5,
  'ㅂ': 6, 'ㅅ': 7, 'ㅇ': 8, 'ㅈ': 9,
  'ㅊ': 10, 'ㅋ': 11, 'ㅌ': 12, 'ㅍ': 13, 'ㅎ': 14,
  'ㅏ': 15, 'ㅐ': 16, 'ㅑ': 17, 'ㅒ': 18, 'ㅓ': 19, 'ㅔ': 20,
  'ㅕ': 21, 'ㅖ': 22, 'ㅗ': 23, 'ㅛ': 24, 'ㅜ': 25, 'ㅠ': 26, 'ㅡ': 27, 'ㅣ': 28
};
let showCongratsOnce = true;
let fingerNight
let finger

let currentLine = 0;
let lastTime = 0;

// let tutorialTexts = [
//   "1. 이름을 한글로 입력해요.",
//   "2. 카메라에 손을 비추면, 손을 인식해요.",
//   "3. 주먹을 쥐었다 펴면, 자모가 하나씩 화면에 나타나요.",
//   "4. 손이 자모 위를 지나가면, 자연의 모습으로 변해요.",
//   "5. 한 번 더 손을 올리면, 아름다운 효과가 펼쳐져요.",
//   "6. 완성된 한글숲은 QR로 저장할 수 있어요.",
//   "7. 이름 속 한글의 아름다움, 소중히 간직해요.",
//   "8. 설명 끝! 이제 다음 화면으로 넘어가보세요~"
// ];


function preload() {

  first = loadImage('assets/first.png');
  img2 = loadImage('assets/이름.png');
  img3 = loadImage('assets/분위기.png');
  img4 = loadImage('assets/블러배경.png');
  imgLeaves = loadImage("assets/leaves.png");
  imgStar = loadImage("assets/star.png");
  butter = loadImage("assets/butter.png");

  squirrel = loadImage("assets/squirrelMouseover.png");
  imgEffect = loadImage('assets/effect.png');
  butterflyImg = loadImage('assets/butterfly.png');

  howto1withbutton= loadImage('assets/howto1.png');
  howto2withbutton= loadImage('assets/howto2.png');
  howto3withbutton= loadImage('assets/howto3.png');
  howto4withbutton= loadImage('assets/howto4.png');
  
  gobackbutton = loadImage('assets/gobackbutton.png');
  enterbutton = loadImage('assets/enterbutton.png');
  fromstart = loadImage('assets/fromstart.png');

  remake = loadImage('assets/remake.png');
  erase = loadImage('assets/erase.png');

  moodwithbutton = loadImage('assets/mood.png');
  moveontoforest = loadImage('assets/moveontoforest.png');
  namewithbutton = loadImage('assets/name.png');

  butterfly = loadImage('assets/나비.png');
  bird = loadImage('assets/새.png');

  imga1 = loadImage('assets/열정.jpg');
  imga2 = loadImage('assets/청춘.jpg');
  imga3 = loadImage('assets/사랑.jpg');
  imga4 = loadImage('assets/희망.jpg');
  imga5 = loadImage('assets/낭만.jpg');
  imga6 = loadImage('assets/설렘.jpg');

  mySound1 = loadSound('assets/sunnyday.mp3');
  mySound2 = loadSound('assets/sunnyforest.mp3');
  mySound3 = loadSound('assets/sunnymelody.mp3');
  startSound = loadSound('assets/springmelody.mp3');

  myFont = loadFont('assets/온글잎 류류체.ttf')

  for (let char in charToIndex) {
    let idx = charToIndex[char];
    letterImages1[char] = loadImage(`assets/${idx}_flower.png`);
    letterImages2[char] = loadImage(`assets/${idx}.png`);
  }

  fistGesture = new fp.GestureDescription('fist');
  [
    fp.Finger.Thumb,
    fp.Finger.Index,
    fp.Finger.Middle,
    fp.Finger.Ring,
    fp.Finger.Pinky
  ].forEach(finger => {
    fistGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    fistGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  });

  GE = new fp.GestureEstimator([fistGesture]);
}


function setup() {
  createCanvas(1280, 960);
  textFont(myFont);

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  today = `${year}.${month}.${day}`;

  let constraints = {
  video: {
    width: 1280,
    height: 960
  },
  audio: false  // ✅ 마이크 비활성화
  };

video = createCapture(constraints, () => {
  console.log("Video ready: ", video.width, video.height);
});

video.size(1280, 960);
video.hide();

handpose = ml5.handpose(video, modelReady);
handpose.on("predict", results => {
  hands = results;
});


  butterflyX = width / 6;
  butterflyY = height / 3;

  birdX = width / 6 * 5;
  birdY = height / 3 - 80;
  
  myCanvas = createCanvas(1280, 960);  // ✅ p5 캔버스 객체를 저장


}

function draw() {
  if (page === 1){
    image(first, 0, 0, width, height);

    if (!startSound.isPlaying()) {
      startSound.loop();  
    }

    // 나비: 좌우로 흔들리듯 이동 
    butterflyOffset += 0.05;
    image(butterfly, butterflyX + sin(butterflyOffset) * 30 - 40, butterflyY - 40, 160, 160);

    // 새: 위아래로 떠오르듯 이동
    birdOffset += 0.03;
    image(bird, birdX - 40, birdY + sin(birdOffset) * 20 - 40, 160, 160);
    
  }
  else if (page === 2) {
    image(howto1withbutton, 0, 0, width, height);
    
  }

  else if (page === 3) {
  image(howto2withbutton, 0, 0, width, height);

  }

  else if (page === 4) {
    image(howto3withbutton, 0, 0, width, height);
  }

  else if (page === 5) {
    image(howto4withbutton, 0, 0, width, height);
   if (hands.length > 0) {
  drawKeypoints();
}
    drawKeypoints();

  let tutorialWord = ['ㅅ', 'ㅜ', 'ㅍ'];

  if (hands.length > 0) {
    let hand = hands[0];
    let landmarks = hand.landmarks;
    let palm = landmarks[0];
    let mirroredPalmX = width - palm[0];

    const gesture = GE.estimate(hand.landmarks, 8.5);
    let isFistNow = false;

    if (gesture.gestures.length > 0) {
      const best = gesture.gestures.reduce((p, c) => p.score > c.score ? p : c);
      isFistNow = best.name === "fist";
    }

    if (isFistNow && !wasFist && currentIndex < tutorialWord.length && (millis() - lastAddedTime1) > 2000) {
      let isFar = letters.every(l => dist(l.x, l.y, mirroredPalmX, palm[1]) > 40);
      if (isFar) {
        letters.push({
          char: tutorialWord[currentIndex],
          x: mirroredPalmX - 25,
          y: palm[1] - 25,
          fade: 0,
          targetFade: 0,
          touchTime: 0
        });
        currentIndex++;
        lastAddedTime1 = millis();
        console.log(lastAddedTime1);
      }
    }

    wasFist = isFistNow;
  }

  // 렌더링
  for (let obj of letters) {
    let elapsed = millis() - obj.touchTime;
    obj.targetFade = elapsed < 2000 ? 255 : 0;
    obj.fade = lerp(obj.fade, obj.targetFade, 0.1);

    // 글자
    noStroke();
    fill(0, 255 - obj.fade);
    textSize(200);
    textAlign(CENTER, CENTER);
    text(obj.char, obj.x + 25, obj.y + 25); // 중앙 정렬

  }
  if (currentIndex == 1){
    fill(255);
    textSize(80);
    fill(255);
    text("베리굿! 다른 곳에도 찍어볼까요?", 700,450);
  }

  if (currentIndex == 2){
    fill(255);
    textSize(80);
    text("감 잡았네요!", 700,450);
  }

  if (currentIndex === tutorialWord.length) {
    fill(255);
    textSize(80);
    text("좋아요!", 640,450);
    text("이제 나만의 한글숲을 만들러 가볼까요?", 640,550);

  }
}

  else if(page === 6){
    image(namewithbutton, 0, 0, width, height);
    textSize(55);
    text("한글만 입력해주세요!", 250,500);
    textSize(40);
    text("두 세 글자를 추천합니다 :)", 900,600);
    
    if (!input) {
      input = createInput();
      input.size(200, 40);
      input.position((width - 150) / 2, height / 2 + 50);  // 완전 중앙
      
      input.style('background-color', 'white'); 
      input.style('color', 'rgba(49, 98, 0, 0.9)');                    
      input.style('border', 'none');
      input.style('border-radius', '10px');               
      input.style('padding', '5px 10px');
      input.style('outline', 'none');                   
      input.style('text-align', 'center');               
      input.style('font-size', '50px');
      input.style('font-family', 'Ownglyph');                  

      input.input(() => {
        userName = input.value();
      });
      
      input.mouseOver(() => {
      input.style('background-color', '#FFFF99'); // 연노란색
    });

    input.mouseOut(() => {
      input.style('background-color', 'white');
    });

    }

  }
  else if(page === 7){
    image(moodwithbutton, 0, 0, width, height);
    input.remove();
    currentIndex = 0;
  }
  else if(page === 8){
    mirroredX = null;
    palmY = null;
    palmCenter = null;

    if (hands.length > 0) {
      let hand = hands[0];
      palmCenter = getPalmCenter(hand.landmarks);
      mirroredX = width - palmCenter[0];
      palmY = palmCenter[1];
    }


    if(finishStage0 && (textTime < second()) && (second() < (textTime + 5))){
      fill(255);
      textSize(80);
      text("손을 흔들어보세요!", 640, 300);
    }

    textToWrite = splitToPureJamos(userName);
    console.log(textToWrite);
  
    if(selected == '열정') {
      currentBg = imga1;
      letterImages = letterImages1;
      themeColor = color(57, 97, 41);
    }
    if(selected == '청춘') {
      currentBg = imga2;
      letterImages = letterImages1;
      themeColor = color(167, 215, 144);
    }
    if(selected == '사랑') {
      currentBg = imga3;
      letterImages = letterImages1;
      themeColor = color(255, 229, 208);
    }
    if(selected == '희망') {
      currentBg = imga4;
      letterImages = letterImages1;
      themeColor = color(51, 113, 204);
    }
    if(selected == '낭만') {
      currentBg = imga5;
      letterImages = letterImages2;
      themeColor = color(234, 228, 223); 
    }
    if(selected == '설렘') {
      currentBg = imga6;
      letterImages = letterImages2;
      themeColor = color(240, 230, 246); 
    }

    if (currentBg) image(currentBg, 0, 0, width, height);

    drawKeypoints();
    // 공통 스타일 설정
    textSize(57);
    textAlign(CENTER, TOP);
    fill(themeColor); // 텍스트 색

    if(!showQRCanvas){
      // 지우기
      text("한획 지우려면", 140, 23);
      text("Space 버튼!", 140, 63);

      // 설명
      textAlign(CENTER, CENTER);
      text("내 이름으로 한글숲을 만들어봅시다!", width / 2 + 300, 50);
    }
/*
    //페이지 9 하단에 이름 + 날짜 출력
    fill(255);
    textSize(100);
    textAlign(CENTER, BOTTOM);

    // 날짜 정보 세팅 (미리 한 번 선언 필요)
    let today2 = new Date();
    let currentDateString = today2.getFullYear() + "." + nf(today2.getMonth() + 1, 2) + "." + nf(today2.getDate(), 2);

    text(userName + "의 한글숲 - " + currentDateString, width / 2, height - 20);
*/    

    if (currentIndex == 0 && showStartGuide && !showQRCanvas) {
    fill(255);
    textSize(70);
    text("주먹을 쥐었다 피면서 글자를 찍어보세요!", width / 2, 200);

    if (guideStartTime == 0) {
      guideStartTime = second();
      }

    if (second() > guideStartTime + 5) { // 5초 뒤 사라지게
      showStartGuide = false;
      }
    }

    if(currentIndex == textToWrite.length){
      finishStage0 = true;
      if(!getFinishStage0){
        textTime = second();
        getFinishStage0 = true;
      }
    }
    else{
      textTime = 0;
      getFinishStage0 = false;
    }
/*
    if(finishStage0 && (textTime < second()) && (second() < (textTime + 5)) && !showQRCanvas){
      fill(255);
      textSize(80);
      text("손을 흔들어보세요!", 640, 300);
    }
*/

    let count = 0;
    if(!finishStage1){
      for(let obj of letters){
        if(obj.stage == 1) {
          count++;
        }
      }
      if(count == textToWrite.length){
        finishStage1 = true;
        if(!getFinishStage1){
          textTime1 = second();
          getFinishStage1 = true;
        }
      }
      else{
        textTime1 = 0;
        getFinishStage1 = false;
      }
    }
/*
    if(finishStage1 && (textTime1 < second()) && (second() < (textTime1 + 5)) && !showQRCanvas){
      fill(255);
      textSize(80);
      text("손을 흔들어보세요!", 640, 300);
    }
*/
    
    if (hands.length > 0) {
      let hand = hands[0];
      let landmarks = hand.landmarks;
      palm = landmarks[0];

      let palmCenter = getPalmCenter(landmarks);  // 중심 좌표
      let mirroredX = width - palmCenter[0];

      const estimation = GE.estimate(landmarks, 8.5);
      let isFist = false;

  if (estimation.gestures.length > 0) {
    const best = estimation.gestures.reduce((a, b) => (a.confidence > b.confidence ? a : b));
    isFist = best.name === "fist";
  }

  if (isFist && !wasFist && currentIndex < textToWrite.length && (millis() - lastAddedTime) > 2000) {
    let isFar = letters.every(l => dist(l.x, l.y, mirroredX, palmCenter[1]) > 40);
    if (isFar) {
      letters.push({
        char: textToWrite[currentIndex],
        x: mirroredX,
        y: palmCenter[1]-20,
        fade: 0,
        targetFade: 0,
        touchTime: 0,
        stage: 0,
        shakeStart: 0,
        createdAt: millis(),
        imageFade: 0
      });
      currentIndex++;
      lastAddedTime = millis();
      console.log(lastAddedTime);

    }
  }

  wasFist = isFist;
}
/*
  if (page === 8 && finishStage1 && !qrGenerated && !showQRCanvas) {
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("QR로 내 숲 저장하기!", width / 2, height - 200);
  }
*/

  // QR 표시
  if (qrGenerated && qrCanvas) {
    image(qrCanvas, width - 250, height - 250);
  }

if (qrGenerated && qrCanvas) {
  image(qrCanvas, width - 250, height - 250);  // 생성된 QR 표시
}

// 다른 페이지로 가면 버튼 제거
if (page !== 8) {
  if (generateQRButton) {
    generateQRButton.remove();
    generateQRButton = null;
  }
  if (saveQRButton) {
    saveQRButton.remove();
    saveQRButton = null;
  }
}

// 손 중심과 손바닥으로 꽃 이미지 전환 트리거
for (let obj of letters) {
  if (hands.length > 0) {
    let hand = hands[0];
    let landmarks = hand.landmarks;

    for (let i = 0; i < landmarks.length; i++) {
      let lx = width - landmarks[i][0];  // 좌우 반전
      let ly = landmarks[i][1];

      let d = dist(lx, ly, obj.x, obj.y);
      if (d < 50 && millis() - obj.createdAt > 3000) {
        if (finishStage0 && obj.stage === 0) {
          obj.stage = 1;
          obj.touchTime = millis();
        } else if (finishStage1 && obj.stage === 1 && millis() - obj.touchTime > 1000) {
          obj.stage = 2;
          obj.shakeStart = millis();

          if (selected === '낭만' || selected === '설렘') {
            for (let i = 0; i < 6; i++) {
              radius[i] = random(100, 300);
              angle[i] = random(TWO_PI);
            }
          } else {
            butterfly = new Butterfly(obj.x + 90, obj.y + 90);
          }
        }

        break;  // 이미 변환했으면 다른 관절 확인할 필요 없음
      }
    }
  }


}
    

    // 렌더링
    textAlign(CENTER, CENTER);
    for (let obj of letters) {
      let elapsed = millis() - obj.touchTime;
      obj.targetFade = elapsed < 2000 ? 255 : 0;
      obj.fade = lerp(obj.fade, obj.targetFade, 0.1);

      // 글자 렌더링: stage가 0일 때만 표시
      if (obj.stage === 0) {
        noStroke();
        fill(red(themeColor), green(themeColor), blue(themeColor), 255 - obj.fade);
        textSize(350);
        text(obj.char, obj.x, obj.y);
      }

      // 이미지 렌더링: stage >= 1이면 이미지 표시
      let img = letterImages[obj.char];

      if (finishStage0 && img && obj.stage > 0) {
        obj.imageFade = lerp(obj.imageFade, 255, 0.1);
        push();
        tint(255, obj.imageFade);

        let dx = 0, dy = 0;
        image(img, obj.x - 170 + dx, obj.y - 170 + dy, 400, 400);

        if (finishStage1 && obj.stage === 2 && !showQRCanvas) {
          let shakeTime = millis() - obj.shakeStart;
          if(selected == '낭만' || selected == '설렘'){
            time = 3000;
          }
          if (shakeTime < time) {
            dx = random(-3, 3);
            dy = random(-3, 3);
            image(img, obj.x - 170 + dx, obj.y - 170 + dy, 400, 400);
            imgFade = lerp(imgFade, 255, 0.1);
            if(selected == '낭만' || selected == '설렘'){
              if (shakeTime > 1500) {
                let t = (shakeTime - 1500) / 1500;            
                let eased = exp(-4 * t);          
                imgFade = 255 * eased;
              }
            }
            push();
            tint(255, imgFade);

            if(selected == '낭만' || selected == '설렘'){
              for (let i = 0; i < 6; i++) {
              image(imgEffect, obj.x + radius[i] * cos(angle[i]) - 60, obj.y + radius[i] * sin(angle[i]) - 60, 220, 220);
              }

            }
            else{
              butterfly.update();
              butterfly.display();
            }
            
            pop();

          } else {
            obj.stage = 1; // 흔들림 끝나면 다시 stage 1
          }
        }
        
        pop();
      }
    }

    if(finishStage0 && (textTime < second()) && (second() < (textTime + 5)) && !showQRCanvas){
      fill(255);
      textSize(80);
      text("손을 자모 위로 천천히 지나가보세요!", 640, 200);
    }
    if(finishStage1 && (textTime1 < second()) && (second() < (textTime1 + 5)) && !showQRCanvas){
      fill(255);
      textSize(80);
      text("한번 더 지나가보세요!", 640, 200);
    }



  if (page === 8 && finishStage1 && !qrGenerated && !showQRCanvas) {
    fill(255);
    textSize(100);
    textAlign(CENTER, CENTER);
    text("QR로 내 숲 저장하기!", width / 2, height - 100);
    
  }
    if(showQRCanvas){
      //페이지 9 하단에 이름 + 날짜 출력
      fill(255);
      textSize(100);
      textAlign(CENTER, BOTTOM);

      // 날짜 정보 세팅 (미리 한 번 선언 필요)
      let today2 = new Date();
      let currentDateString = today2.getFullYear() + "." + nf(today2.getMonth() + 1, 2) + "." + nf(today2.getDate(), 2);

      text(userName + "의 한글숲 - " + currentDateString, width / 2, height - 20);
    }

    if(showQRCanvas){
      uploadCanvasAndMakeQR();
      page++;
    }
  } else if(page === 9){
    image( img4, 0, 0, width, height);

    if(!qrGenerated){
      
      fill(0);
      textSize(70);
      text("로딩 중", width / 2, 300);
      translate(width / 2, height / 2); // 중앙으로 이동

      let radius = 40;

      for (let i = 0; i < numDots; i++) {
        let angle = (360 / numDots) * i + angleOffset;
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;

        // 투명도 조절로 부드럽게 회전 느낌
        let alpha = map(i, 0, numDots, 50, 255);
        fill(100, 150, 255, alpha);
        noStroke();
        ellipse(x, y, 15);
      }

      // 회전 애니메이션
      angleOffset += 0.1; // 속도 조절 가능
    }
    else{

      //페이지 9 하단에 이름 + 날짜 출력
      fill(0);
      textSize(100);
      textAlign(CENTER, BOTTOM);

      // 날짜 정보 세팅 (미리 한 번 선언 필요)
      let today2 = new Date();
      let currentDateString = today2.getFullYear() + "." + nf(today2.getMonth() + 1, 2) + "." + nf(today2.getDate(), 2);

      text(userName + "의 한글숲 - " + currentDateString, width / 2, height - 20);

      // 이미지 띄우기
      image(capturedImage,width/2 - 150,10,300,225);

      if (qrGenerated && qrCanvas) {
        fill(50, 168, 82);
        rect(width/2 - 220, height/2 - 220, 440, 440);
        image(qrCanvas, width/2 - 200 , height/2 - 200 , 400, 400);  // 생성된 QR 표시
      }

    }

  }
  image(squirrel, mouseX-20, mouseY-20, 200, 200); 
}

function keyPressed() {
  // 왼쪽 방향키 눌렀을 때 뒤로가기 기능
  if (keyCode === BACKSPACE && page >= 2 && page < 6 && page == 7) {
    page--;

    if (page < 8 && input) {
      input.remove();
      input = null;
    }
    return;
  }
  if (keyCode === ENTER) {
    if (page === 1) {
      page = 2; // 제목 화면에서 howto1으로
    }
    else if (page >= 2 && page <= 4) {
      page++; // howto1~howto4 순차적으로 넘김
    }
    else if (page === 5) {
      page = 6; // howto4 다음 단계로 (자모 인식 or 이름 입력 단계)
    }
    else if (page === 6 && userName !== "") {
      page = 7; // 이름 입력 후 다음 단계로
      console.log(userName);
    }
    else if (page === 8 && finishStage1 && !qrGenerated){
      showQRCanvas = true;
    }
  }
  if (page === 8 && key === ' ') {
    if (letters.length > 0) {
      letters.pop();
      currentIndex--;
      finishStage1 = false;
    }
  }
}

function mousePressed() {

  if(page === 7){

    if (mouseX > 28 && mouseX < 418 && mouseY > 168 && mouseY < 480) {
      selected = '열정';
      console.log(selected);
      page += 1;

      if (startSound.isPlaying()) {
        startSound.stop();  
      }

      if (!mySound3.isPlaying()) {
        mySound3.loop();  
      }

    }

    if (mouseX > 446 && mouseX < 836 && mouseY > 168 && mouseY < 480) {
      selected = '청춘';
      console.log(selected);
      page += 1;

      if (startSound.isPlaying()) {
        startSound.stop();  
      }

      if (!mySound3.isPlaying()) {
        mySound3.loop();  
      }

    }

    if (mouseX > 864 && mouseX < 1254 && mouseY > 168 && mouseY < 480) {
      selected = '사랑';
      console.log(selected);
      page += 1;

      if (startSound.isPlaying()) {
        startSound.stop();  
      }

      if (!mySound1.isPlaying()) {
        mySound1.loop(); 
      }

    }

    if (mouseX > 28 && mouseX < 418 && mouseY > 542 && mouseY < 856) {
      selected = '희망';
      console.log(selected);
      page += 1;
      image(erase, 20, 430, 60, 60); // erase 버튼 이미지

      if (startSound.isPlaying()) {
        startSound.stop();  
      }

      if (!mySound1.isPlaying()) {
        mySound1.loop();  
      }

    }

    if (mouseX > 446 && mouseX < 836 && mouseY > 542 && mouseY < 856) {
      selected = '낭만';
      console.log(selected);
      page += 1;

      if (startSound.isPlaying()) {
        startSound.stop();  
      }
      if (!mySound2.isPlaying()) {
        mySound2.loop();  
      }

    }

    if (mouseX > 864 && mouseX < 1254 && mouseY > 542 && mouseY < 856) {
      selected = '설렘';
      console.log(selected);
      page += 1;

      if (startSound.isPlaying()) {
        startSound.stop();  
      }
      if (!mySound2.isPlaying()) {
        mySound2.loop();  
      }

    }
    
  }
if (page === 8) {
 
  //qr생성
    if (
    page === 8 && finishStage1 && !qrGenerated &&
    mouseX > width / 2 - 360 && mouseX < width / 2 + 360 &&
    mouseY > height - 150 && mouseY < height - 50
  ) {
    showQRCanvas = true;
  }
}
// 페이지 공통: Back/Next 버튼 클릭 처리
if (
  mouseX >= 34 && mouseX <= 34 + 326 &&
  mouseY >= 837 && mouseY <= 837 + 110
) {
  if (page > 1) {
    page--;
    console.log("⬅ Back 버튼 클릭됨, 현재 페이지:", page);
  }
}
const nextX = 986;
const nextW = 326;
const nextY = 837;
const nextH = 110;

if (
  mouseX >= nextX - nextW / 2 && mouseX <= nextX + nextW / 2 &&
  mouseY >= nextY && mouseY <= nextY + nextH
) {
  if (page < 9) {
    page++;
    console.log("➡ Next 버튼 클릭됨, 현재 페이지:", page);
  }
}
if (page === 1) {
  if (
    mouseX >= 544 && mouseX <= 828 &&
    mouseY >= 698 && mouseY <= 808
  ) {
    page++;
    console.log("첫 페이지 → 다음 페이지로 이동!");
  }
}
}


function splitToPureJamos(str) {
  const result = [];

  for (let ch of str) {
    const code = ch.charCodeAt(0);

    if (code >= 0xAC00 && code <= 0xD7A3) {
      const base = code - 0xAC00;
      const jong = base % 28;
      const jung = Math.floor((base / 28) % 21);
      const cho = Math.floor(base / (28 * 21));

      let choChar = CHOSUNG[cho];
      let jungChar = JUNGSUNG[jung];
      let jongChar = JONGSUNG[jong];

      if (complexConsonantMap[choChar]) {
        result.push(...complexConsonantMap[choChar]);
      } else {
        result.push(choChar);
      }

      if (complexVowelMap[jungChar]) {
        result.push(...complexVowelMap[jungChar]);
      } else {
        result.push(jungChar);
      }

      if (jongChar) {
        if (complexConsonantMap[jongChar]) {
          result.push(...complexConsonantMap[jongChar]);
        } else {
          result.push(jongChar);
        }
      }
    } else {
      result.push(ch); 
    }
  }
  return result;
}

function modelReady() {
  console.log("Handpose model loaded.");
}

function drawKeypoints() {
  for (let hand of hands) {
    // 관절 이미지 선택
    let landmarkImg;

    if (["사랑", "희망"].includes(selected)) {
      landmarkImg = imgLeaves;
      stroke(80, 55, 35, 100); // 연두색 선
    } 
    else if( ["열정", "청춘"].includes(selected)){
      landmarkImg = butter;
      stroke(227, 95, 139, 100);// 분홍색 선
    } 
    else if( ["낭만", "설렘"].includes(selected)){
      landmarkImg = imgStar;
      stroke(150, 150, 150, 80); // 회색 선
    }
    else {
      landmarkImg = butter;
      stroke(227, 95, 139, 100);// 분홍색 선
    }

    strokeWeight(2);

    // 좌우 반전된 손 관절 이미지 표시
    for (let pt of hand.landmarks) {
      const mirroredX = width - pt[0];
      const y = pt[1];
      image(landmarkImg, mirroredX - 10, y - 10, 80, 80); // 이미지로 관절 표현
    }

    // 손가락 선 그리기
    let annotations = hand.annotations;
    noFill();
    for (let key in annotations) {
      beginShape();
      for (let pos of annotations[key]) {
        const mirroredX = width - pos[0];
        const y = pos[1];
        vertex(mirroredX, y);
      }
      endShape();
    }
  }
}

function getPalmCenter(landmarks) {
  let x = (landmarks[0][0] + landmarks[5][0] + landmarks[17][0]) / 3;
  let y = (landmarks[0][1] + landmarks[5][1] + landmarks[17][1]) / 3;
  return [x, y];
}


class Butterfly {
  constructor(centerX, centerY) {
    this.centerX = centerX;
    this.centerY = centerY;

    this.xOff = random(1000);
    this.yOff = random(2000);
    this.x = centerX;
    this.y = centerY;
    this.prevX = this.x;
    this.prevY = this.y;
    this.angle = 0;
    this.targetAngle = 0;
    this.speed = 0.005;
    this.range = 800;
  }

  update() {
    this.prevX = this.x;
    this.prevY = this.y;

    this.x = this.centerX + (noise(this.xOff) - 0.5) * this.range;
    this.y = this.centerY + (noise(this.yOff) - 0.5) * this.range;

    this.xOff += this.speed;
    this.yOff += this.speed;

    let dx = this.x - this.prevX;
    let dy = this.y - this.prevY;
    this.targetAngle = atan2(dy, dx);
    this.angle = lerpAngle(this.angle, this.targetAngle, 0.1);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(butterflyImg, 0, 0, 100, 100); // 이미지 크기는 필요에 따라 조절
    pop();
  }
}

function lerpAngle(a, b, t) {
  let diff = b - a;
  while (diff > PI) diff -= TWO_PI;
  while (diff < -PI) diff += TWO_PI;
  return a + diff * t;
}

function drawFinalScene() {
  background(finalBackgroundColor);
  
  // 기존 꽃들 그리는 코드
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].update();
    flowers[i].display();
  }

  // 이름 조각 텍스트 보여주는 코드
  if (currentJamoIndex < jamoArray.length) {
    let currentChar = jamoArray[currentJamoIndex];
    fill(0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(currentChar, width / 2, height / 2);
  }

  // 하단에 이름 + 날짜 출력
  fill(50, 50, 50);
  textSize(24);
  textAlign(CENTER, BOTTOM);
  text(userName + "의 한글숲 - " + currentDateString, width / 2, height - 20);
}

function uploadCanvasAndMakeQR() {
  if (!myCanvas || !myCanvas.elt) {
    console.error("🚨 캔버스를 찾을 수 없습니다.");
    return;
  }

  capturedImage = get();

  myCanvas.elt.toBlob(blob => {
    const formData = new FormData();
    formData.append("image", blob);

    fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: "Client-ID febbe73dc1cba92"
      },
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      const uploadedURL = data.data.link;
      console.log("✅ 업로드 완료:", uploadedURL);
      makeQRWithURL(uploadedURL);
    })
    .catch(err => {
      console.error("🚨 업로드 실패:", err);
    });
  }, 'image/png');
}


function makeQRWithURL(url) {
  try {
    let qr = window.qrcode(0, 'L');
    qr.addData(url);
    qr.make();

    qrCanvas = createGraphics(120, 120);
    let cellSize = qrCanvas.width / qr.getModuleCount();

    for (let row = 0; row < qr.getModuleCount(); row++) {
      for (let col = 0; col < qr.getModuleCount(); col++) {
        qrCanvas.fill(qr.isDark(row, col) ? 0 : 255);
        qrCanvas.noStroke();
        qrCanvas.rect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }

    qrGenerated = true;
  } catch (e) {
    console.error("🚨 QR 생성 실패:", e);
  }
}
