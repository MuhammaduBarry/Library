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
// Our New Books Get Placed In Here
let myLibrary = [];

// we created a class constructor
class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.bookInput = function () {
      console.log(`author: ${author}`);
      console.log(`title: ${title}`);
      console.log(`pages: ${pages}`);
      console.log("book submitted Thank you");
    };
  }
}

// we defined our class constructor values for our input Values
const addToLibrary = () => {
  const author = authorInput.value;
  const title = titleInput.value;
  const pages = numberInput.value;

  const userBook = new Book(author, title, pages);
  userBook.bookInput();
  myLibrary.push(userBook);
};

const AddForm = () => {
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

AddForm();
