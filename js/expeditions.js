/* 
Thalarion, the City of a Thousand Wonders ruled by Lathi -huge carven gate Akariel unlocked
Xura, the Land of Pleasures Unattained
Far reaches of dream:
moon-wine of the zoogs
Oriab
 */
            	//=========================================
                        //                                      World Expeditions
	//=========================================
        
let world = {
  crypt: {//unlocked by expeditions
      string: 'Desolate Crypt',
      description: ['Rifle through the bones of the dead seeking tomes of power.', 'Cost: Gold ', 'Benefits: Gold and loose pages'],
      description2: ['Less interesting crypts remain potentially profitable'],
      cost: 48,
      func: crypt,
      unlocked: false,
      purchased: false
  },
  wax: {//unlocked by expeditions
      string: 'Wax Museum',
      description: ['Find the Truth in the basement.', 'Cost: Gold ', ' '],
      description2: ['So many innocents wandering the halls.', 'Cost: Gold ', 'Benefit: 1 Innocent'],
      cost: 84,
      loot: ['innocent'],
      unlocks: ['Rhan-Tegoth'],
      func: wax,
      unlocked: false,
      purchased: false
  },
  tower: {//unlocked by expeditions
      string: 'Shunned Towers',
      description: ['The locals know to avoid these old ruins at all costs.', ' Cost: Gold ', 'Benefits: Gold and loose pages'],
      cost: 240,
      func: tower,
      loot: ['Shining Trapezohedron'],// unlocks dream expeditions
      unlocks: ['kult'],
      unlocked: false,
      purchased: false
  },
  estate: {//unlocked by expeditions unlocks reef
      string: 'Ancestral Estate',
      description: ['Lost memories of a door and a Silver Key.', 'Cost: Gold '],
      cost: 848,
      loot: ['silver key', 'reef'],
      unlocked: false,
      purchased: false
  },
  passage: { //unlocked by estate
      string: 'Underground Passage',
      description: ['Hidden ways to secrets deep under the earth.', ' Cost Gold '],
      cost: 484,
      loot: ['lizard people', 'goulBook'],//K’n-yan all dwelt in the great, tall city of Tsath Yoth valley of Do-Hna
      unlocked: false,
      purchased: false
  },
  reef: {//unlocked by estate bc innsmouth
      string: 'Coral Reef',
      description: ['Things from the Deep meet here for commerce with the surface.', ' Cost: Gold '],
      cost: 484,
      loot: ['deepOnes'],
      unlocks: ['Dagon'],
      unlocked: false,
      purchased: false
  }, 
  desert: {//unlocked by 
      string: 'Desert Fastness',
      description: ['Lost to all but a broken few, they hide many things.', ' Cost: Gold '],
      cost: 4848,
      loot: ['gates'],
      unlocks: ['Yig', 'Nyarlathotep'],
      unlocked: false,
      purchased: false
  },
  mountain: {//unlocked by zoog wine and ulthar
      string: 'Mountain Peak',
      description: ['They say the god of men still dance there...', ' Cost: Gold '],
      cost: 8848,
      loot: ['nug', 'yeb', 'tsagotha'],
      unlocks: [],
      unlocked: false,
      purchased: false
  }, 
  island: {//unlocked by dzyan
      string: 'Island Ruins',
      description: ['123w48s All traffic instructed to avoid this area.', ' Cost: Gold '],
      cost: 12348,
      loot: ['Ghatanothoa', 'Cthulu'],
      unlocks: [],
      unlocked: false,
      purchased: false
  },
  ant: {//unlocked by necro
      string: 'Antarctic Journey',
      description: ['Where men fear to tread.', ' Cost: Gold '],
      cost: 100000,
      loot: ['Darkness'],
      unlocks: [],
      unlocked: false,
      purchased: false
  }
};
let worldKeys = Object.keys(world);
function loadWorldExpeditions(){
    for(i=0;i<worldKeys.length;i++){
            const worlds = document.getElementById('world');
            const button = document.createElement('button');
            button.textContent = world[worldKeys[i]]['string'];
            button.classList.add('worldWraps');
            const Id = worldKeys[i] + 'Wrap';
            button.id = Id; 
            worlds.appendChild(button);
            
    }
    }
 loadWorldExpeditions();

            	//=========================================
                        //                                      Dream Expeditions
	//=========================================
