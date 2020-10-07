//this JavaScript Code outputs random Quotes from the following arrays

//This event will trigger when user clicks the 'Quote' button
$("#new-quote").click(function(){
  createQuote();
});

var quotesArray = [
    {'quote': 'Be yourself; everyone else is already taken.', 
     'author': 'Oscar Wilde'
    },
    {'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 
     'author': 'Albert Einstein'
    },
    {'quote': 'So many books, so little time.', 
     'author': 'Frank Zappa'
    },
    {'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.', 
     'author': 'Bernard M. Baruch'
    },
    {'quote': 'A room without books is like a body without a soul.', 
     'author': 'Marcus Tullius Cicero'
    },
    {'quote': 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.', 
     'author': 'Dr. Seuss'
    },
    {'quote': 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.', 
     'author': 'J.K. Rowling'
    },
];

//Updates the text/author field in the page
function createQuote(){
    const rand = Number.parseInt(Math.random()*quotesArray.length + 1);
    $("#text").text(quotesArray[rand].quote);
    $("#author").text(quotesArray[rand].author);
    
}