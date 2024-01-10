                                                        //=========================================
                                                                                               // The Cult
                                                        //=========================================
let cult = {
        faithful:{
            string: 'Faithful',
            description:['Men, women who have heard the call. Maintaining their numbers is critical to your success.'],
            current: 0,
            ticCounter: 0,
            ticsNeeded: 16,
            outMultipliers: [1.0, 1.0, 1.0],//love, terror, gold
            unlocked: false
        },
        chanters:{
            string: 'Chanters',
            description: ['Given scraps of writing from your Book, these cult will chant in your name, focusing the thoughts of the Faithful toward Love.'],
            current: 0,
            ticCounter: 0,
            ticsNeeded: 22,
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
            ticsNeeded: 44,
            outMultiplier: 1.0,
            unlocked: false,
            unlock: ['charm', 50]
        },
        priests:{
            string: 'Priests',
            cost: ['tomes', 1],
            description: ['Dedicated followers gifted a dangeous Tome, they can turn the efforts of the Faithful toward a singular purpose.'],
            current: 0,
            ticCounter: 0,
            ticsNeeded: 444,
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
            string: 'Tomes',
            description: ['Found in forgotten places, these can be given to the Faithful to convert them into Priests.'],
            current: 0,
            unlocked: false,
            unlock: ['vision', 300],
            pageCounter: 500,
            pagesNeeded: 44,
            pagemultiplier: 2
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
            string: 'Keys',
            description: ['A key is a simple thing. What it unlocks could rip this world apart.'],
            current: 0,
            unlocked: false,
            unlock: ['vision', 1000]
        },
        gates:{ //each gate opens the way for an outer god
            callString: 'gates',
            string: 'Gates',
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
            "<div class='cultWraps' id='" + cultKeys[i] +"Wrap'><div class='ids'>" + cult[cultKeys[i]]['string'] + "</div><div class='number' id='" + cultKeys[i] + "'>" + cult[cultKeys[i]]['current'] + "</div>";  
    }
    for(i=0;i<vaultKeys.length; i++){
        let temp =  vaultKeys[i];
    document.getElementById('vault').innerHTML +=
            "<button class='vaultWraps' id='" + temp + "Wrap'>" +
            "<img class='vaultPng' src='images/" + temp + ".png' alt='?'/>" +
            "<span class='vaultText'>" + vault[vaultKeys[i]]['string'] + "</span>" +
            "<span class='vaultNum' id='" +temp + "'>" + vault[vaultKeys[i]]['current'] + "</span>" +
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
        lockText: 'Vision: 22',
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
    if(vault['love']['current'] >= loveCrafts['adoration']['cost']){
        vault['love']['current'] -= loveCrafts['adoration']['cost'];
        stats['charm']['current'] +=  loveCrafts['adoration']['benefit'];
        document.getElementById('charm').innerHTML =  Math.floor(stats['charm']['current']);
        document.getElementById('love').innerHTML =  Math.floor(vault['love']['current']);
    }
}
function terrorize(){
    if(vault['love']['current'] >= loveCrafts['terrorize']['cost']){
        vault['love']['current'] -= loveCrafts['terrorize']['cost'];
        vault['terror']['current'] += loveCrafts['terrorize']['benefit'];
        document.getElementById('love').innerHTML =  Math.floor(vault['love']['current']);
        document.getElementById('terror').innerHTML =  Math.floor(vault['terror']['current']);
    }    
}
function requestGold(){
        if(vault['love']['current'] >= loveCrafts['requestGold']['cost']){
        vault['love']['current'] -= loveCrafts['requestGold']['cost'];
        vault['gold']['current'] += loveCrafts['requestGold']['benefit'];
        document.getElementById('love').innerHTML =  Math.floor(vault['love']['current']);
        document.getElementById('gold').innerHTML =  Math.floor(vault['gold']['current']);
    }  
}
function cChant(){
    if(vault['love']['current'] >=  loveCrafts['convertChanter']['cost'] && cult['faithful']['current'] >= loveCrafts['convertChanter']['benefit']){
        if(cult.chanters.unlocked === false){
            cult.chanters.unlocked = true;
            document.getElementById('chantersWrap').style.display= 'block';
            comment('What a lovely voice.', 'lightgreen', 'ch');
        }else{
            comment('Another joins the choir.');
        }
        cult['faithful']['current'] -= loveCrafts['convertChanter']['benefit'];
        cult['chanters']['current'] += loveCrafts['convertChanter']['benefit'];
        vault['love']['current'] -=  loveCrafts['convertChanter']['cost'];
        document.getElementById('love').innerHTML =  Math.floor(vault['love']['current']);
        document.getElementById('faithful').innerHTML =  cult['faithful']['current'];
        document.getElementById('chanters').innerHTML =   cult['chanters']['current'];
        loveCrafts.convertChanter.cost =  Math.max(cult['chanters']['current'] * loveCrafts.convertChanter.multiplier, 4);
        document.getElementById('convertChanterCost').innerHTML =  loveCrafts['convertChanter']['cost'];
        actions.preach.cost = Math.max((cult['faithful']['current'] * actions.preach.multiplier), 4);
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
        description: ['Created through trepanning, gelding and occult ritual, their existence inspires fear in the faithful.', ' Cost: Faithful 1, Love -'],
        comment: 'Just Man&#39;s inhumanity to Man I suppose. (idle Terror)',
        func: cSentinal,
        lockText: 'Vision: 44',
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
    window.console.log('mez');
        if(vault['terror']['current'] >= terrorCrafts['mesmerize']['cost']){
        vault['terror']['current'] -= terrorCrafts['mesmerize']['cost'];
        vault['love']['current'] += terrorCrafts['mesmerize']['benefit'];
        document.getElementById('love').innerHTML =  Math.floor(vault['love']['current']);
        document.getElementById('terror').innerHTML =  Math.floor(vault['terror']['current']);
    }
};
function demandGold(){
        if(vault['terror']['current'] >= terrorCrafts['demandGold']['cost']){
        vault['terror']['current'] -= terrorCrafts['demandGold']['cost'];
        vault['gold']['current'] += terrorCrafts['demandGold']['benefit'];
        document.getElementById('terror').innerHTML =  Math.floor(vault['terror']['current']);
        document.getElementById('gold').innerHTML =  Math.floor(vault['gold']['current']);
    }  
}
function cSentinal(){
    if(vault['love']['current'] >=  terrorCrafts['convertSentinal']['cost'] && cult['faithful']['current'] >= terrorCrafts['convertSentinal']['benefit']){
        if(cult.sentinals.unlocked === false){
            cult.sentinals.unlocked = true;
            comment('Perhaps you could save the leftovers for a soup?', 'lightred', 'sent');
            document.getElementById('sentinalsWrap').style.display= 'block';
        }else{
            comment('Forever vigilant.');
        }
    cult['faithful']['current'] -= 1;
    cult['sentinals']['current'] += terrorCrafts['convertSentinal']['benefit'];
    vault['love']['current'] -=  terrorCrafts['convertSentinal']['cost'];
    terrorCrafts['convertSentinal']['cost'] = Math.max(cult['sentinals']['current'] * terrorCrafts.convertSentinal.multiplier, 22);
    document.getElementById('convertSentinalcost').innerHTML =  terrorCrafts['convertSentinal']['cost'];
    document.getElementById('love').innerHTML =  Math.floor(vault['love']['current']);
    document.getElementById('faithful').innerHTML =  cult['faithful']['current'];
    actions.preach.cost = Math.max((cult['faithful']['current'] * actions.preach.multiplier), 4);
    document.getElementById('preachCost').innerHTML =  actions.preach.cost;
    document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
    document.getElementById('sentinals').innerHTML =   cult['sentinals']['current'];

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
        description: ['End its suffering.', ' Cost: 1 Sentinal', ' Benefits: Love, Flesh and Radiance', ' Terror Minimum: 84'],
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
    let type = terrorCrafts['sacrifice']['type'];   
    if((cult[type]['current'] >= 1) && (vault['terror']['current'] >=  sacrificeTypes[type]['terrorMin']  ) ){
        if(type === 'innocents'){
            cult['innocents']['current'] -= 1;
            stats['radiance']['current'] += 1 ;
            vault.terror.current += (22 + terrorCrafts.sacrifice.terrorMultiplier);
            document.getElementById('innocents').innerHTML = cult['innocents']['current'];
            comment("so innocent (Terror " + ter +")", 'red');
        }else if (type === 'faithful'){
            cult['faithful']['current'] -= 1;
            stats['radiance']['current'] += 2 ;
            let ter = (44 + terrorCrafts.sacrifice.terrorMultiplier);
            vault.terror.current += ter;
            document.getElementById('faithful').innerHTML = cult['faithful']['current'];
            comment("too close for comfort (Terror " + ter +")", 'red');
            actions.preach.cost = Math.max((cult['faithful']['current'] * actions.preach.multiplier), 4);
            document.getElementById('preachCost').innerHTML = actions.preach.cost;
            document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
        }else if (type === 'chanters'){
            cult['chanters']['current'] -= 1;
            stats['radiance']['current'] += 4 ;
            let ter = (44 + terrorCrafts.sacrifice.terrorMultiplier);
            vault.terror.current += ter;
            document.getElementById('chanters').innerHTML = cult['chanters']['current'];
            comment("silence is golden (Terror " + ter +")", 'red');
            loveCrafts.convertChanter.cost =  Math.max(cult['chanters']['current'] * loveCrafts.convertChanter.multiplier, 4);
            document.getElementById('convertChanterCost').innerHTML =  loveCrafts['convertChanter']['cost'];
        }else if (type === 'sentinals'){
            cult['sentinals']['current'] -= 1;
            stats['radiance']['current'] += 8 ;
            let ter = 22;
            vault.terror.current -= ter;
            document.getElementById('sentinals').innerHTML = cult['sentinals']['current'];
            comment("everyone seems ok with this (Terror -" + ter +")", 'green');
            terrorCrafts['convertSentinal']['cost'] = Math.max(cult['sentinals']['current'] * terrorCrafts.convertSentinal.multiplier, 22);
            document.getElementById('convertSentinalcost').innerHTML =  terrorCrafts['convertSentinal']['cost'];
        }else if (type === 'insane'){
            cult['insane']['current'] -= 1;
            stats['radiance']['current'] += 2;
            let ter = (88 + terrorCrafts.sacrifice.terrorMultiplier);
            vault.terror.current += ter;
            document.getElementById('insane').innerHTML = cult['insane']['current'];
            comment("mercy killing (Terror " + ter +")", 'red');
        }else{
            window.console.log('?');
        };
        document.getElementById('terror').innerHTML = Math.floor(vault.terror.current);
        document.getElementById('radiance').innerHTML = Math.floor(stats['radiance']['current']);
        vault.flesh.current++;
        document.getElementById('flesh').innerHTML = Math.floor(vault.flesh.current);
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
     let temp = sacrificeTypes[type]['string'];
    document.getElementById("sacrifice").innerHTML = temp;
    terrorCrafts['sacrifice']['type'] = type;
    document.getElementById("sacrificeDesc").innerHTML = sacrificeTypes[type]['description'][0];
    document.getElementById("sacrificeTerror").innerHTML = sacrificeTypes[type]['description'][3];
    document.getElementById("sacrificecost").innerHTML = sacrificeTypes[type]['description'][1];
    document.getElementById("sacrificeBenefit").innerHTML = sacrificeTypes[type]['description'][2];
    hideSacrificeTypes();
}
//make the sacrifice buttons
function makeSacrificeChoices(){ //calling in vault action creation
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
        temp.innerHTML = sacrificeTypes[sacrificeKeys[i]]['string'];
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
        description: ['The massive altar hides Rhan somewhat. (reduced Sacrifice Terror)', 'Gold: 444'],
        lockText: ' ',
        func: oakAltar,  
        cost: 444,
        unlocked: true,
        purchased: false,
        permanent: false
    },
    tithe:{
        callString: 'tithe',
        string: 'Tithe',
        description: ['Tithing is a time honored tradition.'],
        lockText: '88 Vision',
        func: titheToggle,
        timeCounter: [0,16],
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
        description: ['Functionally the same altar, but more impressive.(increased Gold from the Faithful)', 'Cost: Gold 888'],
        lockText: ' ',
        func: marbleAltar,  
        cost: 888,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    obsidianAltar:{
        callString: 'obsidianAltar',
        string: 'Obsidian Altar',
        description: ['Functionally the same altar, but more Terrifying.(increased Terror from the Faithful)', 'Cost: Gold 4444'],
        lockText: ' ',
        func: obsidianAltar,  
        cost: 4444,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    ivory:{
        callString: 'ivory',
        string: 'Ivory Finish',
        description: ['This alabaster altar stone makes the sacrifice both more impressive and terrifying. (increased Gold from the Faithful, Terror from Sacrifices)', 'Cost: Gold 444'],
        lockText: ' ',
        func: ivory,  
        cost: 888,
        unlocked: false,
        purchased: false,
        permanent: false
    },
    expedition:{
        callString: 'expedition',
        string: 'Expeditions',
        description: ['Preparations are essential where you must travel.', 'Cost: Gold 22'],
        lockText: ' ',
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
        if(vault['gold']['current'] >= goldCrafts['gifts']['cost']){
        vault['gold']['current'] -= goldCrafts['gifts']['cost'];
        vault['love']['current'] += goldCrafts['gifts']['benefit'];
        document.getElementById('love').innerHTML =  Math.floor(vault['love']['current']);
        document.getElementById('gold').innerHTML =  Math.floor(vault['gold']['current']);
    }
}
function oakAltar(){
    if(vault.gold.current >= 444){
        vault.gold.current -= 444;
        document.getElementById('gold').innerHTML= vault.gold.current;
        goldCrafts.oakAltar.purchased = true;
        flashFade('oakAltarOneOffs');
        goldCrafts.marbleAltar.unlocked = true;
        document.getElementById('marbleAltarOneOffs').style.display = 'block';
        terrorCrafts.sacrifice.terrorMultiplier = (terrorCrafts.sacrifice.terrorMultiplier * 0.75); //terror from sacrifices
        comment('Sacrifice Terror reduced by 25%');
    }
}
function marbleAltar(){ //outMultipliers: [1.0, 1.0, 1.0],//love, terror, gold
    if(vault.gold.current >= 888){
        vault.gold.current -= 888;
        document.getElementById('gold').innerHTML = Math.floor(vault.gold.current);
        flashfade('marbleAltarWrap');
        goldCrafts.marbleAltar.purchased = true;
        document.getElementById('marbleAltarOneOffs').style.display = 'none';
        goldCrafts.obsidianAltar.unlocked = true;        
        document.getElementById('obsidianAltarWrap').style.display='block';
        cult.faithful.outMultipliers[2] = 1.4;
        comment('Increased Gold from the Faithful');
    }    
}
function obsidianAltar(){
    if(vault.gold.current >= 888){
        vault.gold.current -= 888;
        document.getElementById('gold').innerHTML = Math.floor(vault.gold.current);
        flashfade('marbleAltarWrap');
        goldCrafts.marbleAltar.purchased = true;
        document.getElementById('marbleAltarOneOffs').style.display = 'none';
        goldCrafts.obsidianAltar.unlocked = true;        
        document.getElementById('obsidianAltarWrap').style.display='block';
        cult.faithful.outMultipliers[1] = 1.4;
        comment('Increased Terror from the Faithful');
    }  
}
function ivory(){
    
}
function expedition(){
    window.console.log('click', vault['gold']['current']);
    if(vault['gold']['current'] >= 22){
        vault['gold']['current'] -= 22;
        document.getElementById('gold').innerHTML = Math.floor(vault['gold']['current']);
        document.getElementById('expeditionsTab').style.display = 'block';
        document.getElementById('waxWrap').style.display = 'block';
        document.getElementById('cryptWrap').style.display = 'block';
        document.getElementById('towerWrap').style.display = 'block';
        document.getElementById('estateWrap').style.display = 'block';
        flashFade('expeditionOneOffs');
        eventBox("images/expedition.jpg", "Far off places...", "Having gathered your supplies and notes, you must now set out to find the lost places where the secrets of the Elder Gods may be discovered. (Expeditions unlocked)");
        comment('We must find the hidden places.', 'lightgreen', 'ex');
        flash('expeditionsTab', 'lightgreen', 'white');
        goldCrafts.expedition.purchased = true;
        domUnlocks.expeditions = true;
        world.wax.unlocked = true;
        world.crypt.unlocked = true;
        world.tower.unlocked = true;
        world.estate.unlocked = true;
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
    if(vault.love.current>=4){
        if(goldCrafts.tithe.timeCounter[0] < goldCrafts.tithe.timeCounter[1]){
            goldCrafts.tithe.timeCounter[0]++;
        }else{
            goldCrafts.tithe.timeCounter[0] = 0;
            vault.love.current -= 4;
            vault.gold.current +=2;
            document.getElementById('love').innerHTML= Math.floor(vault.love.current);
            document.getElementById('gold').innerHTML= Math.floor(vault.gold.current);
            flash('love', 'red', 'white');
            flash('gold', 'yellow', 'white');
        }
    }
}
function addTithe(){//called at vault action creation
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
    leatherBinding: {
        callString: 'leatherBinding',
        string: 'Leather Binding',
        description: ['For a Tome to be forged, it must be bound in Flesh. Cost: Flesh 4 Pages 44'],
        func: leatherBinding,
        cost: 4,
        unlocked: false,
        purchased: false,
        permanent: true
    },
    bone: {
        callString: 'bone',
        string: 'Bone Altar Stone',
        description: ['A finely wrought layer of bone covering the Altar is a terrifying thing to behold. (increases Terror from Faithful and Sacrifice)', 'Cost 88 Flesh'],
        lockText: 'Vision: ',
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
        lockText: 'Vision 750',
        unlockCost: 750,
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
        purchased: true,
        permanent: true
    },
    sculpt:{
        callString: 'sculpt',
        string: 'Sculpture',
        description: ['Create Terrifying Artwork for the Museum. Cost: Flesh '],
        comment: 'uhh... reminiscent of Geiger.',
        func: sculpt,
        cost: 8,
        lockText: ' Vision: 444',
        unlockCost: 444,
        unlockType: 'vision',
        unlocked: false,
        purchased: false,
        permanent: true
    }
};
//===============================
//                                      FleshCrafts Actions
//===============================
let tomeList = ['hsan', 'dzyan', 'dhol', 'kult', 'azat', 'alch', 'eibon', 'damn', 'necr'];
function getTome(tomeList) {
  if (tomeList.length === 0) {
    return null;
  }
  const Tome = tomeList[0];
  // Remove the first item from the array
  tomeList.shift();
  return Tome;
}
function leatherBinding(){
    if(vault.flesh.current>= fleshCrafts.leatherBinding.cost && vault.tomes.pageCounter >= vault.tomes.pagesNeeded){
        vault.flesh.current -= fleshCrafts.leatherBinding.cost ;
        fleshCrafts.leatherBinding.cost = fleshCrafts.leatherBinding.cost * 2;
        vault.tomes.pageCounter -= vault.tomes.pagesNeeded;
        vault.tomes.pagesNeeded = vault.tomes.pagesNeeded * 8;
        document.getElementById('flesh').innerHTML = vault.flesh.current;
        vault.tomes.current += 1;
        const Tome = getTome(tomeList);
        window.console.log(actionUpgrades.studyTome[Tome]['unlocked']);
        actionUpgrades.studyTome[Tome]['unlocked'] = true;
        document.getElementById(Tome + "Wrap").style.display='block';
    }
}
function bone(){
    
}
function deepTrade(){
    
}
function sculpt(){
    if(vault.flesh.current >=8){
        vault.flesh.current -=8;
        vault.terror.current += 8;
        vault.gold.current += 400;
        document.getElementById('flesh').innerHTML = Math.floor(vault.flesh.current);
        document.getElementById('terror').innerHTML=Math.floor(vault.terror.current);
        document.getElementById('gold').innerHTML = Math.floor(vault.gold.current);
        flash('gold', 'green', 'white');
        flash('terror', 'red', 'white');
        flash('flesh', 'pink', 'white');
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
        description: ['Priests of the old ways can provide many benefits. Cost: Faithful 1, Tome 1, Gold  '],
        func: ordain,
        cost: 44,
        costMultiplier: 4,
        unlocked: false,
        purchased: true,
        permanent: true
    }
};
//=============================
//                                      TomeCrafts actions
//=============================
        
function ordain(){
    if(cult.faithful.current>0 && vault.tomes.current>0 && vault.gold.current >= tomeCrafts.ordain.cost){
        cult.faithful.current -= 1;
        vault.tomes.current -=1;
        vault.gold.current -= tomeCrafts.ordain.cost;
        cult.priests.current += 1;
        document.getElementById('faithful').innerHTML = cult.faithful.current;
        document.getElementById('tomes').innerHTML = Math.floor(vault.tomes.current);
        document.getElementById('gold').innerHTML = Math.floor(vault.gold.current);
        document.getElementById('priests').innerHTML = cult.priests.current;
        actions.preach.cost = Math.max((cult['faithful']['current'] * actions.preach.multiplier), 4);
        document.getElementById('preachCost').innerHTML = actions.preach.cost;
        document.getElementById('preachWrapCost').innerHTML = actions.preach.cost;
        if(cult.priests.unlocked === false){
            cult.priests.unlocked === true;
            document.getElementById('priestsWrap').style.display='block';
        }
        comment('So much easier this way');
    }
};

                                                                                //=========================================
                                                                                //                                      Build Crafts
                                                                                //=========================================
function unlockedAtStart(){
    document.getElementById('convertChanterLock').style.display='block';
    document.getElementById('convertSentinalLock').style.display='block';
    document.getElementById('oakAltarOneOffs').style.display='block';
    document.getElementById('titheLock').style.display='block';
    document.getElementById('expeditionOneOffs').style.display='block';
} 
 
let craftStringKeys = ['loveCrafts', 'terrorCrafts', 'goldCrafts', 'fleshCrafts', 'tomeCrafts'];
let craftTypeKeys = [loveCrafts, terrorCrafts, goldCrafts, fleshCrafts, tomeCrafts];
    let loveKeys = Object.keys(loveCrafts);
    let terrorKeys = Object.keys(terrorCrafts);
    let goldKeys = Object.keys(goldCrafts);
    let fleshKeys = Object.keys(fleshCrafts);
    let tomeKeys = Object.keys(tomeCrafts);
let craftKeys = [loveKeys, terrorKeys, goldKeys, fleshKeys, tomeKeys];
function buildVaultActionBoxes(vaultItem, craft){
    let item = vault[vaultItem];
    document.getElementById('vaultActions').innerHTML += 
            "<div class='vaultActionBox' id='" + vaultItem +"ActionBox' ><h2 class='vaultActionTitles'>" + item['string'] + " Crafts</h2></div>";
    let craftKeys = Object.keys(craft);
    for(let i=0; i<craftKeys.length; i++){
        if(craft[craftKeys[i]]['permanent'] === true){
            document.getElementById(vaultItem + "ActionBox").innerHTML += 
                "<button class='vaultActionWraps' id= '" +craftKeys[i] + "Wrap'>" +
                "<span class='vaultActionLabels'  id= '" +craftKeys[i] + "'>" + craft[craftKeys[i]]['string'] + "</span>" +
                "</button>";
        }
        if(craft[craftKeys[i]]['lockText'] && craft[craftKeys[i]]['permanent'] === true){
           document.getElementById(vaultItem + "ActionBox").innerHTML += 
                    "<button class='vaultActionLocks' id= '" +craftKeys[i] + "Lock'>" +
                    "<span class='unlockText'>" + craft[craftKeys[i]]['string'] + "</span>" +
                    "</button>";      
                document.getElementById(craftKeys[i] + "Wrap").style.display='none';
        }else if(craft[craftKeys[i]]['lockText'] && craft[craftKeys[i]]['permanent'] === false){
                       document.getElementById(vaultItem + "ActionBox").innerHTML += 
                    "<button class='vaultActionOneOffs' id= '" +craftKeys[i] + "OneOffs'>" +
                    "<span class='vaultActionLabels'>" + craft[craftKeys[i]]['string'] + "</span>" +
                    "</button>";     
        }
    };


};
buildVaultActionBoxes('love', loveCrafts);
buildVaultActionBoxes('terror', terrorCrafts);
buildVaultActionBoxes('gold', goldCrafts);
buildVaultActionBoxes('flesh', fleshCrafts);
buildVaultActionBoxes('tomes', tomeCrafts);
makeSacrificeChoices();
addTithe();
unlockedAtStart();
