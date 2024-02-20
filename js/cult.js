                                                        //=========================================
                                                                                               // The Cult
                                                        //=========================================
let cult = {
        faithful:{
            string: 'Faithful',
            description:['Men, women who have heard the call. Maintaining their numbers is critical to your success.'],
            current: 0,
            ticCounter: 0,
            ticsNeeded: 3,
            outMultipliers: [1.0, 1.0, 1.0],//love, terror, gold
            unlocked: false
        },
        chanters:{
            string: 'Chanters',
            description: ['Given scraps of writing from your Book, these cult will chant in your name, focusing the thoughts of the Faithful toward Love.'],
            current: 0,
            ticCounter: 0,
            ticsNeeded: 4,
            outMultiplier: 1.0,
            unlocked: false,
            cost: ['charm', 10]
        },
        sentinals:{
            string: 'Sentinals',
            cost: ['charm', 25],
            description:['Gelded and trepanned, Sentinals obey your will alone and cause Terror in the Faithful.'],
            current: 0,
            ticCounter: 0,
            ticsNeeded: 4,
            outMultiplier: 1.0,
            unlocked: false,
            unlock: ['charm', 50]
        },
        priests:{
            string: 'Priests',
            cost: ['tomes', 1],
            description: ['Dedicated followers gifted a dangeous Tome, they can lure in the Innnocent and convert them into more Faithful for you.'],
            current: 0,
            ticCounter: 0,
            ticsNeeded: 22,
            outMultiplier: 1.0,
            unlocked: false
        },
        innocents:{
            string: 'Innocents',
            description: ['Spouses, children, and former loved ones, they are offered up unto you by the faithful. They may be turned to your cause or sacrificed to it.'],
            current: 0,
            chance: 10,
            unlocked: false
        },
        insane:{
            string: 'The Insane',
            description: ['A regrettable penalty for your own suffering sanity is the loss of your followers into Madness. While you can recover, they never will and are only useful as sacrifice to the Drak Gods.'],
            current: 0,
            unlocked: false,
            unlock: ['madness', 50]
        },
        hybrids:{
            string: 'Hybrids',
            cost: ['charm', 100],
            description: ['Hybrids are loyal and more useful than cult but require bargaining with the Deep Ones and time to raise.'],
            current: 0,
            unlocked: false,
            unlock: ['charm', 500]
        },
        deepOnes:{
            string: 'Deep Ones',
            cost: ['radiance', 10],
            description: ['Allies, but perhaps they only bide their time. Deep ones inspire terror but bring gold and trinkets from a lost time.'],
            current: 0,
            unlocked: false,
            unlock: ['vision', 1000]
        }
};

                                                //=========================================
                                                                                // The Vault
                                                //=========================================
        
let vault = {
        love:{// love from faithful burn love to force them to unspeakable acts
            callString: 'love',
            string: 'Love',
            description: ['Idolatry, like true Love, is a potent tool in your hands.'],
            current: 0,
            unlocked: true,
            unlock: ['vision', 10]
        },
        terror:{
            callString: 'terror',
            string: 'Terror',
            description: ['While Love helps, Terror is essential for Control.'],
            current: 0,
            unlocked: true,
            unlock: ['vision', 10]
        },
        gold:{ //spend as charm bonus or for one offs
            callString: 'gold',
            string: 'Gold',
            description: ['Gold always has its purpose.'],
            current: 0,
            unlocked: true,
            unlock: ['vision', 10]
        },
        flesh:{//feed to deep ones, build servitors
            callString: 'flesh',
            string: 'Flesh',
            description: ['Pallid, eyeless, and grasping, the Flesh can be used to create Abominations or Traded to the dark beings on your doorstep.'],
            current: 0,
            unlocked: false
        },
        tomes:{
            callString: 'tomes',
            string: 'Tome',
            description: ['Found in forgotten places, these can be given to the Faithful to convert them into Priests.'],
            current: 0,
            unlocked: false,
            unlock: ['vision', 300],
            pageCounter: 0,
            pagesNeeded: 44,
            pageMultiplier: 4
        },
        ichor:{//trade with deep ones for gold
            callString: 'ichor',
            string: 'Ichor',
            description: ['Something grows now, under the earth. Its secretions can be milked.'],
            current: 0,
            unlocked: false,
            unlock: ['vision', 100]
        },
        keys:{ //need a key to unlock a gate
            callString: 'keys',
            string: 'Key',
            description: ['A key is a simple thing. What it unlocks could rip this world apart.'],
            current: 0,
            unlocked: false,
            unlock: ['vision', 1000]
        },
        gates:{ //each gate opens the way for an outer god
            callString: 'gates',
            string: 'Gate',
            description: ['Each larger than the last, Gates must be built from... must be built to open the way.'],
            current: 0,
            unlocked: false,
            unlock: ['radiance', 100]
        }
};
let cultKeys = Object.keys(cult);
let vaultKeys = Object.keys(vault);

    	//=========================================
	// Build Cult and Vault
	//=========================================
        
