
    	//=========================================
	//                                      stats
	//=========================================
        
let stats = {    
    vision: {//opens upgrades//
        callString: 'vision',
        string: 'Vision',
        description: 'The key to unlocking the mysteries of the universe.',
        current: 0,
        unlocked: true
    },
    charm: {//cultist max//
        callString: 'charm',
        string: 'Charm',
        description: 'With enough Charisma, you can convince people of anything.',
        current: 0,
        unlocked: false,
        unlock: ['vision', 1]
    },
    health: {
        callString: 'health',
        string: 'Health',
        description: 'Essential',
        current: 100,
        max: 100,
        unlocked: true,
        dyingB: false,
        dyingCounter: [0, 1],
        coma: false
    },
    radiance: {//energy//
        callString: 'radiance',
        string: 'Radiance',
        description: 'A reward from the Outer Gods, probably',
        current: 0,
        unlocked: false,
        unlock: ['radiance', 1]
    },
    shards: {//god energy
        callString: 'shards',
        string: 'Shards',
        description: 'Fragments of the Divine, they multiply your influence',
        current: 0,
        unlocked: false,
        unlock: ['shards', 1]
    },
    madness: { //main stat//
        callString: 'madness',
        string: 'Madness',
        description: 'Madness rides the star-wind...',
        current: 0,
        madCap: 88,
        unlocked: true,
        madActionBoxUnlocked: false
    }
    //something for resets bigger than radiance
};
let firstBook = 'Necronomicon';

    	//=========================================
	//                      West Actions
	//=========================================

 
let actions = {
    studyTome: {
        string: 'Study Tome',
        description: ['Research into Abyssal Horrors.', 'Cost: Sanity', 'Benefit: Vision'],
        level: 1.2,
        madnessChance: 80,
        unlocked: true,
        purchased: true
    }, 
    chant: {
        string: 'Chant',
        description: ['Reciting arcane passages imbues you with unearthly Charm', 'Cost: Sanity', 'Benefit: Charm'],
        level: 1,
        madnessChance: 80,
        toggle: false,
        ticCounter: 0,
        ticsNeeded: 2,
        unlocked: false,
        purchased: false,
        lockText: "Chant the Words.  Cost: 4 Vision",
        unlockCost: 4,
        comment: 'What a beautiful voice you have.'
    },    
    dream: {
        string: 'Dream',
        description: ['Restful sleep improves your Health but dreaming can be dangerous.', 'Cost: Sanity', 'Benefits: Health and Vision'],
        level: 1,
        type: 0,
        madCost: 5,
        benefit:  1,
        unlocked: false,
        purchased: false,
        lockText: "Sleep is not enough.  Cost: 16 Vision",
        unlockCost: 16,
        comment: 'Break the Silver Tether and be lost to the Realms of Dream forever.'
    },
    preach: {
        string: 'Preach   ',
        description: ['Exhibit your Charm so that the Faithful may find you.', ' Cost: Charm ', 'Benefit: Followers'],
        level: 1,
        cost: 4,
        benefit: 1,
        timer: 2000,
        multiplier: 8,
        unlocked: false,
        purchased: false,
        lockText: "Preach to the Faithful Cost: 8 Vision",
        unlockCost: 8,
        comment: 'So many lost and fearful. Bring them into the fold.'
    }
};
    	//=========================================
	//                      West Action Functions
	//=========================================
function studyTome(){
  plays(studying);
  var element = document.getElementById("studyProgress");   
  var width = 1;
  var identity = setInterval(study, 5);
     let temp =  document.getElementById('studyTomeWrap');
     temp.classList.add("studyPulse");
     let tempTimer = actions.studyTome.timer;
     setTimeout(()=>{temp.classList.remove("studyPulse");}, tempTimer);
  function study() {
    if (width >= 100) {
        let madChance = Math.floor(Math.random() * 100);   
        if(madChance <= actions.studyTome.madnessChance){
             numberChange('stats', 'madness', 1 , '#FE2EF7', 'blue');  
            }
         numberChange('stats', 'vision', actions.studyTome.level , '#40E0D0', 'red'); 
         numberChange('stats', 'health',  -1 , 'blue', 'red');  
        clearInterval(identity); 
        width = 0; 
        element.style.width = width + '%'; 
        } else {
      width++; 
      element.style.width = width + '%'; 
      }
  }
}

