/* 
        sacrarium
list of the Great Old Ones minor dieties
    ruled by  Nyarlathotep
    Lobon gift of Sacred Spear multiplies sacrifice effect
    Nath-Horthath -valor and vengeance
    Oukranos Temple of Loveliness -charm multiplier
    Tamash god of illusion, mysticism and the wise lol beard of tamash radiance boost
    Zo-Kalar  providing healthy children and peaceful deaths bonus to breeding pits and sacrifice of innocents
    Karakal Master of the Flames bonus to magic damage?

 */
let gods = {
    rhan: {
        string: 'Rhan-Tegoth',
        description: ['She must be awakened first, though she brings fear in her wake. ', 'Offering Required: Innocents '],
        unlocks: 'sacrifice',
        cost: 8,
        madCost: 44,
        unlocked: false,
        purchased: false
    },
    dagon: {
        string: 'Dagon', 
        description: ['He will provide.', ' Offering Required: Flesh '],
        unlocks: 'deepOnes',
        cost: 44,
        madCost: 88,
        unlocked: false,
        purchased: false
    },
    shub: {
        string: 'Shub Niggurath',
        description: ['Mother of so many horrors.', ''],
        unlocks: 'darkYoung',
        cost: 1,
        madCost: 100,
        unlocked: false,
        purchased: false
    },
    nyar: {
        string: 'Nyarlathotep',
        description: ['We have waited so long for you to come a calling. Dance with me.', ''],
        unlocks: 'reset1',
        cost: '',
        madCost: 50,
        unlocked: false,
        purchased: false
    },
    cthu: {
        string: 'Cthulhu',
        description: ['That is not dead which can... well you get it. Offer him everything.', ''],
        unlocks: 'immortality',
        cost: 1,
        madCost: 50,
        unlocked: false,
        purchased: false
    }
};
let godKeys = Object.keys(gods);

function makeSacrarium(){
    document.getElementById('sacrarium').innerHTML =
            "<div id='gods'>" +
                "<h2 id='godTitle'>Great Old Ones</h2>" +
            "</div>" +
            "<div id='relics'>" +
            "<h2 id='relicTitle'>Relics Obtained</h2>" +
            "</div>";
    for(i=0;i<godKeys.length;i++){
            document.getElementById('gods').innerHTML +=
                "<button class='godsWraps' id='" + godKeys[i] + "Wrap'>" +
                "<span class='godTitles'>" + gods[godKeys[i]]['string'] + "</span>" +
                "</button>";
    }
};
makeSacrarium();

    	//=========================================
	// god events
	//=========================================


function rhan(){
    if(cult['innocents']['current'] >= 8){
        cult['innocents']['current'] -= 8;
        stats['radiance']['current'] += 4;
        vault['flesh']['current'] += 4;
        vault.terror.current += 88;
        stats.madness.current += 44;
        stats['radiance']['unlocked'] = true;
        vault['flesh']['unlocked'] = true;
        gods.rhan.purchased = true;
        relics.rhanRelic.unlocked = true;
        terrorCrafts.sacrifice.unlocked = true;
        document.getElementById('rhanWrap').style.display='none';
        document.getElementById('rhanRelicWrap').style.display='block';
        document.getElementById('sacDropBtn').style.display='block';
        document.getElementById('sacrificeWrap').style.display='block';
        document.getElementById('fleshWrap').style.display = 'block';
        document.getElementById('radianceBox').style.display='block';
        document.getElementById('flesh').innerHTML =  Math.floor(vault['flesh']['current']);
        document.getElementById('madness').innerHTML =  Math.floor(stats['madness']['current']);
        document.getElementById('radiance').innerHTML =  Math.floor(stats['radiance']['current']);
        document.getElementById('innocents').innerHTML=cult['innocents']['current'];
        eventBox("images/rhan.png", "Rhan-Tegoth", "She is pleased (Madness +44, Terror +88) but ever hungry. Hidden within the shrine, her thoughts now echo through the halls. (Rhan- Tegoth passive benefits, Sacrfice unlocked in TerrorCrafts," );
        comment('hungry...', 'pink');
    }
}

let relics = {
    rhanRelic: {
        string: 'Rhan-Tegoth',
        description: ['Brought forth only for the Sacrifice, her thoughts emanate from the darkness at all times. (Passive Vision, Madness and Terror)'],
        unlocked: false,
        ticCounter: 0,
        tics: 44
  },
    trap:{
        string: 'Shining Trapezohedron',
        description: ['Visions of other realms abound, but what watches back through the shining crystal facets? (Passive Vision and Madness.)'],
        unlocked: false,
        ticCounter: 0,
        tics: 44
    }, 
    bast:{
        string: 'Bast',
        description: ['A friendly cat from Ulthar took a liking to you. Very calming. (passive madness reduction)'],
        unlocked: false,
        tics: 22
    }, 
    tyog:{
        string: 'Scroll of Tyog',
        description: ['Immunity to Petrification by Madness .'],
        unlocked: false
    },
    immortality: {
        string: 'imm',
        description: ['imm'],
        unlocked: false
    }
};
let relicKeys = Object.keys(relics);
function buildRelics(){
    for(i=0;i<relicKeys.length;i++){
        document.getElementById('relics').innerHTML +=
                "<span class='relicWraps' id='" + relicKeys[i] + "Wrap'>" + relics[relicKeys[i]]['string'] + "</span>";
    }
}
buildRelics();

function relicsTic(){
    for(i=0;i<relicKeys.length;i++){
        if(relics[relicKeys[i]]['unlocked'] === true){
            if(relicKeys[i] === 'rhanRelic'){
                if(relics.rhanRelic.ticCounter< relics.rhanRelic.tics){
                    relics.rhanRelic.ticCounter++;
                }else{
                    relics.rhanRelic.ticCounter = 0;
                    stats.madness.current += 0.4;
                    stats.vision.current += 0.8;
                    if(cult.chanters.current >=1){
                    vault.terror.current += Math.max(((cult.innocents.current / cult.chanters.current)), 0.04);
                }else{
                     vault.terror.current += 0.04;
                }
                    document.getElementById('madness').innerHTML =  Math.floor(stats['madness']['current']);
                    document.getElementById('vision').innerHTML =  Math.floor(stats['vision']['current']);
                    document.getElementById('terror').innerHTML =  Math.floor(vault['terror']['current']);
                }
            }
            if(relicKeys[i] === 'trap'){
                if(relics.trap.ticCounter< relics.trap.tics){
                    relics.trap.ticCounter++;
                }else{
                    relics.trap.ticCounter = 0;
                    stats.madness.current += 0.4;
                    stats.vision.current += 0.8;
                    document.getElementById('madness').innerHTML =  Math.floor(stats['madness']['current']);
                    document.getElementById('vision').innerHTML =  Math.floor(stats['vision']['current']);
                }
            }
            if(relicKeys[i] === 'bast'){
                if(relics.bast.ticCounter< relics.bast.tics){
                    relics.bast.ticCounter++;
                }else{
                    relics.bast.ticCounter = 0;
                    stats.madness.current -= 0.4;
                    document.getElementById('madness').innerHTML =  Math.floor(stats['madness']['current']);
                }
            }
        }
    }
};