function cultLoad(){   
    for(i=0;i<cultKeys.length; i++){
    document.getElementById('left').innerHTML +=
            "<div class='cultWraps' id='" + cultKeys[i] +"Wrap'><div class='ids'>" + cult[cultKeys[i]].string + "</div><div class='number' id='" + cultKeys[i] + "'>" + cult[cultKeys[i]].current + "</div>";  
    }
    for(i=0;i<vaultKeys.length; i++){
        let temp =  vaultKeys[i];
    document.getElementById('vault').innerHTML +=
            "<button class='vaultWraps' id='" + temp + "Wrap'>" +
            "<img class='vaultPng' src='images/" + temp + ".png' alt='?'/>" +
            "<span class='vaultText'>" + vault[vaultKeys[i]].string + "</span>" +
            "<span class='vaultNum' id='" +temp + "'>" + vault[vaultKeys[i]].current + "</span>" +
            "</button>";
    }
        document.getElementById('faithfulWrap').style.display='block';
        document.getElementById('loveWrap').style.display='block';
        document.getElementById('terrorWrap').style.display='block';
        document.getElementById('goldWrap').style.display='block';
};
cultLoad();

                                                        //=========================================
                                                        //                                      Crafts 
                                                        //=========================================
                                                        //Locations: upgrade faithful output and capacity
//Current location should be displayed left side above cult
//Grove by Midnight - free desc ‘Meetings here are dangerous and short lived.’
//Love- School Basement  desc ‘A more private place to meet, ‘gifted’ by the Faithful -increased Love
//Love Lodge Hall desc ‘Proof of brotherly Love is an open bar. -increased Love and Gold
//Gold- Isolated Mansion desc ‘Impressive as well as hidden from prying eyes. -increased Gold, unlocks breeding pits
//Terror -Reinforced Compound ‘convince the faithful that their lives depend on it.-increased Terror
//Terror -Nuclear Bunker ‘We must go Deeper…-increased Terror
//Gold- Private Island  ‘Finally we can build freely -increased Love, Terror

//=========================
//                                      LoveCrafts
//=========================
let loveCrafts = {
    adoration:{
        callString: 'adoration',
        string: 'Adoration',
        description:['By their Love, you are made more Charming. Cost: Love '],
        func: adoration,  
        cost: 40,
        benefit: 4,
        unlocked: true,
        purchased: true,
        permanent: true
    },    
    terrorize:{
        callString: 'terrorize',
        string: 'Terrorize',
        description: ['Convert your followers Love into Terror. Upset the balance too much and they will abandon you. Cost: Love '],
        func: terrorize,  
        cost: 2,
        benefit: 1,
        unlocked: true,
        purchased: true,
        permanent: true
    },    
    requestGold:{
        callString: 'requestGold',
        string: 'Request Gold',
        description: ['While the Faithful will provide you with Gold and trinkets, it does not endear you to them. Cost: Love '],
        func: requestGold,  
        cost: 2,
        benefit: 1,
        unlocked: true,
        purchased: true,
        permanent: true
    },
    convertChanter:{
        callString: 'convertChanter',
        string: 'Chanter Subjugation',
        description: ['Their endless Chanting enhances the Love of the Faithful.', 'Costs: Faithful 1, Love ', 'Benefits: Idle Charm and Love'],
        func: cChant,
        comment: 'Almost as essential as the Faithful themselves. ( idle Charm and Love)',
        unlockText: 'Chanters?',
        lockCost: 'Vision: 22',
        unlockCost: 22,
        cost: 4,
        benefit: 1,
        multiplier: 8,
        unlocked: true,
        purchased: false,
        permanent: true
    }
};
//===============================
//                                      LoveCrafts Functions
//===============================
function adoration(){
    if(vault.love.current >= loveCrafts.adoration.cost){
        numberChange('vault', 'love', -loveCrafts.adoration.cost, '#FF559D', 'red');
        numberChange('stats', 'charm',  loveCrafts.adoration.benefit, '#FFFF00', 'red');
    }
}
function terrorize(){
    if(vault.love.current >= loveCrafts.terrorize.cost){
        numberChange('vault', 'love', -loveCrafts.terrorize.cost, '#FF559D', 'red');
        numberChange('vault', 'terror', loveCrafts.terrorize.benefit, 'red', 'blue');
    }    
}
function requestGold(){
        if(vault.love.current >= loveCrafts.requestGold.cost){
        numberChange('vault', 'love', -loveCrafts.requestGold.cost, '#FF559D', 'red');
        numberChange('vault', 'gold', loveCrafts.requestGold.benefit, 'yellow', 'red');
    }  
}
function cChant(){
    if(vault.love.current >=  loveCrafts.convertChanter.cost && cult.faithful.current >= loveCrafts.convertChanter.benefit){
        if(cult.chanters.unlocked === false){
            cult.chanters.unlocked = true;
            document.getElementById('chantersWrap').style.display= 'block';
            comment('What a lovely voice.', 'lightgreen', 'ch');
        }else{
            comment('Another joins the choir.');
        }
        numberChange('vault', 'love', -loveCrafts.convertChanter.cost, '#FF559D', 'red');
        numberChange('cult', 'faithful', -loveCrafts.convertChanter.benefit, 'green', 'red');
        numberChange('cult', 'chanters', loveCrafts.convertChanter.benefit, 'green', 'red');
        loveCrafts.convertChanter.cost =  Math.max(cult.chanters.current * loveCrafts.convertChanter.multiplier, 4);
        document.getElementById('convertChanterCost').innerHTML =  loveCrafts.convertChanter.cost;
        actions.preach.cost = Math.max((cult.faithful.current * actions.preach.multiplier), 4);
        document.getElementById('preachCost').innerHTML = actions.preach.cost;
        document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
    }
};

