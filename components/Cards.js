// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function MakeArticleCard( articleObj ) {

    const card = document.createElement('div')
    const artHeadline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const signature = document.createElement('div')

    card.classList.add('card')
    artHeadline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    card.appendChild(artHeadline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(authorImage)
    author.appendChild(signature)

    artHeadline.textContent = articleObj.headline
    authorImage.src = articleObj.authorPhoto
    signature.textContent = articleObj.authorName

    card.addEventListener('click', evt => {
        console.log(articleObj.headline)
    })

    return card
}

const cardContainer = document.querySelector('.cards-container')


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles)
        const articleArray = Object.values(response.data.articles)
        console.log(articleArray)
        articleArray.forEach(topic => {
            topic.forEach(article => {
                const newArticle = MakeArticleCard(article)
                cardContainer.appendChild(newArticle)
            })
        })
    })
    .catch(err => {
        debugger
    })