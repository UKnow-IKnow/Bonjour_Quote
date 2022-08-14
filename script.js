fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(quoteData =>{
        const quoteText = quoteData.content;
        const quoteElement = document.getElementById('quoteElement');

        quoteElement.innerHTML=quoteText
    })