let dreamEx = {
    pillarOfFlame: {//unlocked by trap
      string: 'Pillar of Flame',
      description: ['The nearest landmark in the Dreaming.', ' Cost: Radiance '],
      cost: 4,
      func: pillarOfFlame,
      unlocked: false,
      purchased: false,
      dreamUnlocked: false//nested to avoid problems
          },
  ulthar: {//unlocked by trap
      string: 'Ulthar',
      description: ['Harm no cat in Ulthar.', ' Cost: Radiance '],
      cost: 8,
      func: ulthar,
      loot: ['cat', 'Seven Cryptical books of Hsan'],
      unlocked: false,
      purchased: false
  },
   celephais: {//unlocked by hsan
      string: 'Celephaïs',
      description: ['king of dream.', ' Cost: Radiance '],
      cost: 44,
      func: cele,
      loot: ['keys'],
      unlocked: false,
      purchased: false
  },
  dylathLeen: {//unlocked by hsan
      string: 'Dylath-Leen',
      description:['one of the largest coastal cities', ' Cost: Radiance '],
      cost: 88,
      func: dylath,
      loot: ['blackShip', 'desert'],
      unlocked: false,
      purchased: false
  },

  landOfZar: {//unlocked by hsan
      string: 'Land of Zar',
      description: ['The land of all dreams.', ' Cost: Radiance '],
      cost: 248,
      func: zar,
      loot: ['endless dreaming as long as you dont do anything else'],
      unlocked: false,
      purchased: false
  },
  thalarion: {//unlocked by white ship
      string: 'Thalarion',
      description:[ 'The City of a Thousand Wonders.', ' Cost: Radiance '],
      cost: 484,
      func: thar,
      loot: ['gateAkariel', '1000 vision'],
      unlocked: false,
      purchased: false
  },
  xura: {//unlocked by white ship
      string: 'Xura',
      description: ['The Land of Pleasures Unattained.', ' Cost: Radiance '],
      cost: 848,
      func: xura,
      loot: ['something'],
      unlocked: false,
      purchased: false
  },
  sonaNyl: {//unlocked by white ship
      string: 'Sona-Nyl',
      description: ['Land of Fancy.', ' Cost: Radiance '],
      cost: 4848,
      func: sona,
      loot: ['passivebumptillaction'],
      unlocked: false,
      purchased: false
  },  
  basaltPillars: {//unlocked by white ship /black ship
      string: 'Basalt Pillars of the West',
      description: ['Where the gods dwell, so they say.', ' Cost: Radiance '],
      cost: 10000,
      func: basalt,
      loot: ['nameless mist'],
      unlocked: false,
      purchased: false
  },  
  moon: {//unlocked by black ship
      string: 'The Moon',
      description: ['The Moon', ' Cost: Radiance '],
      cost: 8484,
      func: moon,
      loot: ['toadTraders', 'moon wine'],
      unlocked: false,
      purchased: false
  }, 
  plateauOfLeng: {//home to the black ship Men of Leng satyrs who eat people
      string: 'Plateau of Leng',
      description: ['.', ' Cost: Radiance '],
      cost: 22,
      func: plateau,
      loot: ['The Men of Leng regale you with a feast and gift you a Tome'],
      unlocked: false,
      purchased: false
  },
  unknownKadath: {//unlocked by black ship
      string: 'Unknown Kadath',
      description: ['? ', 'Cost: Radiance '],
      cost: 48484,
      func: kadath,
      loot: [''],
      unlocked: false,
      purchased: false
  }
};
let dreamExKeys = Object.keys(dreamEx);
function loadDreamExpeditions(){
    for(i=0;i<dreamExKeys.length;i++){
            const dreams = document.getElementById('dreamEx');
            const button = document.createElement('button');
            button.textContent = dreamEx[dreamExKeys[i]]['string'];
            button.classList.add('dreamExWraps');
            const Id = dreamExKeys[i] + 'Wrap';
            button.id = Id; 
            dreams.appendChild(button);
            
    }
    }
 loadDreamExpeditions();


        	//=========================================
	// expedition functions
	//========================================= 
        

