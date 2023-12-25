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
  authorInput.autocomplete = "off";
  form.appendChild(authorInput);

  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.id = "title-input";
  titleInput.autocomplete = "off";
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

  formContainer.appendChild(form);
};

// these are our elements for our card display
const mainBookContainer = document.querySelector(".main-book-container");
const bookCardContainer = document.createElement("div");
bookCardContainer.classList.add("card-container");
const authorTag = document.createElement("h3");
authorTag.classList.add("card-author-display");
const titleTag = document.createElement("h3");
titleTag.classList.add("card-title-display");
const numberTag = document.createElement("h3");
numberTag.classList.add("card-number-display");
const readToggle = document.createElement("input");
readToggle.type = "checkbox";
readToggle.classList.add("slider");
const label = document.createElement("label");
label.for = "slider";

// we created a class constructor
class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.bookInput = function () {
      // this is were we construct our card for our dom display
      authorTag.innerText = author;
      bookCardContainer.appendChild(authorTag);
      titleTag.innerText = title;
      bookCardContainer.appendChild(titleTag);
      numberTag.innerText = pages;
      bookCardContainer.appendChild(numberTag);
      bookCardContainer.appendChild(readToggle);

      mainBookContainer.appendChild(bookCardContainer);
    };
  }
}

// Our New Books Get Placed In Here
let myLibrary = [];

// this function is used to add our book into the library array
const addToLibrary = () => {
  // this is used to replace our class constructor to receive our input values
  const author = authorInput.value;
  const title = titleInput.value;
  const pages = numberInput.value;

  // this creates a new book class that receives our new input values
  const userBook = new Book(author, title, pages);
  userBook.bookInput();
  myLibrary.push(userBook);

  myLibrary.map((book) => {
    console.log("myLibrary:", book);
  });
};

const addFormAndRemove = () => {
  addBookButton.addEventListener("click", getForm);
  submitFormInput.addEventListener("click", (e) => {
    e.preventDefault();

    addToLibrary();

    // Reset form values
    authorInput.value = "";
    titleInput.value = "";
    numberInput.value = "";

    formContainer.removeChild(form);
  });

  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "e" || e.key == "E") {
      e.preventDefault();
    }
  });
};

addFormAndRemove();
