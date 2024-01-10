
function eventBox(imageSource, title, text){
    let box = document.getElementById('eventBox');
        // Create an image element
    let image = document.createElement('img');
    image.src = imageSource; // Set the source of the image
    image.id = 'eventImage';

    // Create a header element
    let header = document.createElement('h1');
    header.id = 'eventTitle';
    header.textContent = title; // Set the title text

    // Create a paragraph element
    let paragraph = document.createElement('p');
    paragraph.id = 'eventBoxText';
    paragraph.textContent = text; // Set the text content
    if(title === "The Cult") {//warning text for cult
        var textToAdd = "*The number of Faithful is critical. This is your only Warning.*";
        var spanElement = document.createElement('span');
        spanElement.style.color = "red"; 
        spanElement.innerHTML = textToAdd; 
        paragraph.appendChild(spanElement);
    }
        // Create close button
    let button = document.createElement('button');
    button.id = 'closeEventButton';
    button.textContent = "X"; 
    // Clear the existing content of 'eventBox'
    box.innerHTML = '';

    // Append the new elements to 'eventBox'
    box.appendChild(button);
    box.appendChild(image);
    box.appendChild(header);
    box.appendChild(paragraph);
    document.querySelector('#closeEventButton').addEventListener('click', closeEventBox);
    openEventBox();
}
function closeEventBox(){
    document.getElementById('eventBox').style.display='none';
    timeOn();
}
function openEventBox(){
    setTimeout(function() {
        document.getElementById('eventBox').style.display = 'block';
        timeOff();
    }, 500);
}
    	//=========================================
	// putting eventlisteners on after everything else
	//=========================================
function eventListeners1(){

    //commentary scroll listeners
    let commentDiv =  document.getElementById("commentary");
    commentDiv.addEventListener("mouseover", function() {
      addMouseWheelListener(commentDiv);
    });
    commentDiv.addEventListener("mouseout", function() {
      removeMouseWheelListener(commentDiv);
    });

    //Action Upgrades
    for (i=0;i<upgradeKeys.length; i++){
        let actionColumn = upgradeKeys[i];
        let upgrades = Object.keys(actionUpgrades[actionColumn]);
        for(j=0;j<upgrades.length;j++){
            document.getElementById(upgrades[j] + 'Wrap').addEventListener('click', actionUpgrades[actionColumn][upgrades[j]]['func']);
        };
    };

    document.getElementById('sacDropBtn').addEventListener('mousedown',   () => showSacrificeTypes());
    document.getElementById('sacDropBtn').addEventListener('mousedown', preventButtonDrag);
    document.getElementById('sacDropBtn').addEventListener('mouseup',   () => hideSacrificeTypes());

var sacTypes = document.querySelectorAll('.sacrificeType');
    sacrificeKeys = Array.from(sacTypes).map(sacTypes => sacTypes.id);
    sacrificeKeys.forEach(key => {
    var option = document.getElementById(key);
    option.addEventListener('mouseover', function() {
    this.style.background = 'transparent';});
    option.addEventListener('mouseout', function() {
    this.style.background = '';});
    option.addEventListener('mouseup', function() {
    sacrificeType(this.id);
    });
  });
    for(i=0;i<worldKeys.length;i++){
        document.getElementById(worldKeys[i] + "Wrap").addEventListener('click', world[worldKeys[i]]['func']);
    }
     for(i=0;i<dreamExKeys.length;i++){
        document.getElementById(dreamExKeys[i] + "Wrap").addEventListener('click', dreamEx[dreamExKeys[i]]['func']);
    }

}
function eventListeners2(){
    //vault scroll
    var vaultActionBoxes = document.getElementsByClassName("vaultActionBox");
    for (var i = 0; i < vaultActionBoxes.length; i++) {
        let element = vaultActionBoxes[i];
        element.addEventListener("mouseover", function() {
        addMouseWheelListener(element);
      });
      element.addEventListener("mouseout", function() {
        removeMouseWheelListener(element);
      });
    }
            //test buttons
document.getElementById('time').addEventListener('click',  () => schTogFunc());
document.addEventListener("visibilitychange", function () { //should fix off screen weirdness
    if (document.hidden) {
       timeOff();
    } else {
       timeOn();
    }    
});
document.getElementById('test').addEventListener('click',  () => nyar());
document.getElementById('save').addEventListener('click',  () =>  saveToLocalStorage());
document.getElementById('load').addEventListener('click',  () => loadClick());
    //main actions and their unlocks
    document.getElementById('chantLock').addEventListener('click',  () => unlock('chant', actions));
    document.getElementById('dreamLock').addEventListener('click',  () => unlock('dream', actions));
    document.getElementById('preachLock').addEventListener('click',  () => unlock('preach', actions));

    document.getElementById('studyTomeWrap').addEventListener('click',  () => studyTome());
    document.getElementById('chantWrap').addEventListener('mouseover', () => chantTimer());
    document.getElementById('dreamWrap').addEventListener("mousedown", () => startDreamTimer() );
    document.getElementById('dreamWrap').addEventListener("mouseup", () =>  endDreamTimer() );
    document.getElementById('preachWrap').addEventListener('click', () => preach());
    //mad actions
    for(i=0;i<madKeys.length;i++){
        let temp = madKeys[i];
        document.getElementById(temp + 'Wrap').addEventListener('click', () => madAct(temp));
    };
    //vault button presses
    for(i=0;i<vaultKeys.length; i++){
        let temp = vaultKeys[i];
        document.getElementById(temp + "Wrap").addEventListener('click', () => changeCultTab(temp));
    }
    for(let j=0; j<craftKeys.length; j++){
        let key = craftKeys[j];
        for(let k=0; k<key.length; k++){
            if(craftTypeKeys[j][key[k]]['permanent'] === true){
                document.getElementById(key[k]+ "Wrap").addEventListener('click', craftTypeKeys[j][key[k]]['func']);  
                if(craftTypeKeys[j][key[k]]['lockText']){
                    document.getElementById(key[k]+ "Lock").addEventListener('click', () => unlock(key[k], craftTypeKeys[j]));   
                }
            }
            if(craftTypeKeys[j][key[k]]['permanent']=== false){
                document.getElementById(key[k]+ "OneOffs").addEventListener('click', craftTypeKeys[j][key[k]]['func']);  
            }
        }
    }
        document.getElementById('rhanWrap').addEventListener('click', () => rhan());
}

    //code for description hovers