//========================
//                                      Terror
//========================
let terrorCrafts = {
    mesmerize:{
        callString: 'mesmerize',
        string: 'Mesmerize',
        description: ['One can force a semblance of Love.', ' Cost: Terror '],
        func: mesmerize,  
        cost: 2,
        benefit: 1,
        unlocked: true,
        purchased: true,
        permanent: true
    },    
    demandGold:{
        callString: 'demandGold',
        string: 'Demand Gold',
        description: ['Exhort the Faithful to find wealth at any cost.', ' Cost: Terror '],
        func: demandGold,  
        cost: 2,
        benefit: 1,
        unlocked: true,
        purchased: true,
        permanent: true
    },
    demandFlesh:{
        callString: 'demandFlesh',
        string: 'Demand Flesh',
        description: ['Exhort the Faithful to find bodies at any cost.', ' Love -', 'Flesh +4','Terror Minimum: 444'],
        func: demandFlesh,  
        cost: 88,
        benefit: 4,
        unlocked: false,
        purchased: false,
        permanent: true
    },
    convertSentinal:{
        callString: 'convertSentinal',
        string: 'Enthrall Sentinal',
        description: ['Created through trepanning, gelding and occult ritual, their existence inspires fear in the faithful.', ' Cost: Faithful 1, Love '],
        comment: 'Just Man&#39;s inhumanity to Man I suppose. (idle Terror)',
        func: cSentinal,
        unlockText: 'Sentinals?',
        lockCost: 'Vision: 44',
        unlockCost: 44,
        cost: 16,
        benefit: 1,
        multiplier: 22,
        unlocked: true,
        purchased: false,
        permanent: true
    },
    sacrifice:{
        callString: 'sacrifice',
        string: 'Sacrifice Innocents',
        description:['Through a ritual of blood and madness, an innocent life is spent.', 'Cost: 1 Innocent ', 'Benefits: Terror, Flesh and Radiance', ' Terror Minimum: 44 '],
        func: sacrifice, 
        terrorMin: 10,
        cost: '',
        terrorMultiplier: 1,
        type: 'innocents',
        unlocked: false,
        purchased: false,
        permanent: true
    }
};
//================================
//                                     TerrorCrafts Functions
//================================
function mesmerize(){
        if(vault.terror.current >= terrorCrafts.mesmerize.cost){
        numberChange('vault', 'terror', -terrorCrafts.mesmerize.cost, 'red', 'blue');
        numberChange('vault', 'love', terrorCrafts.mesmerize.benefit, '#FF559D', 'red');
    }
};
function demandGold(){
        if(vault.terror.current >= terrorCrafts.demandGold.cost){
        numberChange('vault', 'terror', -terrorCrafts.mesmerize.cost, 'red', 'blue');
        numberChange('vault', 'gold', terrorCrafts.mesmerize.benefit, 'yellow', 'red');
    }  
}
function cSentinal(){
    if(vault.love.current >=  terrorCrafts.convertSentinal.cost && cult.faithful.current >= terrorCrafts.convertSentinal.benefit){
        if(cult.sentinals.unlocked === false){
            cult.sentinals.unlocked = true;
            comment('Perhaps you could save the leftovers for a soup?', 'lightred', 'sent');
            document.getElementById('sentinalsWrap').style.display= 'block';
        }else{
            comment('Forever vigilant.');
        }
        numberChange('vault', 'love', -terrorCrafts.convertSentinal.cost, '#FF559D', 'red');
        numberChange('cult', 'faithful', -terrorCrafts.convertSentinal.benefit, 'green', 'red');
        numberChange('cult', 'sentinals', terrorCrafts.convertSentinal.benefit, 'green', 'red');
        terrorCrafts.convertSentinal.cost = Math.max(cult.sentinals.current * terrorCrafts.convertSentinal.multiplier, 22);
        document.getElementById('convertSentinalcost').innerHTML =  terrorCrafts.convertSentinal.cost;
        actions.preach.cost = Math.max((cult.faithful.current * actions.preach.multiplier), 4);
        document.getElementById('preachCost').innerHTML =  actions.preach.cost;
        document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;

    }
}
  	//=======
	// Sacrifice
	//=======
        
