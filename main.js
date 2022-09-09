const url = api 
fetch(url)
.then ((res) => res.json())
.then((resJson) => console.log (resJson))
.catch((err)=> console.log(err));