function addCommentsToButtons(set) {
    const setKeys = Object.keys(set);    
    setKeys.forEach(function (setKey) {
        const parent = document.getElementById(setKey +'Wrap'); // Find button by ID using the key
        const oneOffs = document.getElementById(setKey +'OneOffs');
        const locks = document.getElementById(setKey +'Lock');
        const container = parent || oneOffs;
        if (container) {
            const descriptionBox = document.createElement('div'); //main description
            descriptionBox.classList.add('descriptionBox');
            if(set === madActions){
                descriptionBox.classList.add('madDescription');
            };
            container.appendChild(descriptionBox);
            const description = document.createElement('p');
            window.console.log(set[setKey]);
            description.textContent = set[setKey]['description'][0];
            description.classList.add('desc'); 
            const Id = setKey + 'Desc'; 
            description.id = Id; 
            descriptionBox.appendChild(description);
            if(set[setKey]['description'][3]){
                 const terror = document.createElement('span');
                terror.textContent = set[setKey]['description'][3];
                terror.classList.add('desc'); 
                const Id = setKey + 'Terror'; 
                terror.id = Id; 
                descriptionBox.appendChild(terror);
            }
            if(set[setKey]['description'][1]){
                 const cost = document.createElement('span');
                cost.textContent = set[setKey]['description'][1];
                cost.classList.add('desc'); 
                const Id = setKey + 'cost'; 
                cost.id = Id;
                descriptionBox.appendChild(cost);
                if(set[setKey]['cost']){
                    const costs = document.createElement('span');
                    costs.textContent = set[setKey]['cost'];
                    costs.classList.add('costs'); 
                    const Id = setKey + 'Cost'; 
                    costs.id = Id; 
                    cost.appendChild(costs);
                }
            }
            if(set[setKey]['description'][2]){
                 const benefit = document.createElement('span');
                benefit.textContent = set[setKey]['description'][2];
                benefit.classList.add('desc'); 
                const Id = setKey + 'Benefit'; 
                benefit.id = Id;
                descriptionBox.appendChild(benefit);
            }
        }
        if (locks) {
            const descriptionBox = document.createElement('div'); //main description
            descriptionBox.classList.add('descriptionBox');
            descriptionBox.classList.add('lockDesc');
            locks.appendChild(descriptionBox);
            const description = document.createElement('p');
            description.textContent = set[setKey]['lockText'];
            description.classList.add('desc'); 
            const Id = setKey + 'Desc'; 
            description.id = Id; 
            descriptionBox.appendChild(description);
        }
    });
}
function commentListeners(){
    const descParents = document.querySelectorAll(".actionWraps, .actionUpgradeWraps, .madActionWraps, .cultWraps, .vaultWraps, .vaultActionWraps, .vaultActionLocks, .vaultActionOneOffs, .worldWraps, .dreamExWraps, .godsWraps, .relicWraps");
    descParents.forEach(function (container) {
        const parent = container; 
        const descriptionBox = container.querySelector(".descriptionBox");
        let timeout;
        parent.addEventListener("mouseover", function () {
            timeout = setTimeout(function () {
                descriptionBox.classList.add("show");
                }, 500);
        });
        parent.addEventListener("mouseout", function () {
            clearTimeout(timeout);
            descriptionBox.classList.remove("show");
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {  //start of page after init and before load
//localStorage.clear();
    shadows();
    addCommentsToButtons(actions);
    addCommentsToButtons(actionUpgrades.studyTome);
    addCommentsToButtons(actionUpgrades.chant);
    addCommentsToButtons(madActions);
    addCommentsToButtons(cult);
    addCommentsToButtons(vault);
    addCommentsToButtons(dreamEx);
    addCommentsToButtons(world);
    addCommentsToButtons(gods);
    addCommentsToButtons(relics);
    addCommentsToButtons(loveCrafts);
    addCommentsToButtons(terrorCrafts);
    addCommentsToButtons(goldCrafts);
    addCommentsToButtons(fleshCrafts);
    addCommentsToButtons(tomeCrafts);
    document.getElementById('visionBox').style.display='block';
    document.getElementById('healthBox').style.display='block';
    document.getElementById('studyTomeWrap').style.display='block';
    document.getElementById('studyTomeColumn').style.display='block';
    document.getElementById('westTab').style.display='block';
    var saveTest = localStorage.getItem("savedDomUnlocks");  //save test
    commentListeners();
    eventListeners1();
    eventListeners2();
    if (saveTest !== null) {
            loadFromLocalStorage();
            window.console.log('loaded');
    }else{
        eventBox("images/cultist.png", "Eternal Lie", "Waking as out of a dream, you stand alone in a darkened alley, hands feverishly clutching an ancient manuscript. A soothing voice in your mind calms you and hints at future glory.");
    }



});


        	//=========================================
	// Locks
	//========================================= 

        	//=========================================
	// Unlocks and updates
	//========================================= 

let ticCounterForUnlock = 10;
let ticCounter = 0;
function checkUnlockCounter(tics){
    if((ticCounter + tics) >= ticCounterForUnlock){
        ticCounter += tics;
        ticCounter -= ticCounterForUnlock;
        checkUnlocks();
    }else{
        ticCounter += tics;
    }
}

function checkUnlocks(){
    for(i=0;i<statKeys.length; i++){ ///main stats
        if(stats[statKeys[i]]['unlocked'] === false ){
            let unlockStat = stats[statKeys[i]]['unlock'][0];
            let unlockNum = stats[statKeys[i]]['unlock'][1];
            if(stats[unlockStat]['current'] >= unlockNum){
                stats[statKeys[i]]['unlocked'] = true; 
                document.getElementById(statKeys[i] + 'Box').style.display='block';
            }
        }
    }
///action locks
    if(stats.vision.current >= 2 && actions.chant.unlocked === false && actions.chant.purchased === false){
        document.getElementById('chantLock').style.display='block';
        actions.chant.unlocked === true;
    }
    if(stats.vision.current >= (8) && actions.dream.unlocked === false && actions.dream.purchased === false){
        document.getElementById('dreamLock').style.display='block';
    }
    if(stats.charm.current >=4 && actions.preach.unlocked === false && actions.preach.purchased === false){
        document.getElementById('preachLock').style.display='block';
    }
    if(stats['madness']['current'] >= 32 &&  stats.madness.madActionBoxUnlocked === false){
        stats.madness.madActionBoxUnlocked = true;
        comment('One must maintain a certain balance in life.', 'lavender');
        document.getElementById('madActionBox').style.display='block';
        document.getElementById('drinkWrap').style.display='block';
        document.getElementById('smokeWrap').style.display='block';
    }
    for(i=0;i<madKeys.length; i++){ ///mad actions
        if(madActions[madKeys[i]]['unlocked'] === false ){
            let unlockStat = madActions[madKeys[i]]['unlock'][0];
            let unlockNum = madActions[madKeys[i]]['unlock'][1];
            if(madActions[madKeys[i]]['costStat'] === 'health'  && stats['health']['current']  <= 20 ){
                document.getElementById(madKeys[i] + 'Wrap').style.display='block';
                madActions[madKeys[i]]['unlocked'] = true;
            }else if(unlockStat === 'love' && vault[ 'love']['current']  >= unlockNum||unlockStat === 'terror' && vault[unlockStat]['current']  >= unlockNum){
                document.getElementById(madKeys[i] + 'Wrap').style.display='block';
                madActions[madKeys[i]]['unlocked'] = true;
            }
        }
    }
}