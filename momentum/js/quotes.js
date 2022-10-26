const quotes = [
    {
        quote: "Are you tired? If you don't walk today, you will have to run tomorrow",
        author: "Carles Puyol",
    },
    {
        quote:"It's lack of faith that makes people afraid of meeting challenges, and I believed in myself.",
        author:"Muhammad Ali",
    },
    {
        quote:"The harder the battle, the sweeter the victory.",
        author:"Les Brown",
    },
    {
        quote:"You miss 100% of the shots you don't take.",
        author:"Wayne Gretzky",
    },
    {
        quote:"Make each day your masterpiece.",
        author:"John Wooden",
    },
    {
        quote:"You have expect things of yourself before you can do them.",
        author:"Michael Jordan",
    },
    {
        quote:"A champion is someone who gets up when he can't.",
        author:"Jack Dempsey",
    },
    {
        quote:"It ain't over 'till it's over.",
        author:"Yogi Berra",
    },
    {
        quote:"Pain is temporary. Quitting lasts forever.",
        author:"Mario cipollini",
    },
    {
        quote:"Success is where preparation and opportunity meet.",
        author:"Bobby Unser",
    },
    {
        quote:"if you are afraid of failure you don't deserve to be successfull!",
        author:"Charles Barkley",
    },
    {
        quote:"Run when you can, walk if you have to, crawl if you must just never give up.",
        author:"Dean Karnazes",
    },
    {
        quote:"Winners never quit and quitters never win.",
        author:"Vince Lombardi",
    },
    {
        quote:"I once cried because I had no shoes to play football with my friends, but one day I saw a man who had no feet, and i realized how rich I am.",
        author:"Zinedine Zidane",
    },
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;