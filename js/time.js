   	//=========================================
	// follower actions
	//=========================================

function faithful(tics){    
     if(cult.faithful.current>=1){
        cult.faithful.ticCounter += tics;
        if(cult.faithful.ticCounter >= cult.faithful.ticsNeeded){
            cult.faithful.ticCounter -= cult.faithful.ticsNeeded;
            let temp = ['love', 'terror', 'gold'];
            let tempKeys = Object.keys(temp);
            let tempKey = Math.floor(Math.random() * tempKeys.length);
            const currentValue = vault[temp[tempKey]].current;
            const softLimit = cult.faithful.current * 16 * cult.faithful.outMultipliers[tempKey];
            const randomAmount = Math.max((Math.random() * cult.faithful.current* cult.faithful.outMultipliers[tempKey]), 1);
            let colors = [['#FF559D', 'red'], ['red', 'green'], ['yellow', 'red']];
            if ((currentValue + randomAmount)< softLimit) {
                numberChange('vault', temp[tempKey], randomAmount, colors[tempKey][0],  colors[tempKey][1]);
            }else if(temp[tempKey] === 'gold'){
                numberChange('vault', temp[tempKey], randomAmount, colors[tempKey][0],  colors[tempKey][1]);
            }else if(currentValue  < softLimit){
                numberChange('vault', temp[tempKey], 1, colors[tempKey][0],  colors[tempKey][1]);
            }
        }
    }
}

function chanters(tics){
    if(cult.chanters.current>=1 && cult.faithful.current>1){
        cult.chanters.ticCounter += tics;
        if(cult.chanters.ticCounter >= cult.chanters.ticsNeeded){
            cult.chanters.ticCounter -= cult.chanters.ticsNeeded;
            const softcap = (cult.chanters.current + cult.faithful.current) * 16;
            const remainingCapacity = softcap - vault.love.current;
            const diminishingFactor = Math.max(1, remainingCapacity) / softcap;
            const delta = (cult.chanters.current + cult.faithful.current) * diminishingFactor; //slows end growth
            const loveChange = Math.min(cult.faithful.current, Math.floor(delta));//slows initial growth sets fractions to zero
            numberChange('vault', 'love', loveChange, '#FF559D', 'red');
            let divisor = Math.max((stats.charm.current/4), 4); //slows growth from low charm
            let charmChange = Math.floor((cult.chanters.current * cult.faithful.current/ divisor));
            numberChange('stats', 'charm', charmChange, '#FFFF00', 'red');
        }
    }
}

function sentinals(tics){
     if(cult.sentinals.current>=1 && cult.faithful.current>1){
        cult.sentinals.ticCounter += tics;
        if(cult.sentinals.ticCounter >= cult.sentinals.ticsNeeded){
            cult.sentinals.ticCounter -= cult.sentinals.ticsNeeded;
            const softcap = (cult.sentinals.current + cult.faithful.current) * 8;
            const remainingCapacity = Math.max(0, softcap - vault.terror.current);
            const diminishingFactor = Math.max(1, remainingCapacity) / softcap;
            const delta = (cult.sentinals.current + cult.faithful.current) * diminishingFactor;
            const terrorChange = Math.min(cult.faithful.current, Math.floor(delta));
            numberChange('vault', 'terror', terrorChange, 'red', 'blue');
        }
    }
}