function crypt(){
    if(vault.gold.current > world.crypt.cost){
        let gold = vault['gold']['current'] ;
        vault['gold']['current'] -= world['crypt']['cost'];
        vault['flesh']['current'] += Math.max(cult.sentinals.current, 1); //always flesh in a crypt
        let tmp = world['crypt']['cost'] * (0.25 + Math.random() * 2.75);
        vault['gold']['current'] += tmp; //gold return randomizer
        document.getElementById('gold').innerHTML= Math.floor(vault.gold.current);
        let goldDif = Math.floor(vault.gold.current - gold);
        if(goldDif > 0){
            comment('A profitable gamble. Your Sentinals found some Flesh and Gold:' + goldDif, 'lightgreen', 'green');
        }else if(goldDif < 0){
            comment('Your Sentinals found some Flesh but overall a net loss of Gold:' + goldDif, 'red', 'red');
        }
        if(world.crypt.purchased === false){
            world.crypt.purchased = true;
            vault.flesh.unlocked = true;
            document.getElementById('fleshWrap').style.display = 'block';
            document.getElementById('flesh').innerHTML = vault.flesh.current;
            vault.tomes.unlocked = true;
            vault.tomes.current += 1;
            document.getElementById('tomesWrap').style.display='block';
            document.getElementById('tomes').innerHTML = vault.tomes.current;
            comment('A unique find! (Professor West)', 'lightblue', 'crypt');
            eventBox('images/studyTome.png', 'Pnatotic Manuscripts', 'A unique find. Translation (West tab) will improve your studies as well as your mental fortitude.');
            document.getElementById('pnatWrap').style.display='block';
            actionUpgrades.studyTome.pnat.unlocked = true;
            document.getElementById('cryptWrap').style.backgroundColor='grey';
            document.getElementById('cryptDesc').innerHTML = world.crypt.description2[0];
        }else{
            comment('loose pages...');
            vault.tomes.pageCounter += Math.random() * 4;
            if(vault.tomes.pageCounter >= vault.tomes.pagesNeeded){
                comment('With these new pages, you have enough to complete a new Tome. Acquire the needed -leather- and bind it to begin the translation. (Lovecrafts)', 'pink', 'purple');
            }
        }
        world['crypt']['cost'] = world['crypt']['cost'] * 1.12;
    }
}
function wax(){
    if(vault['gold']['current'] > world['wax']['cost']){
        vault['gold']['current'] -= world['wax']['cost'];
        world['wax']['cost'] += 1;
        document.getElementById('waxCost').innerHTML = world['wax']['cost'];
        if(world.wax.purchased === false){
            document.getElementById('sacrariumTab').style.display='block';
            document.getElementById('rhanWrap').style.display='block';
            eventBox("images/sacrarium.png", "Rhan-Tegoth!", "Locked away in the basement you find her, the Harbinger. Give her what she desires and she will reward you with unearthly Radiance. (Sacrarium unlocked)");
            comment('Free her... feed her... She is the harbinger.');
            document.getElementById('waxWrap').style.backgroundColor='grey';
            document.getElementById('waxDesc').innerHTML = world['wax']['description2'][0];
            document.getElementById('waxBenefit').innerHTML = world['wax']['description2'][2];
            flash('sacrariumTab', '#8000FF', 'white');
            domUnlocks.sacrarium = true;
            gods.rhan.unlocked = true;
            world.wax.purchased = true;
    }else{
        cult['innocents']['current'] += 1;
        document.getElementById('innocents').innerHTML = Math.floor(cult['innocents']['current']);
        comment('so innocent...');
        flash('innocents', 'blue', 'white');
    }
        document.getElementById('gold').innerHTML = Math.floor(vault['gold']['current']);
        flash('cultTab', 'blue', 'white');
        flash('gold', 'red', 'white');
    }
}
function tower(){
    if(vault.gold.current >= world.tower.cost){
        vault.gold.current -= world.tower.cost;
        document.getElementById('gold').innerHTML = Math.floor(vault.gold.current);
        if(world.tower.purchased === false){
            world.tower.purchased = true;
            relics.trap.unlocked = true;
            dreamEx.pillarOfFlame.dreamUnlocked = true;
            document.getElementById('trapWrap').style.display='block';
            document.getElementById('sacrariumTab').style.display='block';
            setTimeout(function() {
                document.getElementById('dreamEx').style.display = 'flex';
            }, 2000);
            document.getElementById('pillarOfFlameWrap').style.display='block';
            document.getElementById('ultharWrap').style.display='block';
            document.getElementById('plateauOfLengWrap').style.display='block';
            comment('Dream a little dream for me...', 'lightblue', 'blue');
            eventBox('images/trap.jpg', 'Shining Trapezohedron', 'It calls to you from a distance, promising visions of Realms beyond. Once in its sight, you know you will never part with it while you live.  (Dream Expeditions unlocked. Trapezohedron placed in Sacrarium.)');
            document.getElementById('towerWrap').style.backgroundColor='grey';
            document.getElementById('towerDesc').innerHTML = world['wax']['description2'][0];
            document.getElementById('towerBenefit').innerHTML = world['wax']['description2'][2];
        }
        comment('loose pages...');
        vault.tomes.pageCounter += Math.random() * 8;
        if(vault.tomes.pageCounter >= vault.tomes.pagesNeeded){
            comment('With these new pages, you have enough to complete a new Tome. Acquire the needed -leather- and bind it to begin the translation. (Fleshcrafts)', 'pink', 'purple');
        }
    }
}

