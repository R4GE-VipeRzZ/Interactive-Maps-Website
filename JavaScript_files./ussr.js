$(document).ready( function () {
  onPageLoad();
});

var currentMap = "ussr_1944";

function onPageLoad(){
    document.getElementById("ussr_1924").style.display = "none";
    document.getElementById("ussr_1991").style.display = "none";
    document.getElementById("ussr_1944").style.display = "block";
    currentMap = "ussr_1944";
    console.log("On load: ", currentMap);
    setUpSVG();
}

document.getElementById("slider").oninput = function() {
    manageMaps()
};

function manageMaps() {
    console.log("Slider Active")
    var val = document.getElementById("slider").value //gets the oninput value
    
    if(val == 2){ /*View British Empire 1969*/
        document.getElementById("ussr_1924").style.display = "none";
        document.getElementById("ussr_1944").style.display = "none";
        document.getElementById("ussr_1991").style.display = "block";
        currentMap = "ussr_1991";
        document.getElementById('slider_set_text').innerHTML ="1991";
    }else if(val == 1){ /*View British Empire 1919*/
        document.getElementById("ussr_1924").style.display = "none";
        document.getElementById("ussr_1991").style.display = "none";
        document.getElementById("ussr_1944").style.display = "block";
        currentMap = "ussr_1944";
        document.getElementById('slider_set_text').innerHTML ="1944";
    }else if(val == 0){ /*View British Empire 1854*/
        document.getElementById("ussr_1991").style.display = "none";
        document.getElementById("ussr_1944").style.display = "none";
        document.getElementById("ussr_1924").style.display = "block";
        currentMap = "ussr_1924";
        document.getElementById('slider_set_text').innerHTML ="1924";
    }else{ /*View British Empire 1603*/
        document.getElementById("ussr_1924").style.display = "none";
        document.getElementById("ussr_1991").style.display = "none";
        document.getElementById("ussr_1944").style.display = "block";
        currentMap = "ussr_1944";
        document.getElementById('slider_set_text').innerHTML ="1944";
    }
    
    console.log("Test: ", currentMap);
    setUpSVG();
}




















/* eslint-env es6 */

const NAV_MAP = {           /*This assigns the vaules for the key presses*/
    187: {act: 'zoom', dir: 1, name: 'in'},
    189: {act: 'zoom', dir: -1, name: 'out'},
    37: {act: 'move', dir: -1, name: 'left', axis: 0},
    38: {act: 'move', dir: -1, name: 'up', axis: 1},
    39: {act: 'move', dir: 1, name: 'right', axis: 0},
    40: {act: 'move', dir: 1, name: 'down', axis: 1}
};

function setUpSVG(){
    _SVG = document.getElementById(currentMap);
    console.log("Content of _SVG: ", _SVG);
    console.log("CurrentMap Var: ", currentMap);
    VB = _SVG.getAttribute('viewBox').split(' ').map(c => +c),
    DMAX = VB.slice(2), WMIN = 8, NF = 1;       /*NF sets the number of frames that the animation occurs over*/
}

let nav = null, tg = Array(4), f = 0, rID = null;

function update(){
    let k = ++f/NF, j = 1 - k, cvb = VB.slice();
    
    if(nav.act == 'zoom'){          /*This sets the new zoom value that will be added to the viewbox*/
        for(let i = 0; i < 4; i++){
            cvb[i] = j*VB[i] + k*tg[i]
        }
    }
    else if(nav.act == 'move'){     /*This sets the new axis value that will be added to the viewbox*/
        cvb[nav.axis] = j*VB[nav.axis] + k*tg[nav.axis]
    }
    
    console.log(cvb)
    
    _SVG.setAttribute('viewBox', cvb.join(' '));
    
    if(!(f%NF)){
        cancelAnimationFrame(rID);
        rID = nav = null;
        f = 0;
        tg = Array(4);
        /*console.log(VB)*/
        VB.splice(0, 4, ...cvb);        /*This adds the new viewbox values to the viewbox*/
        /*console.log(VB)*/
        return
       }
    
    rID = requestAnimationFrame(update)
}

addEventListener('keyup', e => {
    if(e.keyCode in NAV_MAP){       /*This check if the key that was pressed is in the NAV_MAP*/
        nav = NAV_MAP[e.keyCode];
        
        if(nav.act == 'zoom'){          /*This check if the key press is for zooming*/
           if((nav.dir == -1 && VB[2] >= DMAX[0]) || (nav.dir == 1 && VB[2] <= WMIN)){      /*This checks if the SVG full zoomed in or out*/
               console.log('Cannot zoom', nav.name, 'more');
               return
           }
            
            for(let i = 0; i < 2; i++){
                tg[i + 2] = VB[i + 2]/Math.pow(2, nav.dir);
                tg[i] = 0.5*(DMAX[i] - tg[i + 2])
            }
        }
        else if(nav.act == 'move'){
        console.log(VB[nav.axis]);
        if((nav.dir == -1 && VB[nav.axis] <= 0)||(nav.dir == 1 && (VB[nav.axis] - 1425) >= DMAX[nav.axis] - VB[nav.axis + 2])){  /*This chacks if the SVG if fully to the left right top or bottom*/
            console.log('cannot move', nav.name, "more");
            return
            }
            
            tg[nav.axis] = VB[nav.axis] + 0.5*nav.dir*VB[nav.axis + 2] 
        }
        
        update()
    }
}, false);