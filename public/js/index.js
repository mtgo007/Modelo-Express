let btn = document.getElementById("btn-user");

btn.addEventListener('click', ()=>{
    $.ajax({
        url: "http://fiddle.jshell.net/favicon.png",
    })
        .done(function( data ) {
          console.log(data);
        });
});