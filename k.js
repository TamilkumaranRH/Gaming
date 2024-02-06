function search(){
    var a =document.getElementById("CALL OF DUTY");
    var b =document.getElementById("FREE FIRE");
    var c =document.getElementById("ASSASSIN CREED-3");
    var d =document.getElementById("GOD OF WAR");
   
    if(a.value=="CALL OF DUTY"&&b.value=="FREE FIRE"&&c.value=="ASSASSIN CREED-3"&&d.value=="GOD OF WAR"){
      console.log(a.value)
      console.log(b.value)
      console.log(c.value)
      console.log(d.value)
      alert("yes successfully done")
      a.value=""
      b.value=""
      c.value=""
      d.value=""
    }
    else{
      alert("login failed")
      a.value=""
      b.value=""
      c.value=""
      d.value=""
    }
  }