function chant(){
    let madChance = Math.floor(Math.random() * 100);      
     if(madChance <= actions.chant.madnessChance){
         numberChange('stats', 'madness', 1 , '#FE2EF7', 'blue');  
        }
    numberChange('stats', 'health',  -1 , 'blue', 'red');
    numberChange('stats', 'charm',  1 , '#FFFF00', 'red');  
};
        
function chantTimer(){
    var intervalId = null;
     let temp =  document.getElementById('chantWrap');
     document.getElementById('chantWrap').onmouseover = function() {
        intervalId = setInterval(chant, 500);
        plays(chanting);
     temp.classList.add("chantPulse");
    };
    document.getElementById('chantWrap').onmouseout = function() {
        // Clear any timers set to timeout
        clearInterval(intervalId);
        pauses(chanting);
        temp.classList.remove("chantPulse");
    };
};

    	//=========================================
	//                  DreamChoices
	//=========================================
let dreamChoices = {
       mindAlone: {
           string: 'Mind Alone',
           description: ['Just you and the endless expanses. ' , 'No modifier.'] ,
           unlocked: true
       },
       lighthouse: {
           string: 'Lighthouse',
           description: ['Light the beacon so that you may travel further safely.', 'Cost: 1 Radiance'],
           unlocked: false
       },
       whiteShip: {
           string: 'White Ship',
           description: ['Buy passage on the White Ship', 'Spend 1 Radiance for every hour of Dream Travel.', 'Benefit: More Vision'],
           unlocked: false
       },
       blackShip: {
           string: 'Black Ship',
           description: ['Oh the vistas they offer', 'Each hour requires more Radiance than the one before.', 'Benefit: Increased Vision'],
           unlocked: false
       } 
    };
let dreamKeys = Object.keys(dreamChoices);
// Toggle the dropdown menu
function showDreamChoices() {
    var dreamChoices = document.getElementById("dreamChoices");
    dreamChoices.style.display = 'block';
}

function hideDreamChoices() {
    var dreamChoices = document.getElementById("dreamChoices");
    dreamChoices.style.display = 'none';
}

// Select an option and update the main div text
function dreamChoice(option) {
     let temp = dreamChoices[option].string;
    // change dream type
    const dreamWrap = document.getElementById('dreamWrap');
    document.getElementById("dreamChosen").innerHTML = temp;
    actions['dream']['type'] = dreamKeys.indexOf(option);
    window.console.log(actions.dream.type, option);
    hideDreamChoices();
}
    let startTime;
    let endTime;
    let timerInterval;
    let sequenceEnded = false;
    function dream(totalTime, cost){//consider changing radiance costs outputting each second
        let time = Math.floor(totalTime); 
        if(time >1){
            let benefitAmount = time * Math.max(cost, 1);
            let tempMad = Math.floor(Math.random() * benefitAmount) + 1;
            let type = actions['dream']['type'];
            window.console.log(type);
            if(type === 0){
                numberChange('stats', 'madness', (tempMad + 4) , '#FE2EF7', 'blue');  
                numberChange('stats', 'health', (benefitAmount * 8) , 'blue', 'red');  
                numberChange('stats', 'vision', (benefitAmount * 4) , 'blue', 'red');  
            }else if(type === 1){
                numberChange('stats', 'madness',  tempMad , '#FE2EF7', 'blue'); 
                numberChange('stats', 'health', (benefitAmount * 8) , 'blue', 'red');
                numberChange('stats', 'vision', (benefitAmount * 8) , 'blue', 'red');  
                window.console.log(stats.radiance.current);
                numberChange('stats', 'radiance', -cost , 'blue', 'red');  
                window.console.log(stats.radiance.current);
            }else if(type === 2){
                numberChange('stats', 'madness',  tempMad , '#FE2EF7', 'blue'); 
                numberChange('stats', 'health', (benefitAmount * 8) , 'blue', 'red');
                numberChange('stats', 'vision', (benefitAmount * time * 8) , 'blue', 'red');  
                numberChange('stats', 'radiance', -cost , 'blue', 'red');  
            }else if(type === 3){
                numberChange('stats', 'madness',  (tempMad  * time) , '#FE2EF7', 'blue'); 
                numberChange('stats', 'health', benefitAmount , 'blue', 'red');
                numberChange('stats', 'vision', (benefitAmount * time * 8) , 'blue', 'red');  
                numberChange('stats', 'radiance', -cost , 'blue', 'red');  
            }
            let temp =  document.getElementById('dreamWrap');
            temp.classList.add("dreamPulse");
            let tempTimer = actions['dream']['timer'];
            setTimeout(()=>{temp.classList.remove("dreamPulse");}, tempTimer);
            flash('health', 'blue', 'white');
            flash('vision', 'blue', 'white');
        }
    }