function priests(tics){
    cult.priests.ticCounter += (tics * cult.priests.current);
    if(cult.priests.ticCounter >= cult.priests.ticsNeeded){
        cult.priests.ticCounter -= cult.priests.ticsNeeded;
        if(cult.innocents.current >= cult.faithful.current){
            numberChange('cult', 'innocents', -1, 'red', 'blue');
            numberChange('cult', 'faithful', 1, 'red', 'blue');
            comment('Your priests have converted one of the Innocents into a Faithful follower for you.');
        }else{
            numberChange('cult', 'innocents', 1, 'red', 'blue');
            comment('Your priests have drawn in an unwary Innocent.');
        }
    }
}
let ticC = {
  healthCounter: [0, 1],
  terrorCounter: [0, 4]
};
function healthCheck(){
    if(ticC.healthCounter[0] < ticC.healthCounter[1]){
        ticC.healthCounter[0]++;
    }else{
        ticC.healthCounter[0] = 0;
        if(stats.health.current < stats.health.max - 1){
            numberChange('stats', 'health', 1, 'blue', 'red');
        }else if(stats.health.current > stats.health.max + 1){
            numberChange('stats', 'health', -1, 'blue', 'red');
        }
    }
}
function loveTerrorChecks(){
    if(ticC.terrorCounter[0] < ticC.terrorCounter[1]){
        ticC.terrorCounter[0]++;
    }else{
        ticC.terrorCounter[0] = 0;
        if((vault.terror.current - vault.love.current) > (vault.love.current * 5)  && (vault.terror.current >20) && (vault.love.current>10)){
            let diff = vault.terror.current - vault.love.current;
            if(cult.innocents.current >= 1){
                numberChange('cult', 'innocents', -1, 'green', 'red');
                numberChange('cult', 'insane', 1, 'green', 'red');
                numberChange('vault', 'terror', (-diff/4) , 'red', 'blue');
                if(cult.insane.unlocked === false){
                    cult.insane.unlocked = true;
                    document.getElementById('insaneWrap').style.display='block';
                }
                comment('One of the Innocents gone mad. There was too little Love to conquer their Terror. (Terror -' + Math.floor(diff/4) +')', 'red', 'red');
            }else if(cult.faithful.current >= 1){
                numberChange('cult', 'faithful', -1 , 'red', 'blue');
                numberChange('vault', 'terror', (-diff/2) , 'red', 'blue');
                comment('One of the Faithful has fled. There was too little Love to conquer their Terror. (Terror -' + Math.floor(diff/2) +')', 'red', 'red');
            }else{
                window.console.log('Boom!'); //should not happen
            }
        }
    }
}



    	//=========================================
	// time
	//=========================================
let timeCheck = [0,5];
function performOneTic(tics){
    if(timeCheck[0] < timeCheck[1]){ //quick check that time is working
        timeCheck[0]++;
    }else{
        timeCheck[0]=0;
        window.console.log('5');
    }
    //things to do, functions to call
    healthCheck();
    dyingCheck();
    madCheck();
    loveTerrorChecks();
    checkMadnessValue();
    checkUnlockCounter(tics);
    if(actions.chant.toggle === true){
        autoChant(tics);
    }
    if(cult.faithful.current >0){
        faithful(tics);
    }
    if(cult.chanters.current >0){
        chanters(tics);
    }    
    if(cult.sentinals.current >0){
        sentinals(tics);
    }  
    if(cult.priests.current >0){
        priests(tics);
    }
    if(goldCrafts.tithe.toggle === true){
        tithe();
    }
    relicsTic();
};

let previousTimestamp = 0;
let partialTics = 0;
let ticDuration = 1000;
let tics = 0;
let stamp;
function gameTimer(timestamp) {
    //calculate tics
    let timeDifference = timestamp - previousTimestamp;
    previousTimestamp = timestamp;
    partialTics += timeDifference;
    tics = parseInt(partialTics / ticDuration);
    if(tics >0){
        //removes timestamps equal to tics being used
    partialTics = partialTics - (tics*ticDuration);
    //calls perform one tic
    performOneTic(tics);
    }
    //resets timer so the loop continues
    if(schTogg){
    requestAnimationFrame(gameTimer);
    }
}
//turns time on and off
let schTogg = null;
function timeOn() {
        previousTimestamp = performance.now(); //should update regular time
        schTogg = window.requestAnimationFrame(gameTimer);
        window.console.log('on');
    }
function timeOff(){ 
        window.cancelAnimationFrame(schTogg);
        schTogg = null;
        window.console.log('off');
}
function schTogFunc(){
    if(!schTogg){
        timeOn();
        window.console.log('on');
    }else{
        timeOff();
        window.console.log('off');
    }
}

