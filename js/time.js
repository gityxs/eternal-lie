   	//=========================================
	// follower actions
	//=========================================

function faithful(tics){    
     if(cult.faithful.current>=1){
        cult['faithful']['ticCounter'] += tics;
        if(cult['faithful']['ticCounter'] >= cult['faithful']['ticsNeeded']){
            cult['faithful']['ticCounter'] -= cult['faithful']['ticsNeeded'];
            let temp = ['love', 'terror', 'gold'];
            let tempKeys = Object.keys(temp);
            let tempKey = Math.floor(Math.random() * tempKeys.length);
            const currentValue = vault[temp[tempKey]]['current'];
            const softLimit = cult['faithful']['current'] * 16 * cult.faithful.outMultipliers[tempKey];
            const randomAmount = Math.random() * cult['faithful']['current']* cult.faithful.outMultipliers[tempKey];
            if ((currentValue + randomAmount)< softLimit) {
                const randomAmount = Math.random() * cult['faithful']['current'];
                vault[temp[tempKey]]['current'] += randomAmount;
            }else if(vault[temp[tempKey]]['current']  < softLimit){
                    vault[temp[tempKey]]['current']  = softLimit;
            }
            document.getElementById(temp[tempKey]).innerHTML = Math.floor(vault[temp[tempKey]]['current']);
        }
    }
}

function chanters(tics){
    if(cult.chanters.current>=1 && cult.faithful.current>1){
        cult['chanters']['ticCounter'] += tics;
        if(cult['chanters']['ticCounter'] >= cult['chanters']['ticsNeeded']){
            cult['chanters']['ticCounter'] -= cult['chanters']['ticsNeeded'];
            const softcap = cult['chanters']['current'] + cult['faithful']['current'] * 16;
            const remainingCapacity = Math.max(0, softcap - vault['love']['current']);
            const diminishingFactor = 1 - (remainingCapacity / softcap);
            const baseGrowth = cult['chanters']['current'] *  cult['faithful']['current'] * diminishingFactor;
            const finalGrowth = Math.min( cult['faithful']['current'], baseGrowth);
            vault['love']['current'] += finalGrowth;
            document.getElementById('love').innerHTML = Math.floor(vault['love']['current']);
            let divisor = Math.max(stats['charm']['current'], 8); 
            stats['charm']['current'] += (cult['chanters']['current'] * cult['faithful']['current']/ divisor);
            document.getElementById('charm').innerHTML = Math.floor(stats['charm']['current']);
        }
    }
}

function sentinals(tics){
     if(cult.sentinals.current>=1 && cult.faithful.current>1){
        cult['sentinals']['ticCounter'] += tics;
        if(cult['sentinals']['ticCounter'] >= cult['sentinals']['ticsNeeded']){
            cult['sentinals']['ticCounter'] -= cult['sentinals']['ticsNeeded'];
            const softcap = cult['sentinals']['current'] * cult['faithful']['current'] * 8;
            const remainingCapacity = Math.max(0, softcap - vault['terror']['current']);
            const diminishingFactor = 1 - (remainingCapacity / softcap);
            const baseGrowth = cult['sentinals']['current'] * cult['faithful']['current'] * diminishingFactor;
            const finalGrowth = Math.min(cult['faithful']['current'], baseGrowth);
            vault['terror']['current'] += finalGrowth;
            document.getElementById('terror').innerHTML = Math.floor(vault['terror']['current']);
        }
    }
}

function priests(tics){
    cult['priests']['ticCounter'] += (tics * cult.priests.current);
    if(cult['priests']['ticCounter'] >= cult['priests']['ticsNeeded']){
        cult['priests']['ticCounter'] -= cult['priests']['ticsNeeded'];
        if(cult.innocents.current >= cult.faithful.current){
            cult.innocents.current -= 1;
            cult.faithful.current += 1;
            document.getElementById('innocents').innerHTML = cult.innocents.current;
            document.getElementById('faithful').innerHTML = cult.faithful.current;
            comment('Your priests have converted one of the Innocents into a Faithful follower for you.');
        }else{
            cult.innocents.current +=1;
            document.getElementById('innocents').innerHTML = cult.innocents.current;
            comment('Your priests have drawn in an unwary Innocent.');
        }
    }
}
let ticC = {
  healthCounter: [0, 22],
  loveCounter: [0, 8],
  terrorCounter: [0, 44]
};
function healthCheck(){
    if(ticC.healthCounter[0] < ticC.healthCounter[1]){
        ticC.healthCounter[0]++;
    }else{
        ticC.healthCounter[0] = 0;
        if(stats['health']['current'] < stats['health']['max'] - 1){
          stats['health']['current'] += 0.03;
        }else if(stats['health']['current'] > stats['health']['max'] + 1){
            stats['health']['current'] -= 0.03;
        }
        document.getElementById('health').innerHTML = Math.floor(stats['health']['current']);
    }
}
function loveTerrorChecks(){
    if(ticC.loveCounter[0] < ticC.loveCounter[1]){
            ticC.loveCounter[0]++;
    }else{
        ticC.loveCounter[0] = 0;
        if(vault['love']['current'] > (cult['faithful']['current'] + cult['chanters']['current'] )*44){ //limits love
            vault['love']['current'] =   (cult['faithful']['current'] + cult['chanters']['current'] )*44;
        }
    }
    if(ticC.terrorCounter[0] < ticC.terrorCounter[1]){
        ticC.terrorCounter[0]++;
    }else{
        ticC.terrorCounter[0] = 0;
        if((vault.terror.current - vault.love.current) > (vault.love.current * 5)  && (vault['terror']['current'] >20) && (vault.love.current>10)){
            let diff = vault['terror']['current'] - vault['love']['current'];
            if(cult['innocents']['current'] >= 1){
                cult['innocents']['current'] -= 1;
                cult.insane.current += 1;
                document.getElementById('insane').innerHTML= cult.insane.current;
                if(cult.insane.unlocked === false){
                    cult.insane.unlocked = true;
                    document.getElementById('insaneWrap').style.display='block';
                }
                vault['terror']['current'] -=  (diff/4); //innocent goes insane
                comment('One of the Innocents gone mad. There was too little Love to conquer their Terror. (Terror -' + Math.floor(diff/4) +')', 'red', 'red');
                document.getElementById('innocents').innerHTML =cult['innocents']['current'];
                flash('innocents', 'red', 'white');
                document.getElementById('terror').innerHTML =Math.floor(vault['terror']['current']);
                flash('terror', 'red', 'white');
            }else if(cult['faithful']['current'] >= 1){
                cult['faithful']['current'] -= 1;
                comment('One of the Faithful has fled. There was too little Love to conquer their Terror. (Terror -' + Math.floor(diff/2) +')', 'red', 'red');
                vault['terror']['current'] -= (diff/2);  //faithful leaves and terror level drops
                document.getElementById('terror').innerHTML =Math.floor(vault['terror']['current']);
                document.getElementById('faithful').innerHTML =cult['faithful']['current'];
            }else{
                window.console.log('Boom!'); //should not happen
            }
        }
    }
}



    	//=========================================
	// time
	//=========================================
let timeCheck = [0,50];
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
let ticDuration = 100;
let tics = 0;
function gameTimer(timestamp) {
    //calculate tics
    let timeDifference = previousTimestamp? timestamp - previousTimestamp : ticDuration;
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
        previousTimestamp = 0;
        schTogg = window.requestAnimationFrame(gameTimer);
        window.console.log('on');
    }
function timeOff(){ 
        window.cancelAnimationFrame(gameTimer);
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