function estate(){
    
}
        	//=========================================
	// dream expedition functions
	//========================================= 

function pillarOfFlame(){
    if(stats.radiance.current>=4){
        stats.radiance.current-=4;
        document.getElementById('radiance').innerHTML= stats.radiance.current;
        flashFade('pillarOfFlameWrap');
        document.getElementById('dreamChosen').style.display='block';
        document.getElementById('dreamDropBtn').style.display='block';
        document.getElementById('mindAloneChoice').style.display='block';
        document.getElementById('lighthouseChoice').style.display='block';
        flash('westTab', 'lightblue');
        eventBox('images/lighthouse.png', 'Lighthouse', 'In a nearby cavern you find the bearded priests Nasht and Kaman-Thah. They agree to keep the Lighthouse burning for you in exchange for a bit of Radiance.(Dream Options Unlocked)');
        comment('upgraded Dreaming available -West');
    }
}
function ulthar(){
    if(stats.radiance.current>=8){
        stats.radiance.current-=8;
        flashFade('ultharWrap');
        document.getElementById('bastWrap').style.display='block';
        flash('sacrariumTab', 'lightgreen');
        eventBox('images/bast.png', 'Cats of Ulthar', 'A friendly Abyssinian adopts you as you pass through the quiet city streets. Its presence proves very calming.(passive Madness reduction)');
        comment('A beautiful creature (sacrarium)');
    }
}
function plateau(){
    
}

function cele(){
    
}

function dylath(){//88 rad unlock black ship and desert?
    
}

function zar(){
    
}

function thar(){
    
}

function xura(){
    
}

function sona(){
    
}

function basalt(){
    
}

function moon(){
    
}

function kadath(){
    
}

function a(){
    
}