let sacrificeTypes = {
    innocents: {
        string: 'Smother an Innocent',
        description: ['Through a ritual of blood and madness, an innocent life is spent. ', ' Cost: 1 Innocent', ' Benefits: Terror, Flesh and Radiance', ' Terror Minimum: 44'],
        unlocked: true,
        terrorMin: 44
    },  
    faithful: {
        string: 'Drown the Faithful',
        description: ['The greater the sacrifice, the greater the reward.', 'Cost: 1 Faithful', ' Benefits: Terror, Flesh and Radiance', ' Terror minimum: 48 '],
        unlocked: true,
        terrorMin: 48
    },  
    chanters: {
        string: "Slit a Chanter's Throat",
        description: ['Silence is Golden.', ' Cost: 1 Chanter', ' Benefits: Terror, Flesh and Radiance', ' Terror Minimum: 64'],
        unlocked: true,
        terrorMin: 64
    },  
    sentinals: {
        string: 'Retire a Sentinal',
        description: ['End its suffering.', ' Cost: 1 Sentinal', ' Benefits: Flesh and Radiance', ' Terror Minimum: 84'],
        unlocked: true,
        terrorMin: 84
    },  
    insane: {
        string: 'Cleanse the Insane',
        description: ['Probably better this way.', 'Cost: 1 Insane', 'Benefits: Terror, Flesh and Radiance', 'Terror Minimum: 22 '],
        unlocked: true,
        terrorMin: 22
    }
};
function sacrifice(){
    let type = terrorCrafts.sacrifice.type;   
    if((cult[type].current >= 1) && (vault.terror.current >=  sacrificeTypes[type].terrorMin  ) ){
        if(type === 'innocents'){
            numberChange('cult', 'innocents', -1, 'green', 'red');
            numberChange('stats', 'radiance', 1, 'blue', 'red');
            numberChange('vault', 'terror', (22 * terrorCrafts.sacrifice.terrorMultiplier), 'red', 'blue');
            comment("so innocent (Terror " +(22 * terrorCrafts.sacrifice.terrorMultiplier) +")", 'red');
        }else if (type === 'faithful'){
            numberChange('cult', 'faithful', -1, 'green', 'red');
            numberChange('stats', 'radiance', 2, 'blue', 'red');
            numberChange('vault', 'terror', (88 * terrorCrafts.sacrifice.terrorMultiplier), 'red', 'blue');
            comment("too close for comfort (Terror " + (88 * terrorCrafts.sacrifice.terrorMultiplier) +")", 'red');
            actions.preach.cost = Math.max((cult.faithful.current * actions.preach.multiplier), 4);
            document.getElementById('preachCost').innerHTML = actions.preach.cost;
            document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
        }else if (type === 'chanters'){
            numberChange('cult', 'chanters', -1, 'green', 'red');
            numberChange('stats', 'radiance', 4, 'blue', 'red');
            numberChange('vault', 'terror', (44 * terrorCrafts.sacrifice.terrorMultiplier), 'red', 'blue');
            comment("silence is golden (Terror " + (44 * terrorCrafts.sacrifice.terrorMultiplier) +")", 'red');
            loveCrafts.convertChanter.cost =  Math.max(cult.chanters.current * loveCrafts.convertChanter.multiplier, 4);
            document.getElementById('convertChanterCost').innerHTML =  loveCrafts.convertChanter.cost;
        }else if (type === 'sentinals'){
            numberChange('cult', 'sentinals', -1, 'red', 'red');
            numberChange('stats', 'radiance', 1, 'blue', 'red');
            numberChange('vault', 'terror',  -22, 'red', 'blue');
            comment("everyone seems ok with this (Terror -" + -22 +")", 'green');
            terrorCrafts.convertSentinal.cost = Math.max(cult.sentinals.current * terrorCrafts.convertSentinal.multiplier, 22);
            document.getElementById('convertSentinalcost').innerHTML =  terrorCrafts.convertSentinal.cost;
        }else if (type === 'insane'){
            numberChange('cult', 'insane', -1, 'green', 'red');
            numberChange('stats', 'radiance', 2, 'blue', 'red');
            numberChange('vault', 'terror', (22 * terrorCrafts.sacrifice.terrorMultiplier), 'red', 'blue');
            comment("mercy killing (Terror " + (22 * terrorCrafts.sacrifice.terrorMultiplier) +")", 'red');
        }else{
            window.console.log('?');
        };
        numberChange('vault', 'flesh', 1, 'red', 'grey');
        }
};
let sacrificeKeys = Object.keys(sacrificeTypes);
// Toggle the dropdown menu/
// / Helper function to find sac buttons
function isDescendant(elements, target) {
  return Array.from(elements).some(element => element.contains(target));
}
function showSacrificeTypes() {
    document.addEventListener('mouseup', function mouseupHandler(event) {
        if (!sacDropBtn.contains(event.target) && !isDescendant(sacrificeTypes, event.target)) {
            // Clicked outside the menu and button, close the menu
            hideSacrificeTypes();
            // Remove the temporary mouseup event listener
            document.removeEventListener('mouseup', mouseupHandler);
        };
    });
    var temp = document.getElementById("sacrificeTypes");
    temp.style.display = 'block';
}
function hideSacrificeTypes() {
    var temp = document.getElementById("sacrificeTypes");
    temp.style.display = 'none';
}
function sacrificeType(typeButton) {
    type = typeButton.slice(0, -3);
     let temp = sacrificeTypes[type].string;
    document.getElementById("sacrifice").innerHTML = temp;
    terrorCrafts.sacrifice.type = type;
    document.getElementById("sacrificeDesc").innerHTML = sacrificeTypes[type].description[0];
    document.getElementById("sacrificeTerror").innerHTML = sacrificeTypes[type].description[3];
    document.getElementById("sacrificecost").innerHTML = sacrificeTypes[type].description[1];
    document.getElementById("sacrificeBenefit").innerHTML = sacrificeTypes[type].description[2];
    hideSacrificeTypes();
}
//make the sacrifice buttons
function makeSacrificeChoices(){ //calling in crafts creation
    var sacrifice = document.getElementById("sacrificeWrap");
    var btn = document.createElement("button");
    btn.id = "sacDropBtn";
    btn.innerHTML  = "&#9662;";
    sacrifice.insertAdjacentElement("afterend", btn);
    var typesBox = document.createElement("div"); //div which holds sac options
    typesBox.id = "sacrificeTypes";
    var btnloc = document.getElementById("sacDropBtn");
    btnloc.insertAdjacentElement('afterend', typesBox);
    var typeBox = document.getElementById("sacrificeTypes");
    for(i=0;i<sacrificeKeys.length;i++){
        var temp = document.createElement('button');
        temp.classList.add("sacrificeType");
        temp.id = sacrificeKeys[i] + "Sac";
        temp.innerHTML = sacrificeTypes[sacrificeKeys[i]].string;
        typeBox.appendChild(temp);
        }
    };