// Function to start the timer
function startDreamTimer() {
    sequenceEnded = false; 
    plays(dreaming);
    startTime = Date.now();
    // Clear any existing timer interval
    clearInterval(timerInterval);
    // Update the timer display every 100 milliseconds (adjust as needed)
    timerInterval = setInterval(() => updateTimer(), 100);
}
function calculateCost(elapsedTime) {
    let dreamType = actions.dream.type;
    switch (dreamType) {
        case 0:
            return 0; // no cost
        case 1:
            return 1; // 1 
        case 2:
            return 1 * elapsedTime; // 1 per second linear increase
        case 3:
            return 1 * elapsedTime * elapsedTime; // 1 per second per second quadratic increase
        default:
            window.console.log('error');
            return 0; // Default to 0 cost
    }
}
function updateTimer() {
    const timerDisplay = document.getElementById("dreamTimer");
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 800; // Convert to seconds
    // Get the cost formula based on dreamType

    // Calculate the cost per second using the formula
    const costNextSecond = calculateCost(elapsedTime + 1);
    // Check if the cost per second exceeds available radiance
    if (costNextSecond > stats.radiance.current) {
        comment('We can go no further.');
        endDreamTimer(); // Stop the timer and call endDreamTimer
            timerDisplay.style.fontSize="17vw";
    } else {
        timerDisplay.innerText = elapsedTime.toFixed(0);
        timerDisplay.style.display = "block";
        if(elapsedTime >9.5){
            timerDisplay.style.fontSize="8vw";
        }
    }
}
// Function to end the timer and reset the display
function endDreamTimer() {   
    if (!sequenceEnded) { // Check if the sequence hasn't ended already
        sequenceEnded = true; // Set the flag to indicate the sequence has ended
        endTime = Date.now();
        const totalTime = (endTime - startTime) / 1000; // Convert to seconds
        const cost = calculateCost(totalTime);
        const timerDisplay = document.getElementById("dreamTimer");
        timerDisplay.style.display = "none";
        timerDisplay.style.fontSize="17vw";
        // Call the dreamEnd function with the time as a variable
        dream(totalTime, cost);
        clearInterval(timerInterval);
        // Reset the timer display
        timerDisplay.style.zIndex = "1";
        timerDisplay.innerText = "";
    }
}

