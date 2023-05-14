// varibales
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
quote: "The best way to find yourself is to lose yourself in the service of others.",
person: "Mahamta Ghandi"
},
{
    quote: "If you want to live a happy life, the it to a goal, not people or things",
    person: "Alber Einstein"
},
{
quote: "your time is limited, so don't waste it living someone elses life",
person: "Steve Jobs"
}, ];

btn.addEventListener('click', function(){
    let random=Math.floor(Math.random() * quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})