//return from afk
let afkStamp = performance.now();
function afk(){
    let currentTimestamp = performance.now();
    let timePassed = currentTimestamp - afkStamp;
    let tics = timePassed/1000;
    if(domUnlocks.sacrarium === true){
        let mad = 0;
        let ter=0;
        let vis=0;
        let cha=0;
        if(relics.rhanRelic.unlocked === true){
            mad += 1;
            vis += 2;
            ter += 1;
        }
        if(relics.trap.unlocked === true){
            mad += 1;
            vis += 2;
        }
        if(relics.bast.unlocked === true){
            mad -= 2;
            cha += 1;
        }
        let bigMad = (tics/4) * mad;
        if(stats.madness.current + bigMad > stats.madness.madCap){
            let extraMad = stats.madness.current + bigMad - stats.madness.madCap;
            let extraTics = extraMad / mad;
            tics -= extraTics;
            numberChange('stats', 'madness', (bigMad - extraMad), '#FE2EF7', 'blue');
        }else{
            numberChange('stats', 'madness', bigMad, '#FE2EF7', 'blue');
        }
  //reaching madCap will end offline progress so the tics are reduced for everything else and we hope the popup will occur on its own
        numberChange('vault', 'terror',  (ter * tics/4), 'red', 'red');
        numberChange('stats', 'vision', (vis * tics/4), '#40E0D0', 'red');
        numberChange('stats', 'charm', (cha *tics/4), '#FFFF00', 'red');
    }


    if(cult.faithful.unlocked === true){
        //loveconst randomAmount = Math.random() * cult.faithful.current* cult.faithful.outMultipliers[tempKey];
        let loveCap = cult.faithful.current * 16 * cult.faithful.outMultipliers[0];
        let bigLove = Math.random() * cult.faithful.current* cult.faithful.outMultipliers[0] * (tics/(cult.faithful.ticsNeeded*3));
        if(vault.love.current >loveCap){
        }else if((vault.love.current + bigLove) > loveCap){
            vault.love.current += Math.max(1, (vault.love.current + bigLove - loveCap));
        }else{
            vault.love.current += bigLove;
        }
        document.getElementById('love').innerHTML = Math.floor(vault.love.current);
        //terror
        let terrorCap = cult.faithful.current * 16 * cult.faithful.outMultipliers[1];
        let bigTerror =Math.random() * cult.faithful.current* cult.faithful.outMultipliers[1] * (tics/(cult.faithful.ticsNeeded*3));
        if(vault.terror.current> terrorCap){
            //not a damn thing
        }else if((vault.terror.current + bigTerror) > terrorCap){
            let temp = vault.terror.current + bigTerror -terrorCap;
            vault.terror.current +=  Math.max(1,temp);
        }else if(vault.terror.current + bigTerror < terrorCap){
            vault.terror.current += bigTerror;
        }
        document.getElementById('terror').innerHTML = Math.floor(vault.terror.current);     
        //gold
        let bigGold = Math.random() * cult.faithful.current* cult.faithful.outMultipliers[2] * (tics/(cult.faithful.ticsNeeded*3));
        vault.gold.current += bigGold;
        document.getElementById('gold').innerHTML = Math.floor(vault.gold.current);     
    }
    if(cult.chanters.unlocked === true){
        const softCap = (cult.chanters.current + cult.faithful.current) * 16;
        const remainingCapacity = softCap - vault.love.current;
        const diminishingFactor = Math.max(1, remainingCapacity) / softCap;
        const delta = (cult.chanters.current + cult.faithful.current) * diminishingFactor; //slows end growth
        const loveChange = Math.min(cult.faithful.current, Math.floor(delta));//slows initial growth sets fractions to zero
        let bigLove = loveChange * (tics/cult.chanters.ticsNeeded);
        if(vault.love.current > softCap){
        }else if((vault.love.current + bigLove) >= softCap){
            vault.love.current += (vault.love.current + bigLove) - softCap;
        }else if((vault.love.current + bigLove) < softCap){
            vault.love.current += bigLove;
        }
        document.getElementById('love').innerHTML = Math.floor(vault.love.current);
        let divisor = Math.max(stats.charm.current, 8); 
        let charmChange = (cult.chanters.current * cult.faithful.current/ divisor);
        numberChange('stats', 'charm', Math.floor(charmChange), '#FFFF00', 'red');
    }
    if(cult.sentinals.current >=1){
        const softCap = (cult.sentinals.current + cult.faithful.current) * 8;
        const remainingCapacity = Math.max(0, softCap - vault.terror.current);
        const diminishingFactor = Math.max(1, remainingCapacity) / softCap;
        const delta = (cult.sentinals.current + cult.faithful.current) * diminishingFactor;
        const terrorChange = Math.min(cult.faithful.current, delta);
        let bigTerror = terrorChange * (tics/cult.sentinals.ticsNeeded);
        if(vault.terror.current > softCap){
        }else if((vault.terror.current + bigTerror)>=softCap){
            vault.terror.current += vault.terror.current + bigTerror - softCap;
        }else if((vault.terror.current + bigTerror) < softCap){
            vault.terror.current += bigTerror;
        }
        document.getElementById('terror').innerHTML = Math.floor(vault.terror.current);  
    }
//tithing
}