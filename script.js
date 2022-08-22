function cd(cdate,dest){
var x = setInterval(function() {

    var now = new Date().getTime();
  var distance = cdate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
  dest.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    dest.innerHTML = "EXAM OVER";
  }
}, 1000);
}
var cddb = new Date("Aug 26, 2022 9:30:00").getTime();
var db  = document.querySelector('.db');
cd(cddb,db);
var cdpe = new Date("Aug 31, 2022 9:30:00").getTime();
var pe  = document.querySelector('.pe');
cd(cdpe,pe);
var cdci = new Date("Sep 2, 2022 9:30:00").getTime();
var ci  = document.querySelector('.ci');
cd(cdci,ci);
var cdgt = new Date("Sep 12, 2022 9:30:00").getTime();
var gt  = document.querySelector('.gt');
cd(cdgt,gt);
var cdos = new Date("Sep 14, 2022 9:30:00").getTime();
var os  = document.querySelector('.os');
cd(cdos,os);
var cdcoa = new Date("Sep 16, 2022 9:30:00").getTime();
var coa  = document.querySelector('.coa');
cd(cdcoa,coa);