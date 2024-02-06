function login(){
    var a=document.getElementById("email");
    var b=document.getElementById("password");
    if(a.value=="tamil@gmail.com" && b.value=="admin"){
        console.log(a.value)
        console.log(b.value)
        alert("login successful")
        a.value=""
        b.value=""
    }
    else{
        alert("login failed!!")
        a.value=""
        b.value=""
    }
}