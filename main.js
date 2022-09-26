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

    let quoteGenre = document.createElement("h2");
    quoteGenre.textContent = `${quote.quoteGenre}`;
    article.append(quoteGenre);

    let quoteText = document.createElement("p");
    quoteText.textContent = `${quote.quoteText}`
    article.append(quoteText);

    let showAnswerButton = document.createElement("button");
    showAnswerButton.textContent = `reveal answer`;
    article.append(showAnswerButton);


    
    
    quoteList.append(article);


    showAnswerButton.addEventListener("click", (event)=>{
        let hiddenAnswer = document.createElement("p");
    
        hiddenAnswer.textContent = `${quote.quoteAuthor}`;
        article.append(hiddenAnswer);
        
    });



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

