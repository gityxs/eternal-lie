//top tabs
function changeTab(temp){
    //change display
    var parentID = document.getElementById('mainWrapper');
    var subs = parentID.getElementsByClassName('bigBox');
    for(var i = 0; i < subs.length; i++){
        var a = subs[i];
        a.style.display = 'none';
        var elementName = subs[i].id;
        var tabName = elementName + 'Tab';
        if (elementName === temp) {
            document.getElementById(tabName).style.backgroundColor = 'black'; // Active tab
        } else {
            document.getElementById(tabName).style.backgroundColor = '#424242'; // Inactive tabs
        }
    }
    document.getElementById(temp).style.display = 'block';
}
function changeCraftBox(temp){
    //change display
    var parentID = document.getElementById('right');
    var subs = parentID.getElementsByClassName('craftBox');
    for(var i = 0; i < subs.length; i++){
        var a = subs[i];
        a.style.display = 'none';
    }
    document.getElementById(temp + 'Box').style.display = 'block';
}

//flash
var flashingElements = {};
function flash(div, startC, endColor){
if (!flashingElements[div]) {
    flashingElements[div] = true;
    document.getElementById(div).style.color = startC;
    function temp() {
      document.getElementById(div).style.color = endColor;
      flashingElements[div] = false;
  }
  setTimeout(temp, 500);
  }
}
//stat change in dev
function numberChange(parent, stat, change, pColor, nColor){
    if(parent === 'stats'){
    stats[stat].current += change;
    document.getElementById(stat).innerHTML = Math.floor(stats[stat].current);
    }else if(parent === 'cult'){
    cult[stat].current += change;
    document.getElementById(stat).innerHTML = cult[stat].current;
    }else if(parent === 'vault'){
    vault[stat].current += change;
    document.getElementById(stat).innerHTML = Math.floor(vault[stat].current);
    }
    if(change > 0){
        document.getElementById(stat).style.color = pColor;
        function temp() {
            document.getElementById(stat).style.color = 'white';
        }
    setTimeout(temp, 250);
    }else if(change <0){
        document.getElementById(stat).style.color = nColor;
        function temp() {
            document.getElementById(stat).style.color = 'white';
        }
        setTimeout(temp, 250);
    }
}

//audio 

var chanting = new Audio("audio/chant.mp3");
var studying = new Audio("audio/studying.mp3");
var preaching = new Audio("audio/preaching.mp3");
var dreaming = new Audio("audio/dreaming.mp3");

 function plays(x){
     if(x === chanting){
          x.loop = true;
      };
      x.play();
 }
 function pauses(x){
     x.pause();
     x.loop = false;
}





//border shadows
function shadows(){
const allElements = document.querySelectorAll('*');

// Loop through each element
allElements.forEach(element => {
    // Get the computed style for the element
    const computedStyle = getComputedStyle(element);
    
    // Check if the element has a border property
    if (
        computedStyle.getPropertyValue('border-top-style') !== 'none' &&
        computedStyle.getPropertyValue('border-right-style') !== 'none' &&
        computedStyle.getPropertyValue('border-bottom-style') !== 'none' &&
        computedStyle.getPropertyValue('border-left-style') !== 'none') {
        // Add your custom styles here
        element.style.boxShadow = '0.2vw 0.2vh 4px grey';
    }
});
};


function comment(comment, rating, classy){
    if(rating != null){
            document.getElementById('commentary').innerHTML+=
                "<p class='" + classy + "C' style='color: " + rating + "'>" + comment + "</p>";
    }else{
    document.getElementById('commentary').innerHTML+=
            "<p>" + comment + "</p>";
    }
    let commentaryElement = document.getElementById('commentary');
    commentaryElement.scrollTop = commentaryElement.scrollHeight;
};

//unlocks

