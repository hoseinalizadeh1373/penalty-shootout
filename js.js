let ball = document.getElementById('ball');

let startx = 0;
let starty = 0;
let endshootx =0
let endshooty =0;
let w =0;
let h =0;
ball.onmousedown = function(event){
    
    ball.style.zIndex =1000;
    
    document.body.append(ball);

    
function moveAt(pageX,pageY){
   ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
   ball.style.top = pageY - ball.offsetHeight / 2 + 'px';

}
startx= ball.offsetLeft;
starty = ball.offsetTop;
// moveAt(1000,600);

function onMouseMove(event){
    moveAt(event.pageX,event.pageY);
}

document.addEventListener('mousemove',onMouseMove);

ball.onmouseup= function(){
    document.removeEventListener('mousemove',onMouseMove);
    endshootx = ball.offsetLeft;
    endshooty =ball.offsetTop;
    w=ball.offsetWidth;
    h = ball.offsetHeight;
     moveAt(startx,starty);
     setTimeout(() => {
         ball.classList.add('rotate');
         
            let id =null;
            let x =endshootx - startx;
            let y = endshooty - starty;
            let pos=startx,pos2=starty;
            

            let root = document.documentElement;
            // setTimeout(function(){ root.style.setProperty('--leftkey', endshootx + "px"); }, 5000);
            root.style.setProperty('--leftkeyst',startx+"px");
            root.style.setProperty('--leftkey',endshootx+"px");
            root.style.setProperty('--topkeyst',starty+"px");
            root.style.setProperty('--topkey',endshooty+"px");
            ball.classList.add('tr');
            

            
            // clearInterval(id);
//             id = setInterval(frame,10);
//             let fx = endshootx - w /2 ;
//             let fy = endshooty - h /2 ;
//             alert(startx+" "+starty +"\n"+endshootx+" "+endshooty+"\n"+fx+" "+fy);
//             function frame(){


// if(starty==endshooty){
//     clearInterval(id);
// }
// else{
//     if(startx==endshootx){
//         startx=startx;
//     }
//     else
//     startx++;
//     starty--;
            
//             ball.style.top = starty + 'px';
//             ball.style.left = startx  + 'px';
// }

//                 // if( pos2 == fy){

//                 //     clearInterval(id);
                    
//                 // }else{
                    
//                 //     if(startx>=endshootx){
//                 //     pos--;
//                 //     }
//                 //     else if(startx<=endshootx){
//                 //         pos++;
//                 //     }
//                 //     else{
                        
//                 //         pos=0;
//                 //     }
//                 //     if(pos2 > endshooty){
//                 //         pos2 --;
//                 //     }
//                 //     else if(pos2< endshooty ){
//                 //         pos2++;
//                 //     }
//                 //     else {
//                 //         pos2 =starty;
//                 //     }

//                 //     if(pos2 < fy){
//                 //         pos2--;
//                 //     }
//                 //     // else{
//                 //         ball.style.top = pos2  + 'px';
//                 //     // }
//                 //     console.log(pos+"s"+pos2);
//                 //     // if(pos > fx ){
//                 //     //     pos++;
//                 //     // }
//                 //     // else{
                        
//                 //         ball.style.left = pos  + 'px';
//                 //     // }
                    
//                 // }

//             } 
         
//         //  moveAt(endshootx,endshooty);
     }, 1000);
};

};

ball.ondragstart = function(){
    return false;
}
/*
ball.onmousedown = function(event) {
    
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
  
    
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
};
    */
  
  