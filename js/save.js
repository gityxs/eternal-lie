/* 
local storage
 */
//adding set for major dom unlocks
let domUnlocks = {
    cult: false,
    expeditions: false,
    sacrarium: false
};
// Function to save data to local storage
function saveToLocalStorage() {
    //dom
  localStorage.setItem("savedDomUnlocks", JSON.stringify(domUnlocks)); //dom
        	//=========================================
	//  West 
	//=========================================
  localStorage.setItem("savedStats", JSON.stringify(stats)); //stats
  localStorage.setItem("savedActions", JSON.stringify(actions));  //actions
  localStorage.setItem("savedMadAct", JSON.stringify(madActions));  //mad actions
  localStorage.setItem("savedActionUpgrades", JSON.stringify(actionUpgrades));  // actionUpgrades
          	//=========================================
	//  Cult
	//=========================================

  localStorage.setItem("savedCult", JSON.stringify(cult)); //cult
  localStorage.setItem("savedVault", JSON.stringify(vault)); //vault
  localStorage.setItem("savedLove", JSON.stringify(loveCrafts)); //crafts
  localStorage.setItem("savedTerror", JSON.stringify(terrorCrafts)); //crafts
  localStorage.setItem("savedGold", JSON.stringify(goldCrafts)); //crafts
  localStorage.setItem("savedFlesh", JSON.stringify(fleshCrafts)); //crafts
  localStorage.setItem("savedTome", JSON.stringify(tomeCrafts)); //crafts
            	//=========================================
	//  Expeditions
	//=========================================
localStorage.setItem("savedWorld", JSON.stringify(world)); //world
localStorage.setItem("savedDreamEx", JSON.stringify(dreamEx)); //dream ex
              	//=========================================
	//  Sacrarium
	//=========================================
localStorage.setItem("savedGods", JSON.stringify(gods)); //gods
localStorage.setItem("savedRelics", JSON.stringify(relics)); //relics
}
// Function to load data from local storage
//quick check
let garbage = false;
function garbagE(){
    if(garbage === false){
        garbage = true;
        window.console.log('first run');
    }else{
        window.console.log('second run');
        ergjoitdghtd;
    }
}
function loadClick(){
    location.reload();
}
function loadFromLocalStorage() {
// localStorage.clear();
    window.console.log('load');
    //dom
    let storedDomUnlocks = localStorage.getItem("savedDomUnlocks"); 
    if (storedDomUnlocks) {
        domUnlocks = JSON.parse(storedDomUnlocks); //replace dom
        domKeys = Object.keys(domUnlocks);
        for(i=0;i<domKeys.length;i++){
            if(domUnlocks[domKeys[i]] === true){
                document.getElementById(domKeys[i] + 'Tab').style.display='block';
            }
        }
    }
        	//=========================================
	//  West 
	//=========================================
                                                                         //stats
    let storedStats = localStorage.getItem("savedStats"); 
    if (storedStats) {
        stats = JSON.parse(storedStats); //replace stats
        //update dom
        for(i=0;i<statKeys.length;i++){
            document.getElementById(statKeys[i]).innerHTML = Math.floor(stats[statKeys[i]].current);
            if(stats[statKeys[i]].unlocked === true){
                document.getElementById(statKeys[i] + "Box").style.display='block';
            }
        };
    } else {
    console.log("stats missing.");
    }
                                                                         //actions
    let storedActions = localStorage.getItem("savedActions"); 
    if (storedActions) {
        actions = JSON.parse(storedActions); //replace 
        //update dom
        for(i=1;i<actionKeys.length;i++){
            if(actions[actionKeys[i]].purchased === true){
                document.getElementById(actionKeys[i] + "Lock").style.display='none';
                document.getElementById(actionKeys[i] + "Wrap").style.display='block';
            }else{
                document.getElementById(actionKeys[i] + "Lock").style.display='block';
            }
        };
        document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
        document.getElementById('preachCost').innerHTML = actions.preach.cost;
    } else {
    console.log("actions missing.");
    } 
                                                                         //mad actions
    let storedMadAct = localStorage.getItem("savedMadAct"); 
    if (storedMadAct) {
        madActions = JSON.parse(storedMadAct); //replace 
        //update dom
        if(stats.madness.madActionBoxUnlocked === true){
            document.getElementById('madActionBox').style.display='block';
        }
        for(i=0;i<madKeys.length;i++){
            if(madActions[madKeys[i]].unlocked === true){
                document.getElementById(madKeys[i] + "Wrap").style.display='block';
            }
        };
    } else {
    console.log("mad actions missing.");
    } 
                                                                //actionUpgrades
    let storedActionUpgrades = localStorage.getItem("savedActionUpgrades"); 
    if (storedActionUpgrades) {
        actionUpgrades = JSON.parse(storedActionUpgrades); //replace 
        //update dom
        for(i=0;i<upgradeKeys.length;i++){
            let upgrades = Object.keys(actionUpgrades[upgradeKeys[i]]);
            for(j=0;j< upgrades.length;j++){
                if(actionUpgrades[upgradeKeys[i]][upgrades[j]].unlocked === true && actionUpgrades[upgradeKeys[i]][upgrades[j]].purchased === false){
                    document.getElementById(upgrades[j] + "Wrap").style.display='block';
                }
        }
        };
    } else {
    console.log("action upgrades missing.");
    }   
            	//=========================================
	//  Cult
	//=========================================

    let storedCult = localStorage.getItem("savedCult"); //cult
    if (storedCult) {
        cult = JSON.parse(storedCult); //replace 
        //update dom
        for(i=0;i<cultKeys.length;i++){
            if(cult[cultKeys[i]].unlocked === true){
                document.getElementById(cultKeys[i] + "Wrap").style.display='block';
                document.getElementById(cultKeys[i]).innerHTML = cult[cultKeys[i]].current;
            }
        };
    } else {
    console.log("cult missing.");
    }
    let storedVault = localStorage.getItem("savedVault"); //vault
    if (storedVault) {
        vault = JSON.parse(storedVault); //replace 
        //update dom
        for(i=0;i<vaultKeys.length;i++){
            if(vault[vaultKeys[i]].unlocked === true){
                document.getElementById(vaultKeys[i] + "Wrap").style.display='block';
                document.getElementById(vaultKeys[i]).innerHTML=Math.floor(vault[vaultKeys[i]].current);
            }
        };
    } else {
    console.log("vault missing.");
    }

    let storedLove = localStorage.getItem('savedLove');//love
    if (storedLove) {
        loveCrafts = JSON.parse(storedLove);
        for(i=0;i<loveKeys.length;i++){ //3 point check
            if(loveCrafts[loveKeys[i]].unlocked === true && loveCrafts[loveKeys[i]].purchased === true &&  loveCrafts[loveKeys[i]].permanent === true){//permanent and purchased
                document.getElementById(loveCrafts[loveKeys[i]].callString + "Wrap").style.display='inline-block';
                if(loveCrafts[loveKeys[i]].unlockText){
                    document.getElementById(loveCrafts[loveKeys[i]].callString + "Lock").style.display='none';    
                 }
                 //permanent and purchased
            }else if(loveCrafts[loveKeys[i]].unlocked === true && loveCrafts[loveKeys[i]].purchased === true &&  loveCrafts[loveKeys[i]].permanent === false){// hide purchased oneoffs
                 document.getElementById(loveCrafts[loveKeys[i]].callString + "OneOffs").style.display='none';
            }else if(loveCrafts[loveKeys[i]].unlocked === true && loveCrafts[loveKeys[i]].purchased === false){//unlocked for vision buy
                document.getElementById(loveCrafts[loveKeys[i]].callString + "Wrap").style.display='none'; 
                document.getElementById(loveCrafts[loveKeys[i]].callString + "Lock").style.display='block';    
            }
        }
        document.getElementById('convertChanterCost').innerHTML = loveCrafts.convertChanter.cost;
    }
    
    let storedTerror = localStorage.getItem('savedTerror');//terror Terror
    if (storedTerror) {
        terrorCrafts = JSON.parse(storedTerror);
        for(i=0;i<terrorKeys.length;i++){
            if(terrorCrafts[terrorKeys[i]].unlocked === true && terrorCrafts[terrorKeys[i]].purchased === true &&  terrorCrafts[terrorKeys[i]].permanent === true){//permanent and purchased
                document.getElementById(terrorCrafts[terrorKeys[i]].callString + "Wrap").style.display='block';
                if(terrorCrafts[terrorKeys[i]].unlockText){
                    document.getElementById(terrorCrafts[terrorKeys[i]].callString + "Lock").style.display='none';    
                }
                if(terrorCrafts[terrorKeys[i]].callString === 'sacrifice'){
                     let type = terrorCrafts.sacrifice.type;
                    document.getElementById("sacrifice").innerHTML = sacrificeTypes[type].string;
                    document.getElementById("sacrificeDesc").innerHTML = sacrificeTypes[type].description[0];
                    document.getElementById("sacrificeTerror").innerHTML = sacrificeTypes[type].description[3];
                    document.getElementById("sacrificecost").innerHTML = sacrificeTypes[type].description[1];
                    document.getElementById("sacrificeBenefit").innerHTML = sacrificeTypes[type].description[2];
                    document.getElementById('sacDropBtn').style.display='block';
                }
            }else if(terrorCrafts[terrorKeys[i]].unlocked === true && terrorCrafts[terrorKeys[i]].purchased === true&&  terrorCrafts[terrorKeys[i]].permanent === false){//should be purchaced one offs
                document.getElementById(terrorCrafts[terrorKeys[i]].callString + "OneOffs").style.display='none'; 
             }else if(terrorCrafts[terrorKeys[i]].unlocked === true && terrorCrafts[terrorKeys[i]].purchased === false){//unlocked for vision buy
                if(terrorCrafts[terrorKeys[i]].unlockText){
                    document.getElementById(terrorCrafts[terrorKeys[i]].callString + "Lock").style.display='block';
                document.getElementById(terrorCrafts[terrorKeys[i]].callString + "Wrap").style.display='none'; 
                 }
            }
        }
        document.getElementById('convertSentinalcost').innerHTML = terrorCrafts.convertSentinal.cost;
    }

    let storedGold = localStorage.getItem('savedGold');//gold
    if (storedGold) {
        goldCrafts = JSON.parse(storedGold);
        for(i=0;i<goldKeys.length;i++){
            if(goldCrafts[goldKeys[i]].unlocked === true && goldCrafts[goldKeys[i]].purchased === true &&  goldCrafts[goldKeys[i]].permanent === true){//permanent and purchased
                document.getElementById(goldCrafts[goldKeys[i]].callString + "Wrap").style.display='block';
                if(goldCrafts[goldKeys[i]].unlockText){
                    document.getElementById(goldCrafts[goldKeys[i]].callString + "Lock").style.display='none';   
                    if(goldCrafts[goldKeys[i]].callString === 'tithe'){
                        document.getElementById('titheToggle').style.display='block';
                        if(goldCrafts.tithe.toggle === true){
                            document.getElementById('titheToggle').style.backgroundColor='green';
                        }
                    }
                }
            }else if(goldCrafts[goldKeys[i]].unlocked === true && goldCrafts[goldKeys[i]].purchased === true&&  goldCrafts[goldKeys[i]].permanent === false){//should be purchaced one offs
                document.getElementById(goldCrafts[goldKeys[i]].callString + "OneOffs").style.display='none'; 
             }else if(goldCrafts[goldKeys[i]].unlocked === true && goldCrafts[goldKeys[i]].purchased === false &&  goldCrafts[goldKeys[i]].permanent === true){//unlocked for vision buy
                document.getElementById(goldCrafts[goldKeys[i]].callString + "Lock").style.display='block';
                document.getElementById(goldCrafts[goldKeys[i]].callString + "Wrap").style.display='none'; 
            }
        }
    }
    let storedFlesh = localStorage.getItem('savedFlesh');
    if (storedFlesh) {
        fleshCrafts = JSON.parse(storedFlesh);//flesh
        
        for(i=0;i<fleshKeys.length;i++){
            if(fleshCrafts[fleshKeys[i]].unlocked === true && fleshCrafts[fleshKeys[i]].purchased === true &&  fleshCrafts[fleshKeys[i]].permanent === true){//permanent and purchased
                document.getElementById(fleshCrafts[fleshKeys[i]].callString + "Wrap").style.display='block';
                if(fleshCrafts[fleshKeys[i]].unlockText){
                    document.getElementById(fleshCrafts[fleshKeys[i]].callString + "Lock").style.display='none';    
                }
                if(fleshKeys[i] === 'leatherBinding'){
                    document.getElementById('leatherBindingcost').innerHTML = 'Cost: Flesh ' + fleshCrafts.leatherBinding.cost + ' Pages ' + vault.tomes.pagesNeeded;
                }
                if(fleshKeys[i] === 'sculpt'){
                    document.getElementById('sculptcost').innerHTML = fleshCrafts.sculpt.cost;
                    document.getElementById('sculptBenefit').innerHTML = "Benefit: Gold: " + fleshCrafts.sculpt.benefit;
                }
            }else if(fleshCrafts[fleshKeys[i]].unlocked === true && fleshCrafts[fleshKeys[i]].purchased === true&&  fleshCrafts[fleshKeys[i]].permanent === false){//should be purchaced one offs
                document.getElementById(fleshCrafts[fleshKeys[i]].callString + "OneOffs").style.display='none'; 
             }else if(fleshCrafts[fleshKeys[i]].unlocked === true && fleshCrafts[fleshKeys[i]].purchased === false){//unlocked for vision buy
                    document.getElementById(fleshCrafts[fleshKeys[i]].callString + "Lock").style.display='block';
                document.getElementById(fleshCrafts[fleshKeys[i]].callString + "Wrap").style.display='none'; 
            }
        }
    }
    let storedTome = localStorage.getItem('savedTome');
    if (storedTome) {
        tomeCrafts = JSON.parse(storedTome);
        for(i=0;i<tomeKeys.length;i++){
            if(tomeCrafts[tomeKeys[i]].unlocked === true && tomeCrafts[tomeKeys[i]].purchased === true &&  tomeCrafts[tomeKeys[i]].permanent === true){//permanent and purchased
                document.getElementById(tomeCrafts[tomeKeys[i]].callString + "Wrap").style.display='block';
                if(tomeCrafts[tomeKeys[i]].unlockText){
                    document.getElementById(tomeCrafts[tomeKeys[i]].callString + "Lock").style.display='none';    
                }
            }else if(tomeCrafts[tomeKeys[i]].unlocked === true && tomeCrafts[tomeKeys[i]].purchased === true&&  tomeCrafts[tomeKeys[i]].permanent === false){//should be purchaced one offs
                document.getElementById(tomeCrafts[tomeKeys[i]].callString + "OneOffs").style.display='none'; 
             }else if(tomeCrafts[tomeKeys[i]].unlocked === true && tomeCrafts[tomeKeys[i]].purchased === false){//unlocked for vision buy
                    document.getElementById(tomeCrafts[tomeKeys[i]].callString + "Lock").style.display='block';
                document.getElementById(tomeCrafts[tomeKeys[i]].callString + "Wrap").style.display='none'; 
            }
        }
        document.getElementById('pages').innerHTML = Math.floor(vault.tomes.pageCounter);
        document.getElementById('ordainCost').innerHTML = Math.floor(tomeCrafts.ordain.cost);
    }
                	//=========================================
	//  Expeditions
	//=========================================
    let storedWorld = localStorage.getItem("savedWorld"); //world
    if (storedWorld) {
        world = JSON.parse(storedWorld); //replace 
        //update dom
        for(i=0;i<worldKeys.length;i++){
            if(world[worldKeys[i]].unlocked === true){
                document.getElementById(worldKeys[i] + "Wrap").style.display='block';
            }
            if(world[worldKeys[i]].purchased === true){
                document.getElementById(worldKeys[i] + 'Desc').innerHTML= world[worldKeys[i]].description2[0];
                document.getElementById(worldKeys[i] + 'Cost').innerHTML= world[worldKeys[i]].cost;
                document.getElementById(worldKeys[i] + 'Benefit').innerHTML = world[worldKeys[i]].description2[2];
                document.getElementById(worldKeys[i] + 'Wrap').style.backgroundColor='grey';
            }
        };
    } else {
    console.log("world missing.");
    }

    
    let storedDreamEx = localStorage.getItem("savedDreamEx"); //dream ex
    if (storedDreamEx) {
        dreamEx = JSON.parse(storedDreamEx); //replace 
        //update dom
        if(dreamEx.pillarOfFlame.dreamUnlocked === true){
            document.getElementById('dreamEx').style.display='flex';
        }
        if(dreamEx.pillarOfFlame.purchased === true){
            document.getElementById('dreamChosen').style.display='block';
            document.getElementById('dreamDropBtn').style.display='block';
            document.getElementById('mindAloneChoice').style.display='block';
            document.getElementById('lighthouseChoice').style.display='block';
        }
        for(i=0;i<dreamExKeys.length;i++){
            if(dreamEx[dreamExKeys[i]].unlocked === true && dreamEx[dreamExKeys[i]].purchased === false){
                document.getElementById(dreamExKeys[i] + "Wrap").style.display='block';
            }
        };
    } else {
    console.log("dream ex missing.");
    }
                    	//=========================================
	//  Sacrarium
	//=========================================
    let storedGods = localStorage.getItem("savedGods"); 
    if (storedGods) {
        gods = JSON.parse(storedGods); //replace gods
        //update dom
        for(i=0;i<godKeys.length;i++){
            if(gods[godKeys[i]].unlocked === true && gods[godKeys[i]].purchased === false){
                document.getElementById(godKeys[i] + "Wrap").style.display='block';
            }
        };
    } else {
    console.log("gods missing.");
    }
    let storedRelics = localStorage.getItem("savedRelics"); 
    if (storedRelics) {
        relics = JSON.parse(storedRelics); //replace relics
        //update dom
        for(i=0;i<relicKeys.length;i++){
            if(relics[relicKeys[i]].unlocked === true){
                document.getElementById(relicKeys[i] + "Wrap").style.display='block';
            }
        };
    } else {
    console.log("relics missing.");
    }
    //change cost updates in dom
   closeEventBox();
   timeOn();
};