function unlock(button, parent){
    if(parent === 'actions'){
        if(stats.vision.current >= actions[button]['unlockCost']){
            stats.vision.current -= actions[button]['unlockCost']; 
            document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
            flashFade(button + 'Lock');
            setTimeout(() => {document.getElementById(button + 'Wrap').style.display='block';}, 1500);
            if(actions[button]['comment']){
                comment(actions[button]['comment']);
            }
            actions[button].purchased = true;
        }
    }
    //crafts
    if(button === 'convertChanter'){
        if(stats.vision.current >= loveCrafts[button]['unlockCost']){
            stats.vision.current -= loveCrafts[button]['unlockCost']; 
            document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
            flashFade(button + 'Lock');
            setTimeout(() => {document.getElementById(button + 'Wrap').style.display='block';}, 1500);
            loveCrafts.convertChanter.purchased = true;
            cult.chanters.unlocked = true;
            document.getElementById('chantersWrap').style.display='block';
        }
    }
    if(button === 'convertSentinal'){
        if(stats.vision.current >= terrorCrafts[button]['unlockCost']){
            stats.vision.current -= terrorCrafts[button]['unlockCost']; 
            document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
            flashFade(button + 'Lock');
            setTimeout(() => {document.getElementById(button + 'Wrap').style.display='block';}, 1500);
            terrorCrafts.convertSentinal.purchased = true;
            cult.sentinals.unlocked = true;
            document.getElementById('sentinalsWrap').style.display='block';
        }
    } 
    if(button === 'tithe'){
        if(stats.vision.current >= goldCrafts[button]['unlockCost']){
            stats.vision.current -= goldCrafts[button]['unlockCost']; 
            document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
            flashFade(button + 'Lock');
            setTimeout(() => {document.getElementById(button + 'Wrap').style.display='block';}, 1500);
            goldCrafts.tithe.purchased = true;
            document.getElementById('titheToggle').style.display='block';
        }
    }
    if(parent === 'fleshCrafts'){
        window.console.log(stats.vision.current, fleshCrafts[button]['unlockCost']);
        if(stats.vision.current >= fleshCrafts[button]['unlockCost']){
            stats.vision.current -= fleshCrafts[button]['unlockCost']; 
            document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
            flashFade(button + 'Lock');
            setTimeout(() => {document.getElementById(button + 'Wrap').style.display='block';}, 1500);
            fleshCrafts[button].purchased = true;
        }
    }
};

function flashFade(div){
    div = document.getElementById(div);
    div.style.pointerEvents='none';
        // Apply CSS animations to the provided div
    div.style.animation = "flash 0.5s alternate 2";
    
    // After the flash animation, add a fade-out animation
    setTimeout(() => {
        div.style.animation = "fade-out 1s";
        
        // After the fade-out animation, hide the div
        setTimeout(() => {
            div.style.display = "none";
        }, 500); // Adjust the time according to your preference
    }, 1000); // Adjust the time according to your preference
}


//invisible scroll on commentary

function addMouseWheelListener(element) {
  element.addEventListener("wheel", function(event){ scrollDiv(event, element)}, { passive: false });
}

function removeMouseWheelListener(element) {
  element.removeEventListener("wheel", scrollDiv);
}

function scrollDiv(event, element) {
  event.preventDefault();
  const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  element.scrollTop -= delta * 30; // Adjust the scrolling speed as needed
}


var shakeAnimationId;
function shakeBody() {
  var eventBox = document.getElementById('eventBox');
  var move = 10;
  var delay = 50; 
  function shake() {
    document.body.style.transform = 'translate(' + move + 'px,' + move + 'px)';
    eventBox.style.transform = 'translate(' + -move + 'px,' + -move + 'px)';
    move = -move; 
    shakeAnimationId = setTimeout(shake, delay);
  }

  shake();
}

function cancelShakeAnimation() {
  clearTimeout(shakeAnimationId);
  document.body.style.transform = '';
  var eventBox = document.getElementById('eventBox');
  eventBox.style.transform = '';
}