function preach() {
    window.console.log(stats.charm.current >=  actions.preach.cost);
    if (stats.charm.current >=  actions.preach.cost) {
        if(cult.faithful.unlocked === false){
            cult.faithful.unlocked = true;
            domUnlocks.cult = true;
            eventBox("images/faithful.png", "The Cult", "One alone cannot accomplish Greatness. You must find and use those foolish enough to follow you into darkness.");
            setTimeout(() => {
                document.getElementById('cultTab').style.display='block';
                document.getElementById('faithfulWrap').style.display='block';
                comment('A beginning', 'red', 'pr');
            }, 1500);
        }else{
                    comment('Another lost soul joins us.');
        }
         let temp =  document.getElementById('preachWrap');
         temp.classList.add("preachPulse");
         let tempTimer = actions.preach.timer;
         setTimeout(()=>{temp.classList.remove("preachPulse");}, tempTimer);
        //plays(preaching);
         numberChange('stats', 'charm',  -actions.preach.cost , '#FE2EF7', 'blue'); 
         numberChange('cult', 'faithful',  actions.preach.benefit , '#FE2EF7', 'blue');
         window.console.log(actions.preach.benefit, cult.faithful.current);
        actions.preach.cost = Math.max((cult.faithful.current * actions.preach.multiplier), 4);
        document.getElementById('preachCost').innerHTML = actions.preach.cost;
        document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
        //innocent chance
        if(vault.love.current > vault.terror.current || actionUpgrades.preach.fiction.unlocked === true){
            numberChange('cult', 'innocents',  1 , '#FE2EF7', 'blue');
            if(cult.innocents.unlocked === false){
                cult.innocents.unlocked = true;
                document.getElementById('innocentsWrap').style.display='block';
                comment('The Faithful bring family with them if Love dominates. Grist for the mill.', 'lightblue', 'white');
            }else{
            comment('So Innocent...');
            }
        }
    }
};

     	//=========================================
	// West Action Upgrades  Scroll of T'yog
	//=========================================
        
let actionUpgrades = { //add mad chance reduction to reading
  studyTome: {
      pnat: {
          string: 'Pnatotic Manuscripts',
          description: ['Translating the manuscripts will double your insights when studying', ' Cost: Vision '],
          cost: 22,
          func: pnat,
          costType: 'vision',
          unlocked: false,
          purchased: false
      }, 
      hsan: {
          string: 'Seven Cryptical Books of Hsan',
          description: ['routes in the dreaming. does not show kadath', 'Cost: Vision '],
          cost: 44,
          func: hsan,
          costType: 'vision',
          unlocked: false,
          purchased: false
      },      
      dzyan: {
          string: 'Book of Dzyan',
          description: ['history book atlantis,, lemuria', ' Cost: Vision '],
          cost: 88,
          func: dzyan,
          costType: 'vision',
          unlocked: false,
          purchased: false
      },            
      dhol: {
          string: 'Dhol Chants',
          description: ['Secrets of subliminal Chanting.', ' Cost: Charm 222 Vision '],
          cost: 444,
          func: dhol,
          costType: 'vision',
          unlocked: false,
          purchased: false
      },         
      goul: {//unlocked by men of leng unlocks cannibalism
          string: 'Cultes des Goules',
          description: ['To Serve Man', '  Cost: Vision '],
          cost: 444,
          func: goul,
          costType: 'vision',
          unlocked: false,
          purchased: false,
          unlocks: ['cannibalism'],
          comment: 'A Toast: To your Health!'
      },  
      kult: {
          string: 'Unaussprechlichen Kulten',
          description: [' Cost: Vision '],
          cost: 4444,
          func: kult,
          costType: 'vision',
          unlocked: false,
          purchased: false
      },           
      azat: {//sign name may move higher
          string: 'Book of Azathoth',
          description: ['Sign your name and .', '  Cost: Vision '],
          cost: 8888,
          func: azat,
          costType: 'vision',
          unlocked: false,
          purchased: false
      }, 
      alch: { //tangential, may be cut
          string: 'Clavis Alchimiae',
          description: ['Turn Flesh into Ichor.', ' Cost: Vision '],
          cost: 100,
          func: alch,
          costType: 'vision',
          unlocked: false,
          purchased: false
      },    
      eibon: {
          string: 'Book of Eibon',
          description: ['from hyborea. spellbook entrancement, petrification -art, open doorway for Tsathoggua or shub', '  Cost: Vision '],
          cost: 44444,
          func: eibon,
          costType: 'vision',
          unlocked: false,
          purchased: false,
          unlocks: ['darkYoung'],
          comment: 'Sacrifice...!'
      },      
      damn: {
          string: 'Liber Damnatus',
          description: ['Rebirth Yog-sothhoth.', ' Cost: Vision '],
          cost: 88888,
          func: damn,
          costType: 'vision',
          unlocked: false,
          purchased: false
      },  
      necr: {
          string: 'Necronomicon',
          description: ['These sounds are more pleasing to the ear.', '  Cost: Vision '],
          cost: 848848,
          func: necr,
          costType: 'vision',
          unlocked: false,
          purchased: false
      }
  },
  chant: {
      echoes: {
          string: 'Echoes',
          description: [''],
          cost: 500,
          func: echoes,
          costType: 'vision',
          unlocked: false,
          purchased: false
    },
    choir: {
        string: 'Eternal Choir',
        description: ['Sacrifice a chanter and capture a piece of their soul to forever sing inside your mind. This is probably not good for your mental well being.'],
        unlocked: false,
        purchased: false,
        cost: 10,
        func: choir,
        costType: 'chanters'
     }
  },
  preach: {
      fiction: {
          string: 'Fiction',
          description: ['People love your funny little stories. (guarantees innocent when Preaching) '],
          cost: 88,
          func: fiction,
          costType: 'vision',
          unlocked: false,
          purchased: true
      }
  }
};

    	//=========================================
	//                  Study upgrades
	//=========================================
 function studyMultiplier(){//multiplies study parameter and comments
        actions.studyTome.level = actions.studyTome.level * 2;
        comment('(Studying x 2)', 'lightgreen');
 }     
 function madCapIncrease(){
     stats.madness.madCap = stats.madness.madCap * 2;
    comment('(Madness Capacity x 2)', 'pink');
 }
