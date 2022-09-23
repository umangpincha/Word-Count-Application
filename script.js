let result = document.querySelector(".my-text");
let words = document.querySelector(".my-textarea");
let count = 0;
words.addEventListener("keyup" , (event)=>{
    const key = event.key;

    if (key == "Backspace") {
        count = count-1;
        result.textContent = count;
    }
    else if(key == " "){
        result.textContent = count;
    }
    else{
        count = count+1;
        result.textContent = count;
    }
});