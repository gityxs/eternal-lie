/* 
penalties for low health and charm, high madness, low love, high terror
vision never goes down.
 */
function comaLock(){
    comment('Tsk Tsk. Lost in Dreams (Health drop caused West to fall into a coma)', 'red');
    changeTab('west');
// Disable events
document.getElementById("cultTab").classList.add("disable-events");
document.getElementById("expeditionsTab").classList.add("disable-events");
document.getElementById("sacrariumTab").classList.add("disable-events");
document.getElementById("studyTomeWrap").classList.add("disable-events");
document.getElementById("chantWrap").classList.add("disable-events");
document.getElementById("dreamWrap").classList.add("disable-events");
document.getElementById("preachWrap").classList.add("disable-events");
var elements = document.getElementsByClassName("madActionWraps");
for(var i = 0; i < elements.length; i++) {
    elements[i].classList.add("disable-events");
}
 stats.health.coma = true;
 startDreamTimer();
    window.console.log('1');
 setTimeout(comaUnlock, 12000);
}
function comaUnlock(){
    endDreamTimer();
    comment('Healthy again. It could have been worse (game reset?)', 'green');
    document.getElementById("cultTab").classList.remove("disable-events");
    document.getElementById("expeditionsTab").classList.remove("disable-events");
    document.getElementById("sacrariumTab").classList.remove("disable-events");
    document.getElementById("studyTomeWrap").classList.remove("disable-events");
    document.getElementById("chantWrap").classList.remove("disable-events");
    document.getElementById("dreamWrap").classList.remove("disable-events");
    document.getElementById("preachWrap").classList.remove("disable-events");
var elements = document.getElementsByClassName("madActionWraps");
for(var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("disable-events");
}
    stats.health.coma = false;
}

function dyingCheck(){
    if(stats.health.dyingCounter[0] <stats.health.dyingCounter[1]){
        stats.health.dyingCounter[0]++;
    }else{
        stats.health.dyingCounter[0] = 0;
        if(stats.health.current < 20 && stats.health.dyingB === false){
            stats.health.dyingB = true;
            comment('It would be a pity to end the game so soon. (low health)', 'pink');
        }else if(stats.health.current <0 &&  stats.health.coma === false){
            comment('West has fallen into a coma.');
             comaLock();
        }else if(stats.health.current > 40 && stats.health.dyingB === true){
            dyingB= false;
        }
    }
}
 
//madness movement
const madnessBox = document.getElementById("madnessBox");
let lastCheckedValue = stats.madness.current;
let initialLeft = 33;
let initialTop = 11;
let countTo1 = 0;
// Function to update the position of the madnessBox
function updateMadnessBoxPosition(moveAmountX, moveAmountY) {
    let madWidth = madnessBox.style.width;
    let madHeight = madnessBox.style.height;
    let currentRect = madnessBox.getBoundingClientRect();
    let currentLeftVw = (currentRect.left / window.innerWidth) * 100;
    let currentTopVh = (currentRect.top / window.innerHeight) * 100;
    const maxLeft = 100 - parseFloat(madWidth);
    const maxTop = 100 - parseFloat(madHeight);
    const updatedLeftVw = currentLeftVw + moveAmountX;
    const updatedTopVh = currentTopVh + moveAmountY;
    const newLeftVw = Math.min(Math.max(updatedLeftVw, 0), maxLeft);
    const newTopVh = Math.min(Math.max(updatedTopVh, 0), maxTop);
    madnessBox.style.left = newLeftVw + 'vw';
    madnessBox.style.top = newTopVh + 'vh';
}
// Function to check for changes in stats['madness']['current']
function checkMadnessValue() {
    let currentValue = stats.madness.current; 
    let madDelta =  lastCheckedValue - currentValue; //changes in madness
    let moveAmountX = 0;
    let moveAmountY = 0;
    countTo1 += Math.abs(madDelta);
    const fonts = [
        'Helvetica, sans-serif',
        'Arial, sans-serif',
        'Arial Black, sans-serif',
        'Verdana, sans-serif',
        'Tahoma, sans-serif',
        'Trebuchet MS, sans-serif',
        'Impact, sans-serif',
        'Gill Sans, sans-serif',
        'Times New Roman, serif',
        'Georgia, serif',
        'Palatino, serif',
        'Baskerville, serif',
        'Andalé Mono, monospace',
        'Courier, monospace',
        'Lucida, monospace',
        'Monaco, monospace',
        'Bradley Hand, cursive',
        'Brush Script MT, cursive',
        'Luminari, fantasy',
        'Comic Sans MS, cursive'
    ];
    if(madDelta< 0){ // If the madness goes up by 1, generate positive and negative random movement
        if (countTo1 > 1 && stats.madness.current > 32) {
            countTo1 = 0;
            moveAmountX = (Math.random() * 2 - 1) *  (stats.madness.current * 0.16);
            moveAmountY = (Math.random() * 2 - 1) *  (stats.madness.current * 0.16);
            updateMadnessBoxPosition(moveAmountX, moveAmountY);
                                                                                                                                                    //bigger box
            let madWidth = (stats.madness.current /4 ) + 'vw';
            document.getElementById('madnessBox').style.width=madWidth;
            let madHeight =  (stats.madness.current /4) + 'vh';
            document.getElementById('madnessBox').style.height=madHeight;           
            const madnessTextElements = document.querySelectorAll('.madnessText');
            madnessTextElements.forEach(element => {
                const currentFont = getComputedStyle(element).fontFamily; // Get the current font
                let randomFont;
                    do {
                    randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                    } while (randomFont === currentFont); // Keep generating until a different font is selected
                element.style.fontFamily = randomFont;
                element.style.fontSize = stats.madness.current/10  + 'vh';
                element.style.lineHeight = stats.madness.current/10 + 1 + 'vh';
            });
        }
    } else if (madDelta > 0) {    // If the madness goes down
        // Calculate the position of madnessBox
        let currentRect = madnessBox.getBoundingClientRect();
        let currentLeftVw = (currentRect.left / window.innerWidth) * 100;
        let currentTopVh = (currentRect.top / window.innerHeight) * 100;
        const deltaX = 41 - currentLeftVw;
        const deltaY = 11.2 - currentTopVh;
        // Move towards initial position
        moveAmountX = (deltaX)/4;
        moveAmountY = (deltaY)/4;
        
    // Log move amounts for debugging
        updateMadnessBoxPosition(moveAmountX, moveAmountY);
                    //reset box size
        let currentWidth = parseFloat(document.getElementById('madnessBox').style.width);
        if (currentWidth > 8) {
            // Update the width and height
            document.getElementById('madnessBox').style.width = (stats.madness.current /4) + 'vw';
            document.getElementById('madnessBox').style.height = (stats.madness.current /4) + 'vh';
        }else{
            document.getElementById('madnessBox').style.width = 8 + 'vw';
            document.getElementById('madnessBox').style.height = 7 + 'vh';
        }
        const madnessTextElements = document.querySelectorAll('.madnessText');
        madnessTextElements.forEach(element => {
            if(parseFloat(document.getElementById('madness').style.fontSize) > 3){
                const madnessTextElements = document.querySelectorAll('.madnessText');
                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                element.style.fontFamily = randomFont;
                element.style.fontSize = stats.madness.current/10  + 'vh';
                element.style.lineHeight = stats.madness.current/10 + 1 + 'vh';
            }else{
            element.style.fontFamily =  "Papyrus", "Arial", 'sans-serif';
            element.style.lineHeight = 3 + 'vh';
            element.style.fontSize  = 3  + 'vh';
            }
        });
    }
    // Update the last checked value
    lastCheckedValue = currentValue;
};

