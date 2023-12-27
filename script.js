const addBookButton = document.querySelector("#add-book-button");
const formContainer = document.querySelector(".form-container");
const mainBookContainer = document.querySelector(".main-book-container");
const spanTagHeader = document.querySelector(".span-i-tag-header");
const body = document.querySelector("body");

// creating form elements
const form = document.createElement("form");
const headerForm = document.createElement("h3");
const authorInput = document.createElement("input");
const titleInput = document.createElement("input");
const numberInput = document.createElement("input");
const submitFormInput = document.createElement("input");
const iTag = document.createElement("i");

// function to create the form
const getForm = () => {
  iTag.classList.add("bi", "bi-x", "x-css-style");

  headerForm.innerText = "Add New Book";
  headerForm.classList.add("header-form-style");
  // Configuring author input
  authorInput.type = "text";
  authorInput.placeholder = "Author";
  authorInput.id = "author-input";
  authorInput.autocomplete = "off";

  // Configuring title input
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.id = "title-input";
  titleInput.autocomplete = "off";

  // Configuring number input
  numberInput.type = "number";
  numberInput.placeholder = "Pages";
  numberInput.id = "number-input";
  numberInput.min = 0;
  numberInput.inputMode = "numeric";

  // Configuring submit button
  submitFormInput.type = "submit";
  submitFormInput.value = "submit";
  submitFormInput.id = "submit-form-input";

  // Configuring form animation
  console.log(form);
  form.classList.add("animate__animated", "animate__pulse");

  // Appending the form to the form container
  form.appendChild(iTag);
  form.appendChild(headerForm);
  form.appendChild(authorInput);
  form.appendChild(titleInput);
  form.appendChild(numberInput);
  form.appendChild(submitFormInput);
  formContainer.appendChild(form);

  body.classList.add("overlay");

  console.log("opening form");
};

// class constructor for Book
class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
  }
}

// array to store books
let myLibrary = [];

// function to create a new book card and add it to the library
const addToLibrary = () => {
  // set required attribute to true
  authorInput.required = true;
  titleInput.required = true;
  numberInput.required = true;

  // checks if it's true if not it will report it down below
  if (form.checkValidity()) {
    // creating a new book object
    const newBook = new Book(
      authorInput.value,
      titleInput.value,
      numberInput.value
    );

    // adding our new books to our array
    myLibrary.push(newBook);

    // clearing existing book cards
    mainBookContainer.innerHTML = "";

    authorInput.setAttribute("required", "true");
    titleInput.setAttribute("required", "true");
    numberInput.setAttribute("required", "true");

    // Loop through the library array and display each book
    // book in this case is our newBook
    myLibrary.forEach((book) => {
      // Create new elements for each book
      const newBookCardContainer = document.createElement("div");
      newBookCardContainer.classList.add("card-container");

      const newAuthorTag = document.createElement("h3");
      newAuthorTag.classList.add("card-author-display");
      newAuthorTag.innerText = `Author: ${book.author}`;

      const newTitleTag = document.createElement("h3");
      newTitleTag.classList.add("card-title-display");
      newTitleTag.innerText = `Title: ${book.title}`;

      const newNumberTag = document.createElement("h3");
      newNumberTag.classList.add("card-number-display");
      newNumberTag.innerText = `Pages: ${book.pages}`;

      const newSliderContainer = document.createElement("div");
      newSliderContainer.classList.add("slider-container");

      const newReadToggle = document.createElement("button");
      newReadToggle.innerText = "READING";
      newReadToggle.classList.add("read-button");

      const removeCardButton = document.createElement("button");
      removeCardButton.innerText = "REMOVE";
      removeCardButton.classList.add("remove-card-button");
      removeCardButton.style.add = "color";

      let isReading = true;

      newReadToggle.addEventListener("click", () => {
        if (isReading) {
          newReadToggle.style.backgroundColor = "red";
          newReadToggle.innerText = "FINISHED";
          newReadToggle.style.color = "black";
        } else {
          newReadToggle.style.backgroundColor = "";
          newReadToggle.innerText = "READING";
          newReadToggle.style.color = "black";
        }

        isReading = !isReading;
      });

      // append elements to the new card container
      newBookCardContainer.appendChild(newAuthorTag);
      newBookCardContainer.appendChild(newTitleTag);
      newBookCardContainer.appendChild(newNumberTag);
      newBookCardContainer.appendChild(newSliderContainer);
      newBookCardContainer.appendChild(removeCardButton);
      newSliderContainer.appendChild(newReadToggle);

      mainBookContainer.appendChild(newBookCardContainer);
    });

    body.classList.remove("overlay");

    // reset form values
    authorInput.value = "";
    titleInput.value = "";
    numberInput.value = "";

    // remove the form
    formContainer.removeChild(form);
  } else {
    form.reportValidity();
  }
};

// Event listeners for form and submit button
const addFormAndRemove = () => {
  // event listener to show the form
  addBookButton.addEventListener("click", getForm);

  // event listener for form submission
  submitFormInput.addEventListener("click", (e) => {
    e.preventDefault();

    // call addToLibrary
    addToLibrary();
  });

  // Input validation to prevent 'e' key in number input
  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "e" || e.key == "E") {
      e.preventDefault();
    }
  });
};

// this removes our form in case we did not mean to click it.
iTag.addEventListener("click", () => {
  formContainer.removeChild(form);
  body.classList.remove("overlay");
});
// when we click our span and itag we refresh our page
spanTagHeader.addEventListener("click", () => {
  location.reload();
});

const domRemoval = () => {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-card-button")) {
      const removeCardButton = event.target;

      // this returns our card Container to be used
      const bookCardContainer = removeCardButton.closest(".card-container");

      // this turns our mainBookContainer into an array and returns the index of our book container
      const indexToRemove = Array.from(mainBookContainer.children).indexOf(
        bookCardContainer
      );
      if (bookCardContainer) {
        bookCardContainer.remove();
        myLibrary.splice(indexToRemove, 1);
      }
    }
  });
};

// we call our function to execute our form and card.
addFormAndRemove();

domRemoval();
