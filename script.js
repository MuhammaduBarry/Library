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
const myLibrary = [];

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
    this.bookInput = function () {
      // declaration for our form values
      let author = authorInput.value;
      let title = titleInput.value;
      let number = numberInput.value;

      console.log(`author: ${author}`);
      console.log(`title: ${title}`);
      console.log(`pages: ${number}`);
      console.log("book submitted Thank you");

      // Reset form values
      authorInput.value = "";
      titleInput.value = "";
      numberInput.value = "";

      formContainer.removeChild(form);
    };
  }
}

// to be continued
const test = new AddToLibrary();

const AddForm = () => {
  addBookButton.addEventListener("click", getForm);
  submitFormInput.addEventListener("click", (e) => {
    e.preventDefault();
    test.bookInput();
  });
  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "e" || e.key == "E") {
        e.preventDefault();
    }
  })
};

AddForm();
