let result = document.querySelector(".my-text");
let words = document.querySelector(".my-textarea");
let count = 0;
words.addEventListener("keyup" , (event)=>{
    const key = event.key;
    console.log(count);
    console.log(words.value);
    if (key === "Backspace" && count === 0){
        result.textContent = "0";
        return
    }
    if (key == "Backspace" && count > 0) {
        count = count-1;
        result.textContent = count;
        console.log(count);
    }
    else if(key == " "){
        result.textContent = count;
    }
    else{
        count = count+1;
        result.textContent = count;
    }
});