function demandFlesh(){
    
}
//======================
//                                      Gold
//======================
let goldCrafts = {
    gifts:{
        callString: 'gifts',
        string: 'Lavish Gifts',
        description: ['Spend Gold to please the Faithful.', 'Cost: Gold '],
        func: gifts,  
        cost: 2,
        benefit: 1,
        unlocked: true,
        purchased: true,
        permanent: true
    },
    oakAltar:{
        callString: 'oakAltar',
        string: 'Oaken Altar',
        description: ['The massive altar hides Rhan somewhat. (reduced Sacrifice Terror)', 'Gold:'],
        func: oakAltar,  
        cost: 444,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    tithe:{
        callString: 'tithe',
        string: 'Tithe Toggle',
        description: ['Tithing is a time honored tradition.'],
        unlockText: 'Tithing?',
        lockCost: 'Vision: 88 ',
        func: titheToggle,
        timeCounter: [0,1.6],
        toggle: false,
        comment: 'Everyone hates the tax man. (idle conversion of Love into Gold)',
        unlockCost: 88,
        unlocked: true,
        purchased: false,
        permanent: true
    },
    marbleAltar:{
        callString: 'marbleAltar',
        string: 'Marble Altar',
        description: ['Functionally the same altar, but more impressive.(increased Gold from the Faithful)', 'Cost: Gold '],
        func: marbleAltar,  
        cost: 888,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    obsidianAltar:{
        callString: 'obsidianAltar',
        string: 'Obsidian Altar',
        description: ['Functionally the same altar, but more Terrifying.(increased Terror from the Faithful)', 'Cost: Gold '],
        func: obsidianAltar,  
        cost: 4444,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    ivory:{
        callString: 'ivory',
        string: 'Ivory Finish',
        description: ['This alabaster altar stone makes the sacrifice both more impressive and terrifying. (increased Gold from the Faithful, Terror from Sacrifices)', 'Cost: Gold '],
        func: ivory,  
        cost: 888,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    expedition:{
        callString: 'expedition',
        string: 'Expeditions?',
        description: ['Preparations are essential where you must travel.', 'Cost: Gold 22'],
        func: expedition,
        unlocked: true,
        purchased: false,
        permanent: false
    }
};
//=======================
//                                     GoldCrafts
//=======================
        
function gifts(){
        if(vault.gold.current >= goldCrafts.gifts.cost){
        numberChange('vault', 'gold', -1, 'yellow', 'red');
        numberChange('vault', 'love', 1, 'pink', 'red');
    }
}
function oakAltar(){
    if(vault.gold.current >= 444){
        numberChange('vault', 'gold', -444, 'yellow', 'red');
        goldCrafts.oakAltar.purchased = true;
        flashFade('oakAltarOneOffs');
        goldCrafts.marbleAltar.unlocked = true;
        setTimeout(() => {document.getElementById('marbleAltarOneOffs').style.display='block';}, 1500);
        terrorCrafts.sacrifice.terrorMultiplier = (terrorCrafts.sacrifice.terrorMultiplier * 0.75); //terror from sacrifices
        comment('Sacrifice Terror reduced by 25%');
    }
}
function marbleAltar(){ //outMultipliers: [1.0, 1.0, 1.0],//love, terror, gold
    if(vault.gold.current >= 888){
        numberChange('vault', 'gold', -888, 'yellow', 'red');
        flashfade('marbleAltarOneOffs');
        goldCrafts.marbleAltar.purchased = true;
        goldCrafts.obsidianAltar.unlocked = true;        
        setTimeout(() => {document.getElementById('obsidianAltarOneOffs').style.display='block';}, 1500);
        cult.faithful.outMultipliers[2] = 1.4;
        comment('Increased Gold from the Faithful');
    }    
}
function obsidianAltar(){
    if(vault.gold.current >= 888){
        numberChange('vault', 'gold', -888, 'yellow', 'red');
        flashfade('obsidianAltarOneOffs');
        goldCrafts.marbleAltar.purchased = true;
        goldCrafts.obsidianAltar.unlocked = true;        
        //setTimeout(() => {document.getElementById('AltarOneOffs').style.display='block';}, 1500);
        cult.faithful.outMultipliers[1] = 1.4;
        comment('Increased Terror from the Faithful');
    }  
}
function ivory(){
    
}
function expedition(){
    if(vault.gold.current >= 22){
        numberChange('vault', 'gold', -22, 'yellow', 'red');
        document.getElementById('expeditionsTab').style.display = 'block';
        document.getElementById('waxWrap').style.display = 'block';
        document.getElementById('cryptWrap').style.display = 'block';
        document.getElementById('towerWrap').style.display = 'block';
        //document.getElementById('estateWrap').style.display = 'block';
        flashFade('expeditionOneOffs');
        eventBox("images/expedition.jpg", "Far off places...", "Having gathered supplies and weathered maps, you may now set out to find the lost places. (Expeditions unlocked)");
        comment('We must find the hidden places.', 'lightgreen', 'ex');
        flash('expeditionsTab', 'lightgreen', 'white');
        goldCrafts.expedition.purchased = true;
        domUnlocks.expeditions = true;
        world.wax.unlocked = true;
        world.crypt.unlocked = true;
        world.tower.unlocked = true;
        //world.estate.unlocked = true;
    }
}
function titheToggle(){
    if(goldCrafts.tithe.toggle === false){
    goldCrafts.tithe.toggle = true;
    document.getElementById('titheToggle').style.backgroundColor='green';
    }else{
    goldCrafts.tithe.toggle = false;
    document.getElementById('titheToggle').style.backgroundColor='red';
    }
}
function tithe(){
    if(vault.love.current>=20){
        if(goldCrafts.tithe.timeCounter[0] < goldCrafts.tithe.timeCounter[1]){
            goldCrafts.tithe.timeCounter[0]++;
        }else{
            goldCrafts.tithe.timeCounter[0] = 0;
            let delta = vault.love.current/10;
            numberChange('vault', 'love', -Math.floor(delta), 'pink', 'red');
            numberChange('vault', 'gold', Math.floor(delta/2), 'gold', 'red');
        }
    }
}
function addTithe(){//called at crafts creation
    let titheW = document.getElementById('titheWrap');
    const button = document.createElement("button");
    button.textContent = " ";
    button.style.display='none';
    button.id="titheToggle"; // Apply the CSS class for the button
    titheW.appendChild(button);
    }
    
//=======================
//                                      Flesh
//=======================

let fleshCrafts = {
    dreadRevel: {
        callString: 'dreadRevel',
        string: 'Dread Revel',
        description: ['Desensitize the Chosen using a unique set of party guests.',  'Cost: Flesh 4 Love ', 'Benefit: -88 Terror'],
        func: dreadRevel,
        unlockText: 'Revelry?',
        lockCost: 'Vision: 88',
        unlockCost: 88,
        cost: 44,
        unlocked: true,
        purchased: false,
        permanent: true
        
    },
    leatherBinding: {
        callString: 'leatherBinding',
        string: 'Book Binding',
        description: ['For a Tome to be forged, it must be bound in Flesh.', 'Cost: Pages 44 Flesh '],
        unlockText: 'Leather?',
        lockCost: 'Vision: 88',
        unlockCost: 88,
        func: leatherBinding,
        cost: 4,
        unlocked: true,
        purchased: false,
        permanent: true,
        tomeList: ['hsan', 'dzyan', 'dhol', 'kult', 'azat', 'alch', 'eibon', 'damn', 'necr']
    },
    cannibalism : {
        callString: 'cannibalism',
        string: 'Cannibalism',
        description: ['Some hungers go deeper.', 'Cost: Flesh ', 'Benefits: Health and Madness'],
        func: cannibalism,
        cost: 1,
        unlocked: false,
        purchased: false,
        permanent: true
    },
    bone: {
        callString: 'bone',
        string: 'Bone Altar Stone',
        description: ['A finely wrought layer of bone covering the Altar is a terrifying thing to behold. (increases Terror from Faithful and Sacrifice)', 'Cost 88 Flesh'],
        unlockText: 'Vision: ',
        func: bone,
        cost: 4,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    breedingPits: {//grow innocents for flesh
        callString: 'breedingPits',
        string: 'Breeding Pits',
        description: ['Two by two, lead them into pens. (Cost: 2 Innocents Gain: 1000 Terror, slow passive Innocents gain)'],
        func: pits,
        current: 0,
        unlockText: '1+1=3',
        lockCost: 'Vision: 444',
        unlockCost: 444,
        cost: 2,
        benefit: 3,
        terror: 1000,
        unlocked: false,
        purchased: true,
        permanent: true
    },
    deepTrade:{
        callString: 'deepTrade',
        string: 'Trade with Deep Ones.',
        description: ['The need is ever growing. Cost: Flesh '],
        func: deepTrade,
        cost: 1,
        benefit: 100,
        multiplier: 4,
        unlocked: false,
        purchased: false,
        permanent: true
    },
    sculpt:{
        callString: 'sculpt',
        string: 'Sculpture',
        description: ['Create Terrifying Artwork for the Museum.', 'Cost: Flesh ', 'Benefit: Gold 444'],
        comment: 'reminiscent of Geiger...',
        func: sculpt,
        cost: 8,
        benefit: 444,
        unlockText: 'Art?',
        lockCost: 'Vision: 164',
        unlockCost: 164,
        unlocked: true,
        purchased: false,
        permanent: true
    }
};
//===============================
//                                      FleshCrafts Actions
//===============================

function dreadRevel(){
    if(vault.flesh.current >= 4 && vault.love.current >= 44){
        numberChange('vault', 'flesh', -4, 'red', 'red');
        numberChange('vault', 'love', -44, 'pink', 'red');
        let temp = Math.min(vault.terror.current, 88);
        numberChange('vault', 'terror', -temp, 'red', 'red');
    }
}

function getTome() {
  if( fleshCrafts.leatherBinding.tomeList.length === 0) {
    return null;
  }
  const Tome = fleshCrafts.leatherBinding.tomeList[0];
  // Remove the first item from the array
  fleshCrafts.leatherBinding.tomeList.shift();
  return Tome;
}
function leatherBinding(){
    if(vault.flesh.current>= fleshCrafts.leatherBinding.cost && vault.tomes.pageCounter >= vault.tomes.pagesNeeded){
        numberChange('vault', 'flesh', -4, 'red', 'red');
        numberChange('vault', 'tomes', 1, 'blue', 'red');
        fleshCrafts.leatherBinding.cost = fleshCrafts.leatherBinding.cost * 2;
        vault.tomes.pageCounter -= vault.tomes.pagesNeeded;
        vault.tomes.pagesNeeded = vault.tomes.pagesNeeded * 2;
        document.getElementById('pages').innerHTML = Math.floor(vault.tomes.pageCounter);
        document.getElementById('leatherBindingcost').innerHTML = 'Cost: Flesh ' + fleshCrafts.leatherBinding.cost + ' Pages ' + vault.tomes.pagesNeeded;
        const Tome = getTome();
        actionUpgrades.studyTome[Tome].unlocked = true;
        document.getElementById(Tome + "Wrap").style.display='block';
        comment('You have pieced together an entire manuscript. (West tab, Tomes +1', 'blue');
    }
}
function cannibalism(){
    if(vault.flesh.current >=1){
        numberChange('vault', 'flesh', -1, 'red', 'red');
        numberChange('stats', 'madness', 44, 'red', 'blue');
        numberChange('vault', 'terror', 88, 'red', 'green');
        numberChange('stats', 'health', 100, 'blue', 'red');
        numberChange('vault', 'radiance', 1, 'blue', 'red');
        comment('waste not, want not (Madness +44 Terror +88, Health +100, Radiance +1');
    }
}
function bone(){
    
}
function deepTrade(){
    
}
function sculpt(){
    if(vault.flesh.current >=fleshCrafts.sculpt.cost){
        numberChange('vault', 'flesh', -fleshCrafts.sculpt.cost, 'red', 'red');
        numberChange('vault', 'terror', (fleshCrafts.sculpt.cost * 4), 'red', 'blue');
        numberChange('vault', 'gold', fleshCrafts.sculpt.benefit, 'yellow', 'red');
        fleshCrafts.sculpt.cost = Math.floor(fleshCrafts.sculpt.cost * 1.2);
        fleshCrafts.sculpt.benefit = Math.floor(fleshCrafts.sculpt.benefit * 1.2);
        document.getElementById('sculptcost').innerHTML = fleshCrafts.sculpt.cost;
        document.getElementById('sculptBenefit').innerHTML = "Benefit: Gold: " + fleshCrafts.sculpt.benefit;
        comment('stunning use of the media.');
    }
}
function pits(){
    
}
//=======================
//                                      TomeCrafts
//=======================

tomeCrafts = {
    ordain:{
        callString: 'ordain',
        string: 'Ordain Priest',
        description: ['Priests of the old ways can provide many benefits.', 'Cost: Faithful 1, Tome 1, Gold '],
        func: ordain,
        cost: 248,
        costMultiplier: 4,
        unlocked: true,
        purchased: true,
        permanent: true
    }
};
//=============================
//                                      TomeCrafts actions
//=============================
function pages(){
            document.getElementById('tomesBox').innerHTML+=
                "<div id='pagesDiv'>" +
                "<span id='pagesTitle'>Loose Pages: </span>" +
                "<span id='pages'>0</span>" +
                "</div";
}
function ordain(){ 
    if(cult.faithful.current>0 && vault.tomes.current>0 && vault.gold.current >= tomeCrafts.ordain.cost){
        numberChange('cult', 'faithful', -1, 'blue', 'red');
        numberChange('cult', 'priests', 1, 'blue', 'red');
        numberChange('vault', 'gold', -tomeCrafts.ordain.cost, 'yellow', 'red');
        numberChange('vault', 'tomes', -1, 'blue', 'red');
        tomeCrafts.ordain.cost =  tomeCrafts.ordain.cost * 2;
        document.getElementById('ordainCost').innerHTML= tomeCrafts.ordain.cost;
        actions.preach.cost = Math.max((cult.faithful.current * actions.preach.multiplier), 4);
        document.getElementById('preachCost').innerHTML = actions.preach.cost;
        document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
        cult.priests.unlocked = true;
        document.getElementById('priestsWrap').style.display='block';
        comment('So much easier this way');
    }
};

                                                                                //=========================================
                                                                                //                                      Build Crafts
                                                                                //=========================================
function unlockedAtStart(){
    document.getElementById('convertChanterLock').style.display='block';
    document.getElementById('convertSentinalLock').style.display='block';
    document.getElementById('titheLock').style.display='block';
    document.getElementById('expeditionOneOffs').style.display='block';
    document.getElementById('dreadRevelLock').style.display='block';
    document.getElementById('leatherBindingLock').style.display='block';
    document.getElementById('deepTradeWrap').style.display='none';
} 
 
let craftStringKeys = ['loveCrafts', 'terrorCrafts', 'goldCrafts', 'fleshCrafts', 'tomeCrafts'];
let craftTypeKeys = [loveCrafts, terrorCrafts, goldCrafts, fleshCrafts, tomeCrafts];
    let loveKeys = Object.keys(loveCrafts);
    let terrorKeys = Object.keys(terrorCrafts);
    let goldKeys = Object.keys(goldCrafts);
    let fleshKeys = Object.keys(fleshCrafts);
    let tomeKeys = Object.keys(tomeCrafts);
let craftKeys = [loveKeys, terrorKeys, goldKeys, fleshKeys, tomeKeys];
function buildCraftBoxes(callString, craft){
    let item = vault[callString];
    document.getElementById('right').innerHTML += 
            "<div class='craftBox' id='" + callString +"Box' ><h2 class='craftTitles'>" + item.string + " Crafts</h2></div>";
    if(item.string === 'Tome'){//adding pages counter
        pages();
    }
    let craftKeys = Object.keys(craft);
    for(let i=0; i<craftKeys.length; i++){
        if(craft[craftKeys[i]].permanent === true){
            document.getElementById(callString + "Box").innerHTML += 
                "<button class='craftWraps' id= '" +craftKeys[i] + "Wrap'>" +
                "<span class='craftLabels'  id= '" +craftKeys[i] + "'>" + craft[craftKeys[i]].string + "</span>" +
                "</button>";
                if(craft[craftKeys[i]].purchased === false || craft[craftKeys[i]].unlocked === false){
                    document.getElementById(craftKeys[i] + "Wrap").style.display='none';
                }
        }
        if(craft[craftKeys[i]].unlockText && craft[craftKeys[i]].permanent === true){
           document.getElementById(callString + "Box").innerHTML += 
                    "<button class='craftLocks' id= '" +craftKeys[i] + "Lock'>" +
                    "<span class='unlockText'>" + craft[craftKeys[i]].unlockText + "</span>" +
                    "</button>";      
            if(craft[craftKeys[i]].unlocked === true && craft[craftKeys[i]].purchased === false){
                document.getElementById(craftKeys[i] + "Lock").style.display='block';
                document.getElementById(craftKeys[i] + "Wrap").style.display='none';
            }
        }else if(craft[craftKeys[i]].permanent === false){
                       document.getElementById(callString + "Box").innerHTML += 
                    "<button class='craftOneOffs' id= '" +craftKeys[i] + "OneOffs'>" +
                    "<span class='craftLabels'>" + craft[craftKeys[i]].string + "</span>" +
                    "</button>";     
        }
    };
};
buildCraftBoxes('love', loveCrafts);
buildCraftBoxes('terror', terrorCrafts);
buildCraftBoxes('gold', goldCrafts);
buildCraftBoxes('flesh', fleshCrafts);
buildCraftBoxes('tomes', tomeCrafts);
makeSacrificeChoices();
addTithe();
unlockedAtStart();
