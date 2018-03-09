let btn = document.getElementById("add");
let name = document.getElementById("nome");
let age = document.getElementById("idade");

btn.addEventListener('click', ()=>{
    $.post("/user", {nome :"mathias", idade:17}, function(data){
        console.log(data);
    })
});