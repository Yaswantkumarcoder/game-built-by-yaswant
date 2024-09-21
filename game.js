    var dist=0; 
      var k=0;
     var width=2000;
     var bottom=1400;
     var bottom2=2313;
     var liondist=8000;
     var helidist=2000;
     var cardist2=2000;
     var endgame=false;
     var r= setInterval(()=>{
     box1=document.getElementsByClassName('navbar2')[0];
     box2=document.getElementsByClassName('navbar5')[0];
     box3=document.getElementsByClassName('navbar5-0')[0];
     box4=document.getElementsByClassName('helimove')[0];
     box5=document.getElementsByClassName('car2')[0];
     dx=parseInt(window.getComputedStyle(box1,null).getPropertyValue('left'));
     dy=parseInt(window.getComputedStyle(box1,null).getPropertyValue('bottom'));
     ox=parseInt(window.getComputedStyle(box3,null).getPropertyValue('left'));
     oy=parseInt(window.getComputedStyle(box3,null).getPropertyValue('bottom'));
     hx=parseInt(window.getComputedStyle(box4,null).getPropertyValue('left'));
     hy=parseInt(window.getComputedStyle(box4,null).getPropertyValue('bottom'));
     cx=parseInt(window.getComputedStyle(box5,null).getPropertyValue('left'));
     cy=parseInt(window.getComputedStyle(box5,null).getPropertyValue('bottom'));
       var offsetX=ox-dx;
       var offsetY=Math.abs(oy-dy);
       var offsethX=hx-dx;
       var offsethY=Math.abs(hy-dy);
       var offsetcX=cx-dx;
       var offsetcY=Math.abs(cy-dy);
        console.log(offsetX);
        console.log(offsetY);
         if(offsetX<=150&&offsetX>=-200&&offsetY<=1400){
               var s="game-over";
               document.getElementsByClassName('navbar2')[0].innerHTML=s;
               endgame=true;
         }
         if(offsethX<=100&&offsethX>=-200&&offsethY>=1440){
          var s="game-over";
          document.getElementsByClassName('navbar2')[0].innerHTML=s;
          endgame=true;
    }
    if(offsetcX<=150&&offsetcX>=-200&&offsetcY<=1400){
      var s="game-over";
      document.getElementsByClassName('navbar2')[0].innerHTML=s;
      endgame=true;
}
      }
    ,5
    
  );
    
  function startgame(){
    var start=document.getElementsByClassName('navbar4')[0];
    start.style.display="none";
           var l=document.getElementsByClassName('navbar5')[0];
             var k=document.getElementsByClassName('navbar7')[0];
             var p=document.getElementsByClassName('navbar8')[0];
            var animate2=setInterval(animate2,6000);
          function animate2(){
              width+=500;
              l.style.width=width+"px";
          }
          var animate3=setInterval(animate3,6000);
          function animate3(){
              helidist+=500;
              k.style.width=helidist+"px";
          }
          var animate4=setInterval(animate4,9000);
          function animate4(){
            cardist2+=500;
            p.style.width=cardist2+"px";
          }

          }
   
   function skyfun(){
     var  m=document.getElementsByClassName('navbar2')[0];
    var r=document.getElementsByClassName('navbar6')[0];
   var k=document.getElementsByClassName('navbar5-0')[0];
      if(endgame===false){
     var  animate=setInterval(skyrocket,5);
      function skyrocket(){
          if(bottom<=1630){
          bottom+=40;
          bottom2+=40;
          //  if(endgame==false){
         m.style.bottom=bottom+"px";
         r.style.height=100+"px";
         r.style.width=100+"px";
         r.style.bottom=bottom2+"px";
           }
          
        else{
            clearInterval(animate);
        }
     }
    }
   }
   function fundown(){
    var m=document.getElementsByClassName('navbar2')[0];
    var r=document.getElementsByClassName('navbar6')[0];

     var animate=setInterval(animate,0.005);
    var animate2=setInterval(animate2,0.005);
    //  r.style.bottom="2460px";
    //  m.style.bottom="1550px";
      
    function animate(){

        if(bottom>=1400){
        bottom-=40;
        bottom2-=40;
        if(endgame==false){
       m.style.bottom=bottom+"px";
       r.style.bottom=bottom2+"px";
        }
      }
    
     else{
           r.style.bottom=0+"px"          
           clearInterval(animate);
     }
   }
  
   } 
   var count=0;
   function countscore(){
        var r= document.getElementsByClassName('score')[0];
        var animate=setInterval(funcountscore,20);
           function funcountscore(){
            count+=1;
            document.getElementsByClassName('score')[0].innerHTML=count;
           if(endgame){
          clearInterval(animate);
       } 
    } 
       
            //  var r=document.getElementsByClassName('navbar5')[0]; 
        // function animate2(){
        //   liondist-=100;
        //     r.style.left=liondist+"px"; 
        //   }
      }

       
