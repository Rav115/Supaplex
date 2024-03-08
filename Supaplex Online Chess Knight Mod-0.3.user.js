    // ==UserScript==
    // @name         Supaplex Online Chess Knight Mod
    // @description  Supaplex Online adds knight movment
    // @version      0.3
    // @author       Rav115
    // @match        https://*.supaplex.online/test*
    // @license MIT
    // ==/UserScript==

 document.addEventListener('keydown', logKey);
    function logKey(e) {
      if (`${e.code}` == "Numpad7") {
if      ((PlayField16[ MurphyPosIndex-1-FieldWidth*2 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex-1-FieldWidth*2 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex-1-FieldWidth*2 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex-1-FieldWidth*2 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex-1-FieldWidth*2 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
          if (`${e.code}` == "Numpad9") {
if      ((PlayField16[ MurphyPosIndex+1-FieldWidth*2 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex+1-FieldWidth*2 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex+1-FieldWidth*2 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex+1-FieldWidth*2 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex+1-FieldWidth*2 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 -2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
          if (`${e.code}` == "Numpad4") {
if      ((PlayField16[ MurphyPosIndex-2-FieldWidth*1 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex-2-FieldWidth*1 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex-2-FieldWidth*1 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex-2-FieldWidth*1 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex-2-FieldWidth*1 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
          if (`${e.code}` == "Numpad1") {
if      ((PlayField16[ MurphyPosIndex-2+FieldWidth*1 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex-2+FieldWidth*1 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex-2+FieldWidth*1 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex-2+FieldWidth*1 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex-2+FieldWidth*1 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
          if (`${e.code}` == "Numpad6") {
if      ((PlayField16[ MurphyPosIndex+2-FieldWidth*1 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex+2-FieldWidth*1 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex+2-FieldWidth*1 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex+2-FieldWidth*1 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex+2-FieldWidth*1 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 -1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
          if (`${e.code}` == "Numpad3") {
if      ((PlayField16[ MurphyPosIndex+2+FieldWidth*1 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex+2+FieldWidth*1 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex+2+FieldWidth*1 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex+2+FieldWidth*1 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex+2+FieldWidth*1 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +2 +1*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
          if (`${e.code}` == "Numpad0") {
if      ((PlayField16[ MurphyPosIndex-1+FieldWidth*2 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex-1+FieldWidth*2 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex-1+FieldWidth*2 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex-1+FieldWidth*2 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex-1+FieldWidth*2 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= -1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
          if (`${e.code}` == "NumpadDecimal") {
if      ((PlayField16[ MurphyPosIndex+1+FieldWidth*2 ]) === 0) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;}
else if ((PlayField16[ MurphyPosIndex+1+FieldWidth*2 ]) === 2) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.base.play();}
else if ((PlayField16[ MurphyPosIndex+1+FieldWidth*2 ]) === 4) { PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.infotron.play();InfotronsCollected +=1;}
else if ((PlayField16[ MurphyPosIndex+1+FieldWidth*2 ]) === 7) {if(InfotronsCollected>=InfotronsNeeded){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;soundboard.sounds.exit.play();}}
else if ((PlayField16[ MurphyPosIndex+1+FieldWidth*2 ]) === 20){ PlayField16[ MurphyPosIndex ]= 0; MurphyPosIndex+= +1 +2*FieldWidth; PlayField16[ MurphyPosIndex ]= fiMurphy;RedDiskCount +=1;}
      }
    }
