let user_score = 0;
let bot_score = 0;
let user_score_span = document.getElementById('user_score');
let bot_score_span = document.getElementById('bot_score');
let score_board_div = document.querySelector('.score_board');
let result_div = document.getElementById('result');
let msg = document.getElementById('message');
let rock_div = document.getElementById('r');
let paper_div = document.getElementById('p');
let scissors_div = document.getElementById('s');

function Change_Name(userChoice) {
    if(userChoice === "r") return "Rock";
    if(userChoice === "p") return "Paper";
    if(userChoice === "s") return "Scissors";

}

function bot_choice() {
    let random = ['r', 'p', 's'];
    let random_choice = Math.floor(Math.random() * 3);
    return (random[random_choice]);
}
function win(userChoice , random_choice) {
    user_score++;
    document.getElementById('user_score').innerHTML = user_score;
    result_div.innerText = "You Choose "+ Change_Name(userChoice) + " And Bot Choose "+Change_Name(random_choice) +  ` "YOU WON!!🔥"`;
    // console.log(user, comp);
}
function lose(userChoice , random_choice) {
    console.log("lose");
    bot_score++;
    document.getElementById('bot_score').innerHTML = bot_score;
    result_div.innerText = "You Choose "+ Change_Name(userChoice) + " And Bot Choose "+Change_Name(random_choice) +` "YOU LOST!!"`
    // console.log(user, comp);
}
    function draw(userChoice , random_choice) {
        console.log("draw");
        // console.log(user, comp);
        // user_score++;
        // console.log(res);
        // console.log(user_score);
        result_div.innerText = "You Choose "+ Change_Name(userChoice) + " And Bot Choose "+Change_Name(random_choice) + ` "Its a Draw!!"`
    }

    function game(userChoice) {
        let random_choice = bot_choice();
        // console.log("User_Choice -->" + userChoice);
        // console.log("Random_choice -->" + random_choice);
        let res = userChoice + random_choice;
        switch (res) {
            case "rs":
            case "sp":
            case "pr":
                win(userChoice , random_choice);
                break;
            case "rp":
            case "sr":
            case "ps":
                lose(userChoice , random_choice);
                break;
            case "rr":
            case "ss":
            case "pp":
                draw(userChoice , random_choice);
                break;

        }
    }
   

    function main() {
        rock_div.addEventListener('click', function () {
            game("r");
        });
        paper_div.addEventListener('click', function () {
            game("p");
        });
        scissors_div.addEventListener('click', function () {
            game("s");
        });
    }

    main();
   
