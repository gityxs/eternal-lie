/* 
total victims is used to generate divine power, including sacrifices and killing your own people in a final purge
 */

function nyar(){ //reset 1
    let shards = (cult.faithful.current / 4 )+ (cult.chanters.current / 2) + (cult.sentinals.current/2) + (cult.innocents.current/8) + (cult.insane.current /2 )+ (cult.priests.current);
    stats.shards.current = Math.floor(shards);
    localStorage.setItem("savedStatImm", JSON.stringify(stats      )); //stats
    var exemptedKeys = ['savedStatImm'];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!exemptedKeys.includes(key)) { //should remove everything from save but stats
            localStorage.removeItem(key);
        }
    }
 document.body.parentNode.replaceChild(reloader, document.body);
 let storedStats = localStorage.getItem("savedStatImm"); 
     let statTemp = JSON.parse(storedStats); //replace stats
     window.console.log(stats.vision.current);
    if(relics.immortality.unlocked === true){ 
        window.console.log('true');
        stats = statTemp;
        for(i=0;i<statKeys.length; i++){
        document.getElementById(statKeys[i]).innerHTML = Math.floor(stats[statKeys[i]]['current']);
        eventBox("images/nyar.png", 'Columns three they marched...', 'He was called and thus he came, out of the darkness, his eyes shining with Shards of the Divine. Their fates split in three, all the Chosen but West, who recieved a sly wink, step into darkness. West finds himself alone in the darkness laughing, whilst his eyes blaze ever brighter.');
        };
    }else{
        window.console.log('false');
            eventBox("images/nyar.png", 'Columns three we marched...', 'He was called and thus he came, out of the darkness, his eyes shining with Shards of the Divine. Their fates split in three, the Chosen step into darkness. In time, West finds himself alone in the darkness, his hands clutching a manuscript whilst his eyes blaze with Shards of Light');
    }
    stats.shards.current = statTemp.shards.current;
    document.getElementById('shards').innerHTML = stats.shards.current;
    document.getElementById('shardsBox').style.display='block';
    saveToLocalStorage();
    comment('How fun. Very diverting.');
    window.console.log('end');
}