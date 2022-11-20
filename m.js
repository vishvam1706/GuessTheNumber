// console.log("op");

let gtn = document.getElementById('gtn');
let check = document.getElementById('check');
let main = document.getElementById('main');
let last = document.getElementById('last');
let retry = document.getElementById('retry');
let hint = document.getElementById('hint');
let gameName = document.getElementById('gameName');


let op;

op = parseInt(Math.random() * 100);

// console.log(op);

let ch = 10;
check.addEventListener('click', () => {
    // console.log(Number(gtn.value));
    if (op == Number(gtn.value)) {
        main.style.backgroundImage = "radial-gradient(circle, rgba(251,63,161,1) 0%, rgba(243,178,64,1) 31%, rgba(70,252,204,1) 100%)";
        last.innerText = "(: You Win The Game :)";
        last.style.color = "#000";
        check.disabled = true;
        retry.innerText = "Play Again?";
        hint.innerText = '';
        gameName.style.color = "#000";
    }
    else {
        ch = ch - 1;
        last.innerText=`Wrong Guess ${ch} Chance Left`;
        if(ch==0)
        {
            last.innerText = "You Lose The Game";
            check.disabled = true;
            check.style.borderColor = "red";
            hint.innerText = '';
            gtn.value='';
        }
        // console.log(ch);
    }
    if (ch==0 && Number(gtn.value)!=op || op == Number(gtn.value)) {
        hint.innerText = `${op} Is Right Number`;
    }
    else if(Number(gtn.value)>op){
        hint.innerText = 'Enter The Smaller Number';
        gtn.value='';
    }
    else
    {
        hint.innerText = 'Enter The Bigger Number';
        gtn.value='';
    }
});
retry.addEventListener('click',()=>{
    location.reload();
});
gtn.value='';