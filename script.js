const addBookButton = document.querySelector("#add-book-button");
const formContainer = document.querySelector(".form-container");

// this is our form elements and values
const form = document.createElement("form");
const authorInput = document.createElement("input");
const titleInput = document.createElement("input");
const numberInput = document.createElement("input");
const submitFormInput = document.createElement("input");

// this function lets our form to appear for our user input
const getForm = () => {
  authorInput.type = "text";
  authorInput.placeholder = "Author";
  authorInput.id = "author-input";
  form.appendChild(authorInput);

  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.id = "title-input";
  form.appendChild(titleInput);

  numberInput.type = "number";
  numberInput.placeholder = "Pages";
  numberInput.id = "number-input";
  numberInput.min = 0;
  numberInput.inputMode = "numeric";
  form.appendChild(numberInput);

  submitFormInput.type = "submit";
  submitFormInput.value = "submit";
  submitFormInput.id = "submit-form-input";
  form.appendChild(submitFormInput);
  submitFormInput.addEventListener("click", (e) => {
    e.preventDefault();
  });

  formContainer.appendChild(form);
};

function addFormLimit() {
  addBookButton.addEventListener("click", getForm);
}
addFormLimit();

const myLibrary = [];

const author = authorInput.value;
const title = titleInput.value;
const number = numberInput.value;

class Book {
  constructor(author, title, number) {
    this.author = author;
    this.title = title;
    this.number = number;
  }
}
class AddToLibrary extends Book {
  constructor(author, title, number) {
    super(author, title, number);
    this.test = function () {
      submitFormInput.addEventListener("click", function () {
        console.log(`author: ${author}`);
        console.log(`title: ${title}`);
        console.log(`pages: ${number}`);
        console.log("book submitted Thank you");
      });
    };
  }
}

const harryPotter = new AddToLibrary();
harryPotter.test();