let isDragging = false;
let startPosition = { x: 0, y: 0 };

madnessBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    startPosition.x = e.clientX - madnessBox.getBoundingClientRect().left;
    startPosition.y = e.clientY - madnessBox.getBoundingClientRect().top;
    madnessBox.classList.add("dragging");
    madnessBox.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const newX = e.clientX - startPosition.x;
    const newY = e.clientY - startPosition.y;
    madnessBox.style.left = `${newX}px`;
    madnessBox.style.top = `${newY}px`;
    
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        madnessBox.classList.remove("dragging");
        madnessBox.style.cursor = "grab";
        const startLocation = { x: 41 * window.innerWidth / 100, y: 11.2 * window.innerHeight / 100 }; // Updated start location based on CSS values
        const currentLocation = madnessBox.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(currentLocation.left - startLocation.x, 2) +
            Math.pow(currentLocation.top - startLocation.y, 2)
        );

        if (distance < 50) { // Adjust this threshold as needed
            // Move the box back to the start location
            madnessBox.style.left = `${startLocation.x}px`;
            madnessBox.style.top = `${startLocation.y}px`;
        }
    }
});
    

function madLock(){
    comment('Your weakness has allowed Madness to overwhelm you. (only Dream and Madness Mitigation actions possible)', 'red');
    changeTab('west');
// Disable events
document.getElementById("cultTab").classList.add("disable-events");
document.getElementById("expeditionsTab").classList.add("disable-events");
document.getElementById("sacrariumTab").classList.add("disable-events");
document.getElementById("studyTomeWrap").classList.add("disable-events");
document.getElementById("chantWrap").classList.add("disable-events");
document.getElementById("preachWrap").classList.add("disable-events");
madBools[1] = true;
}
function madUnlock(){
    comment('Ah, you have returned to yourself. (Madness has been reduced enough for now.)', 'green');
    document.getElementById("cultTab").classList.remove("disable-events");
    document.getElementById("expeditionsTab").classList.remove("disable-events");
    document.getElementById("sacrariumTab").classList.remove("disable-events");
    document.getElementById("studyTomeWrap").classList.remove("disable-events");
    document.getElementById("chantWrap").classList.remove("disable-events");
    document.getElementById("preachWrap").classList.remove("disable-events");
    madBools[1] = false;
}

let madCheckCounter = [0, 44];
let madBools = [false, false];
function madCheck(){
    if(madCheckCounter[0] < madCheckCounter[1]){
        madCheckCounter[0] += 1;
    }else{
        madCheckCounter[0] = 0;
        if(madBools[1] === false){//bool 1 for 1/2
            if(stats.madness.current >= (stats.madness.madCap/2) && madBools[0] === false){
                madBools[0] = true;
                comment('Do not listen to the fools who say you must keep your Madness in check. (High Madness inceases Terror levels)', 'pink');
            }else if(stats.madness.current >= (stats.madness.madCap/2) && madBools[0] === true){
                vault.terror.current++;
                document.getElementById('terror').innerHTML= Math.floor(vault.terror.current);
            }else if(stats.madness.current < (stats.madness.madCap/2) && madBools[0] === true){
                madBools[0] = false;
            }
            if(stats.madness.current >= stats.madness.madCap){
                madLock();
            }
        }else{
            window.console.log('3');
            if(stats.madness.current <= (stats.madness.madCap/2)){
                madUnlock();
            }
        }
    }
}
    





