let result = document.getElementById('result');
let btns = document.getElementById('btns');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let reset = document.getElementById('reset');

let results = 0;

btns.addEventListener('click', function(e){
    if(e.target.id === "inc"){
        results ++;
        result.innerHTML = results;

    }else if(e.target.id === "dec"){
        results--;
        result.innerHTML = results;
    }else if(e.target.id === "reset"){
        results = 0;
        result.innerHTML = results;
    }
});