function pnat(){//unlocked by crypt
    if(stats.vision.current >= actionUpgrades.studyTome.pnat.cost){
        stats.vision.current -= actionUpgrades.studyTome.pnat.cost;
        document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
        flashFade('pnatWrap');
        studyMultiplier();
        madCapIncrease();
        actionUpgrades.studyTome.pnat.purchased = true;
    }
}
function hsan(){//unlocked by tome
    if(stats.vision.current >= actionUpgrades.studyTome.hsan.cost){
        stats.vision.current -= actionUpgrades.studyTome.hsan.cost;
        document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
        flashFade('hsanWrap');
        //comment('Maps to the Dreaming! (Dream Expeditions)', 'lightgreen');
        //document.getElementById('dreamEx').style.display='block';
        //document.getElementById('celephaisWrap').style.display='block';
        //document.getElementById('dylathLeenWrap').style.display='block';
        //document.getElementById('landOfZarWrap').style.display='block';
        //flash('expeditionsTab', 'lightgreen');
        studyMultiplier();
        madCapIncrease();
        actionUpgrades.studyTome.hsan.purchased = true;
    }
}
function dzyan(){//unlocked by tome
    if(stats.vision.current >= actionUpgrades.studyTome.dzyan.cost){
        stats.vision.current -= actionUpgrades.studyTome.dzyan.cost;
        document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
        flashFade('dzyanWrap');
       // comment('Remnants of lost continents! ( Island Ruins)', 'lightgreen');
       // document.getElementById('islandRuinsWrap').style.display='block';
       // flash('expeditionsTab', 'lightgreen');
        studyMultiplier();
        madCapIncrease();
        actionUpgrades.studyTome.dzyan.purchased = true;
    }
}
function dhol(){ //unlocked by tome
    if((stats.vision.current >= 444) && (stats.charm.current >= 222)){
        numberChange('stats', 'vision', -444, '', 'red');
        numberChange('stats', 'charm', -222, '', 'red');
        flashFade('dholWrap');
        comment('Endless Chanting. ( Chanting Toggle)', 'lightgreen');
        document.getElementById('chantToggle').style.display='block';
        let chantWrap = document.getElementById('chantWrap');
        const clonedElement = chantWrap.cloneNode(true);
        chantWrap.parentNode.replaceChild(clonedElement, chantWrap);
        document.getElementById('chantWrap').addEventListener('click',  chantToggle);
        studyMultiplier();
        madCapIncrease();
        actionUpgrades.studyTome.dhol.purchased = true;
    }
}

