function enableAudio() {
  const video = document.getElementById("bg-video");
  video.muted = false;
  video.play();
}
const decr=document.getElementById("decr");
const reset=document.getElementById("reset");
const incr=document.getElementById("incr");
const labelcount=document.getElementById("labelcount");

 let count = 0;

 incr.onclick=function(){
    count++;
    labelcount.textContent=count;
 }

 decr.onclick=function(){
    count--;
    labelcount.textContent=count;
 }

 reset.onclick=function(){
    count=0;
    labelcount.textContent=count;
 }
