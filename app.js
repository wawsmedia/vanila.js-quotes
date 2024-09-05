
// inital page load
function changeImage(){
    
    const images = [
                'assets/backGround1.jpg',
                'assets/backGround2.jpg',
                'assets/backGround3.jpg',
                'assets/backGround4.jpg',
                'assets/backGround5.jpg',
                'assets/backGround6.jpg',
                'assets/backGround7.jpg'
            ];
    const backgroundImageChangeElement = document.getElementsByTagName("body")[0]
    const randomIndex = Math.floor(Math.random() * images.length)
    
    backgroundImageChangeElement.style.backgroundImage = `url('${images[randomIndex]}')`

}

document.addEventListener("DOMContentLoaded" , changeImage )

// change image with next button

const changeImageWithButton = document.getElementsByClassName("next-quote")[0]
changeImageWithButton.addEventListener("click" , changeImage)

// quotes change

const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
    },
    {
        quote: "The best way to predict your future is to create it.",
        person: "Peter Drucker"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        person: "Albert Schweitzer"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        person: "Dalai Lama"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "The only impossible journey is the one you never beginn.",
        person: "Tony Robbins"
    }
];

const quote = document.querySelector(".text");
const person = document.querySelector(".person");

function changeQuote () {
    const quoteRandomIndex = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[quoteRandomIndex].quote
    person.innerHTML = quotes[quoteRandomIndex].person
}

changeImageWithButton.addEventListener("click" , changeQuote)
document.addEventListener("DOMContentLoaded", changeQuote)