function kult(){//unlocked by tome
    if(stats.vision.current >= actionUpgrades.studyTome.kult.cost){
        stats.vision.current -= actionUpgrades.studyTome.kult.cost;
        document.getElementById('vision').innerHTML= Math.floor(stats.vision.current);
        flashFade('kultWrap');
        studyMultiplier();
        madCapIncrease();
        actionUpgrades.studyTome.kult.purchased = true;
    }
}
function goul(){//unlocked by men of leng unlocks cannibalism
    if(stats.vision.current >= actionUpgrades.studyTome.goul.cost){
        stats.vision.current -= actionUpgrades.studyTome.goul.cost;
        studyMultiplier();
        madCapIncrease();
        flashFade('goulWrap');
        actionUpgrades.studyTome.goul.purchased = true;
        fleshCrafts.cannibalism.unlocked = true;
        fleshCrafts.cannibalism.purchased = true;
        document.getElementById('cannibalismWrap').style.display='block';
        comment('Tome title translated: To Serve Man (Cannibalism unlocked in FleshCrafts)');
    }
}
function eibon(){//unlocked by tome
    if(stats.vision.current >= actionUpgrades.studyTome.eibon.cost){
        studyMultiplier();
        madCapIncrease();
        flashFade('eibonWrap');
        actionUpgrades.studyTome.eibon.purchased = true;
    }
}
function alch(){//unlocked by tome
    if(stats.vision.current >= actionUpgrades.studyTome.alch.cost){
        studyMultiplier();
        madCapIncrease();
        flashFade('alchWrap');
        actionUpgrades.studyTome.alch.purchased = true;
    }
}
function damn(){//unlocked by tome
     if(stats.vision.current >= actionUpgrades.studyTome.damn.cost){
        studyMultiplier();
        madCapIncrease();
        flashFade('damnWrap');
        actionUpgrades.studyTome.damn.purchased = true;
    }
}
function necr(){//unlocked by tome
    if(stats.vision.current >= actionUpgrades.studyTome.necr.cost){
        studyMultiplier();
        madCapIncrease();
        flashFade('necrWrap');
        actionUpgrades.studyTome.necr.purchased = true;
    }
}
function azat(){//unlocked by tome
    if(stats.vision.current >= actionUpgrades.studyTome.azat.cost){
        studyMultiplier();
        madCapIncrease();
        flashFade('azatWrap');
        actionUpgrades.studyTome.azat.purchased = true;
    }
}

    	//=========================================
	//                  Chant upgrades
	//=========================================

function chantToggle(){
    if(actions.chant.toggle === false){
    actions.chant.toggle = true;
    document.getElementById('chantToggle').style.backgroundColor='green';
    }else{
    actions.chant.toggle = false;
    document.getElementById('chantToggle').style.backgroundColor='red';
    }
}
function autoChant(tics){
    if(actions.chant.ticCounter < actions.chant.ticsNeeded){
        actions.chant.ticCounter += tics;
        if(actions.chant.ticCounter>= actions.chant.ticsNeeded){
            actions.chant.ticCounter = 0;
            window.console.log('chantTic');
            numberChange('stats', 'madness', 0.4, 'red', 'blue');
            numberChange('stats', 'charm', 0.8, 'yellow', 'red');
        }
    }
}


