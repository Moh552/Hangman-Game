const letters="abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
// console.log(lettersArray);
let letterscon=document.querySelector(".letters");
lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let theletter = document.createTextNode(letter);
    span.appendChild(theletter);
    span.className='letterbox';
    letterscon.appendChild(span);
});
const words ={
    programing: ["php","javascript","go","scala","fortran","r","mysql","python"],
    movies: ["prestige","inception","parasite","interstellar","whiplash","memento","coco","up"],
    people : ["albert einstein","hitchcock","alexander","cleopatra","mahatma ghandi"],
    countries: ["syria","palestine","yemen","egypt","bahrain","Qatar"],
}

let allkey = Object.keys(words);
let random = Math.floor(Math.random() * allkey.length);
let randomname = allkey[random];

let randomvalue = words[randomname];

let randomvaluenumber = Math.floor(Math.random() * randomvalue.length);


let randomword = randomvalue[randomvaluenumber];
// console.log(randomword);
document.querySelector(".game_info .category span").innerHTML= randomname;
document.querySelector(".game_info .category p").innerHTML= `word to guess <span> ${randomname}</span> => ${randomvalue.join(" \\|/ ")}`;

let letterguess= document.querySelector(".letters_guess");
let lettersandspace = Array.from(randomword);
// console.log(lettersandspace);
lettersandspace.forEach(letter =>{
    let emptyspan =document.createElement("span");
    if(letter === ' '){
        emptyspan.className='with-span';
    }
    letterguess.appendChild(emptyspan);
});
let guessspan = document.querySelectorAll(".letters_guess span")

let wrong = 0;

let thedrow = document.querySelector(".hangman_draw");


document.addEventListener("click", (e) => {
    
    let thestatus = false;
    if(e.target.className === 'letterbox'){

        e.target.classList.add("clicked");
        let theclick = e.target.innerHTML.toLowerCase();
        // console.log(theclick);
        // console.log(lettersandspace);
        let thechose = Array.from(randomword);

        thechose.forEach((wordletter , wordindex) => {
            if(theclick === wordletter){
                // console.log(`found the letter ${index}`);
                
                thestatus = true;
                
                guessspan.forEach((span , spanindex) => {
                    if(wordindex === spanindex){
                        span.innerHTML = wordletter;
                        
                    }
                });
            
            }
        });
        
        if(thestatus !== true){
            wrong++;
            thedrow.classList.add(`wrong-${wrong}`);
            
            document.getElementById("fail").play();
            
            if(wrong ===8){
                endgame();

                letterscon.classList.add("finised");
            }
        }if(thestatus === true){
                win()
                document.getElementById("succes").play();
            }
        
    }
    
});
function endgame(){
    let div = document.createElement("div");
    
    let textdiv = createTextNode(`Game over , the word is ${randomword}`);
    div.appendChild(textdiv);
    div.className('popup');
    document.body.appendChild(div);
}
function win(){
    let div = document.createElement("div");
    let textdiv = createTextNode(`you win , the word is ${randomword}`);
    div.appendChild(textdiv);
    div.className('popup');
    document.body.appendChild(div);
}