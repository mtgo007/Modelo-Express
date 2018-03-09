let btn = document.getElementById("btn-user");
let data;
let user = document.getElementById("user");


btn.addEventListener('click', ()=>{
    var xhr = new XMLHttpRequest();

    xhr.open('GET', "/user", true);

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            for(dados of data){
                let p = document.createElement("p");
                p.innerHTML = "nome: " + dados.nome + " idade: " + dados.idade;
                user.appendChild(p);
            }
        }
    }

    xhr.send();
});