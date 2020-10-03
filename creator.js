//this JavaScript Code outputs random Quotes from the following arrays

const quotesArray = [
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

function createQuote(){
    const rand = Number.parseInt(Math.random()*quotesArray.length + 1);
    document.querySelector('#quoteOut').textContent = `\"${quotesArray[random].quote}\"`;
    document.querySelector('#authorOut').textContent = `--${quotesArray[random].author}`;
    
}