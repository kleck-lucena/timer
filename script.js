var sec= 00;
var min=00;
var hr=00;

var interval

function twoNumbers(number){
  if(number<10){
    return('0'+number)
  }else{
    return(number)
  }
}

function start() {
  clock()
 interval= setInterval(clock,1000);
}

function pause(){
  clearInterval(interval);
}

function stop(){
  clearInterval(interval)
  sec=0
  min=0
  hr=0
  document.getElementById('watch').innerHTML="00:00:00"
}

function clock(){
  sec++
  if(sec==60){
    min++
    sec=0
    if(min==60){
      min=0
      hr++
    }
  }
document.getElementById('watch').innerText= twoNumbers(hr) +':' + twoNumbers(min) +':'+twoNumbers(sec)
}