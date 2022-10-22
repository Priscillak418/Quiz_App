const correctAnswers = ['A', 'A', 'A', 'B', 'A', 'A','B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')


form?.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;

    const userAnswers = [
        form.q1.value, 
        form.q2.value, 
        form.q3.value, 
        form.q4.value, 
        form.q5.value, 
        form.q6.value, 
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value,
    ]

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 10;
    
        }
    });

    //this takes you to the top of the document after you have hit submit to show you the score
    scrollTo(0,0)

    //show result on page  
    
    result.classList.remove('d-none')

    let output  = 0;
    
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${score}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output ++;
        }
    },100);
})