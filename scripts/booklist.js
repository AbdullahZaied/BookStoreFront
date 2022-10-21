async function populate() {

const requestURL = 'https://localhost:7193/api/Book';
const request = new Request(requestURL);

const response = await fetch(request);

const books = await response.json();

populateHeroes(books);
}

function populateHeroes(obj) {
    const section = document.querySelector('.book-container');

    for (const book of obj) {
        const bookDiv = document.createElement('div');
        bookDiv.className = "book";
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');

        myPara1.textContent = book.id;
        myPara2.textContent = book.bookName;
        myPara3.textContent = book.author;
        myPara4.textContent = book.category;

        bookDiv.appendChild(myPara1);
        bookDiv.appendChild(myPara2);
        bookDiv.appendChild(myPara3);
        bookDiv.appendChild(myPara4);

        section.appendChild(bookDiv);
    }
}

populate();