function echoes(){
    //sac for endless chanting 
}
function choir(){
    
}

    	//=========================================
	//                  Preach upgrades
	//=========================================

function fiction(){//??
    if(stats.vision.current >= 100){
        stats.vision.current -= 100;
        document.getElementById('vision').innerHTML = stats.vision.current;
        actionUpgrades.preach.fiction.purchased = true;
        document.getElementById('fictionWrap').style.display='none';
        
    }
}

    	//=========================================
	//                  Madness Actions
	//=========================================
        
function madAct(madAction){ 
    let stat = madActions[madAction].costStat;
    let temp;
    if(madAction === 'drink' || madAction === 'smoke' ||madAction === 'flagellate'){
        temp = stats[stat].current;
    }else{
          temp = vault[stat].current;
    }
    if(temp >= madActions[madAction].cost){ //check if payable
        temp -= madActions[madAction]['cost'];
        if(stats.madness.current > madActions[madAction].benefit){ //don't let madness go below 0
            stats.madness.current -= madActions[madAction].benefit;
        }else{
            stats.madness.current = 0;
        }
        if(madAction === 'drink' || madAction === 'smoke' ||madAction === 'flagellate'){
            stats[stat].current = temp;
            document.getElementById(stat).innerHTML = Math.floor(stats[stat].current);
        }else{
            vault[stat].current = temp;
            document.getElementById(stat).innerHTML = Math.floor(vault[stat].current) ;
        }
        document.getElementById('madness').innerHTML = Math.floor(stats.madness.current) ;
        flash('madness', 'blue', 'white');
        flash(stat , 'red', 'white');
        }
};

let madActions ={
  drink: {
      string: 'Drink',
      description: ['A bottle a day keeps the voices away...  Cost: Vision '],
      benefit: 2,
      costStat: 'vision',
      cost: 1,
      unlocked: true
  },
  smoke: {
      string: 'Smoke',
      description: ['What is in the pipe? Who cares.  Cost: Charm '],
      benefit: 2,
      costStat: 'charm',
      cost: 4,
      unlocked: true
  },
  flagellate: {
      string: 'Flagellate',
      description: ['The beatings will continue until morale improves.  Cost: Health '],
      comment: 'Is this truly necessary?',
      benefit: 12,
      costStat: 'health',
      cost: 16,
      unlocked: false,
      unlock: ['madness', 44]
  },
  rave: {
      string: 'Rave',
      description: ['Scream and foam at the mouth until you collapse.  Cost: Love '],
      comment: 'They will forgive you, in time.',
      benefit: 16,
      costStat: 'love',
      cost: 32,
      unlocked: false,
      unlock: ['love', 44]
  },
  doomScroll: {
      string: 'Doom Scroll',
      description: ['Stare at your phone until the madness fades. It is a bad look but whatever.   Cost: Terror '],
      comment: 'Those who are not feared cannot rule.',
      benefit: 8,
      costStat: 'terror',
      cost: 32,
      unlocked: false,
      unlock: ['terror', 44]
  }
};
let statKeys = Object.keys(stats);
let actionKeys = Object.keys(actions);     
let madKeys = Object.keys(madActions);
let upgradeKeys = Object.keys(actionUpgrades);


    	//=========================================
	// Build West and Stats HTML
	//=========================================
        
