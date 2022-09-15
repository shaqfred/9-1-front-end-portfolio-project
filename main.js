const form = document.querySelector("form");
const URL_PAGE = (`https://quote-garden.herokuapp.com/api/v3/quotes`) ;

fetch(URL_PAGE)
.then(res=>res.json())
.then(resJson=>console.log(resJson))
.catch(err=>console.log(err))



const quotesList = document.querySelector("main.centered");

const updatePage =(quote) => {

    let article = document.createElement("article");
article.classList.add("card");

let category = document.createElement("h2");
category.textContent = `${quote.category}`;
article.append(category);

let quoteText = document.createElement("p");
quoteText.textContent = `${quote.quote}`
article.append(quoteText);

let showAnswerButton = document.createElement("button");
article.append(showAnswerButton);

let answer = document.createElement("p");
answer.classList.add("hidden");
answer.textContent = `${quote.correct_answer}`;
article.append(answer);

showAnswerButton.addEventListener("click", (event)=>{
    event.target.classList.toggle("hidden");
});

    quotesList.append(article);

};
const showError = (error) =>{
    console.log(error);
    let err = document.createElement("p");
    err.textContent = `${error}`;
    body.prepend(err);
};




form.addEventListener("submit",(event)=> {
    event.preventDefault();

    // fetch(URL_PAGE)
    // .then((result)=> result.json())
    // .then((json)=> {
    //   json.results.forEach((obj) => updatePage(obj));
    // })
    // // .catch(showError);

});

