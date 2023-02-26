const form = document.querySelector("#quizForm");
const question1 = form.question1;
const question2 = form.question2;
const question3 = document.querySelectorAll(".question3");

form.addEventListener('submit', event => {
    event.preventDefault();
    let score = 0;
    let counter = 0;

    // Validate answer for question 1
    if(question1.value.toLowerCase() === "manila"){
        score++;
    }

    // Validate answer for question 2
    for(let i=0; i < question2.length; i++){
        if(question2[i].value === "13" && question2[i].checked){
            score++;
        }
    }

    
    // Validate answer for question 3
    for(let i=0; i < question3.length; i++){
        if(question3[i].value === "parrot" && question3[i].checked){
            counter++;
        }
        if(question3[i].value === "eagle" && question3[i].checked){
            counter++;
        }
        if(question3[i].value === "penguin" && question3[i].checked){
            counter--;
        }
        if(question3[i].value === "crow" && question3[i].checked){
            counter++;
        }

        if(counter === 3){
            score++;
        }
    }


    // Show Results
    document.querySelector('.quiz-results').style.display = 'block';
    document.querySelector(".quiz-score").innerHTML = score + "/" + 3; 


})

