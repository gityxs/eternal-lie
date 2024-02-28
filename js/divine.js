/* 

 */

function nyarReset(){ //reset 1
    cancelShakeAnimation();
    closeEventBox();
    let shards = (cult.faithful.current / 4 )+ (cult.chanters.current / 2) + (cult.sentinals.current/2) + (cult.innocents.current/8) + (cult.insane.current /2 )+ (cult.priests.current);
    stats.shards.current += Math.floor(shards);
    stats.shards.unlocked =true;
    localStorage.clear();
    localStorage.setItem("nyarStats", JSON.stringify(stats)); //stats
    location.reload(); //reload game state
}
function nyarPostReset(){
    window.console.log('nyarPost');
     let storedStats = localStorage.getItem("nyarStats"); 
     let statTemp = JSON.parse(storedStats); //replace stats
    if(relics.immortality.unlocked === true){ 
        window.console.log('immortal');
        stats = statTemp;
        for(i=0;i<statKeys.length; i++){
        document.getElementById(statKeys[i]).innerHTML = Math.floor(stats[statKeys[i]].current);
        };
        eventBox("images/nyar.png", 'Columns three they marched...', 'He was called and thus he came. The Pharoah danced out of Nightmare, eyes shining with Shards of the Divine. The Chosen split into columns and fall into darkness. All save West, who recieves a sly wink and a nod. West is left alone in the darkness laughing, his eyes blazing ever brighter.');
    }else{
        window.console.log('dead');
        eventBox("images/nyar.png", 'Columns three we marched...', 'He was called and thus he came. The Pharoah danced out of Nightmare, eyes shining with Shards of the Divine. The Chosen, led by West, split into columns and fell into darkness. After countless eons, West awakens alone in a dark alley, hands clutching a Tome. His eyes blaze with Shards of Light');
    }
    stats.shards.current = statTemp.shards.current;
    document.getElementById('shards').innerHTML = stats.shards.current;
    document.getElementById('shardsBox').style.display='block';
    saveToLocalStorage();
    comment('How fun. Very diverting.');
    window.console.log('Ny-end');
}