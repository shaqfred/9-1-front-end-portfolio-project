const form = document.querySelector("form");
const URL_PAGE = (`https://quote-garden.herokuapp.com/api/v3/quotes`) ;

fetch(URL_PAGE)
.then(res=>res.json())
.then(resJson=>console.log(resJson))
.catch(err=>console.log(err))


 
const quoteList = document.querySelector("main.centered");

let quotelist =document.querySelector('ul');
quoteList.addEventListener(`click`,
    function(ev) {
        if (ev.target.quoteList === 'LI') {

            ev.target.classList.toggle(`checked`);
        }
    })


const updatePage =(quote) => {
    

    let article = document.createElement("article");
    article.classList.add("card");

    let category = document.createElement("h2");
    category.textContent = `${quote.category}`;
    article.append(category);

    let quoteText = document.createElement("p");
    quoteText.textContent = `${quote.quoteText}`
    article.append(quoteText);

    let showAnswerButton = document.createElement("button");
    showAnswerButton.textContent = `${quote.quoteAuthor}`;
    article.append(showAnswerButton);

    let answer = document.createElement("p");
    answer.classList.add("hidden");
    answer.textContent = `${quote.quoteAuthor}`;
    article.append(answer);

    
    // let quoteAuthor =document.createElement("");
    // quoteAuthor.textContent = `${quoteText}`;
    // article.append(quoteAuthor);

    quoteText.addEventListener("click", (event)=>{
        event.target.classList.toggle("hidden");
    });

    quoteList.append(article);

};
const showError = (error) =>{
    console.log(error);
    let err = document.createElement("p");
    err.textContent = `${error}`;
    document.body.prepend(err);
};




form.addEventListener("submit",(event)=> {
    event.preventDefault();

    fetch(URL_PAGE)
    .then((result)=> result.json())
    .then((json)=> {
        console.log(json)
      json.data.forEach((obj) => updatePage(obj));
    })
    .catch(showError);

});

