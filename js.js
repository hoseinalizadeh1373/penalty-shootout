let ball = document.getElementById('ball');
let darvazeh = document.getElementById("darvazeh");

let startx = 0;
let starty = 0;
let endshootx =0
let endshooty =0;
let w =0;
let h =0;

let left_darvazeh = darvazeh.offsetLeft;
let right = darvazeh.offsetWidth;
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
  
  