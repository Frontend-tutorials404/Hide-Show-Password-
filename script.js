function show(){
    var x = document.getElementById("tag");
    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}