function west(){      
    for(i=0;i<statKeys.length;i++){
            document.getElementById('statBox').innerHTML +=
            "<div class='westStatBox' id='" + statKeys[i] + "Box'>" +
            "<span class='" + statKeys[i] + "Text'>" + stats[statKeys[i]].string + "</span>" +
            "<span class='" + statKeys[i] + "Text westNumbers'  id='" + statKeys[i] + "'></span>" +
            "</div>";
    };
    for(i=0;i<statKeys.length; i++){
        document.getElementById(statKeys[i]).innerHTML = stats[statKeys[i]].current;
    };
    document.getElementById('testBox').innerHTML +=
            //"<button id='time'>Time</button>" +
            //"<button id='test'>Test</button>" +
            "<button id='save'>Save</button>" +
            "<button id='load'>Load</button>";
    document.getElementById('west').innerHTML =    
            "<div id='actionBox' >" +
            "</div>" +
            "<div id='madActionBox'>" +
            "<h3 id='madTitle'>Madness Mitigation</h3>" +
            "</div>"; 
    for(i=0;i<actionKeys.length;i++){
        document.getElementById('actionBox').innerHTML +=
                "<div class='actionColumn' id='" + actionKeys[i] + "Column'>" +
                "<button type='button' class='actionWraps' id='" + actionKeys[i] + "Wrap'></button>" +
                "</div>";
        if(i>0){
            document.getElementById(actionKeys[i] + 'Column').innerHTML +=
                "<button type='button' class='actionLocks' id='" + actionKeys[i] + "Lock'>" +actions[actionKeys[i]]['lockText'] + "</button>";
        }
    }
    document.getElementById('studyTomeWrap').innerHTML += 
         "<span id='tome'>Ex Abysso</span>" +
         "<img class='actionPng' src='images/studyTome.png' alt='?'/>" +
         "<span class='actionText'>Study Tome</span>" +
         "<span id='studyProgress'></span>";
    document.getElementById('chantWrap').innerHTML += 
         "<span id='chantToggle'></span>" +
         "<img class='actionPng' src='images/chant.png' alt='?'/>" +
         "<span class='actionText'>Chant</span>";
    document.getElementById('dreamWrap').innerHTML += 
         "<img class='actionPng' src='images/dream.png' alt='?'/>" +
         "<span class='actionText'>Dream</span>" +
          "<span id='dreamTimer'>0</span>";
    document.getElementById('preachWrap').innerHTML += 
         "<img class='actionPng' src='images/preach.png' alt='?'/>" +
         "<span class='actionText' id='preachText'>Preach</span>" +
        "<span id='preachWrapCost'>" + actions.preach.cost + "</span>";
              
        //Action Upgrades
    for (i=0;i<upgradeKeys.length; i++){
        let actionColumn = upgradeKeys[i];
        let upgrades = Object.keys(actionUpgrades[actionColumn]);
        for(j=0;j<upgrades.length;j++){
            document.getElementById(actionColumn + "Column").innerHTML += 
                "<button class='actionUpgradeWraps' id='" + upgrades[j] + "Wrap'>" + actionUpgrades[actionColumn][upgrades[j]].string + "</button>";
        };
    };
    //mad actions
    for(i=0;i<madKeys.length;i++){
            document.getElementById('madActionBox').innerHTML +=
                    "<button class='madActionWraps' id='" +madKeys[i] + "Wrap'>" +
                    "<span class='madTitle'>" + madActions[madKeys[i]].string + "</span>" + 
                    "<img class='madActionPng' src='images/" + madKeys[i] + ".png' alt='?'/>" +
                    "</button>";
    };

};   
west();
//Build Dream buttons
function makeDreamChoices(){
    document.getElementById('dreamColumn').innerHTML +=
        "<span  id='dreamChosen'>Mind Alone</span>" +
        "<button onmousedown='showDreamChoices()' onmouseup='hideDreamChoices()' id='dreamDropBtn'>&#9662;</button>" +
        "<div id='dreamChoices'></div>";
    for(i=0;i<dreamKeys.length;i++){
        document.getElementById('dreamChoices').innerHTML +=
        "<button class='dreamChoice' id='" + dreamKeys[i] + "Choice' onmouseup='dreamChoice(\"" + dreamKeys[i]+ "\")'>" + dreamChoices[dreamKeys[i]].string + "</button>";
    }
};
 makeDreamChoices();

