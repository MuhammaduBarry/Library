const addBookButton = document.querySelector("#add-book-button");
const formContainer = document.querySelector(".form-container");
const mainBookContainer = document.querySelector(".main-book-container");
const body = document.querySelector("body");

// Creating form elements
const form = document.createElement("form");
const authorInput = document.createElement("input");
const titleInput = document.createElement("input");
const numberInput = document.createElement("input");
const submitFormInput = document.createElement("input");

// our overlay form
const overlay = () => {
  // Define isOverlay variable
  let isOverlay = false;

  // Function to toggle overlay class
  const toggleOverlay = () => {
    if (isOverlay) {
      body.classList.remove("overlay");
    } else {
      body.classList.add("overlay");
    }

    // Update the isOverlay variable after toggling the class
    isOverlay = !isOverlay;
  };

  // Event listener for addBookButton
  addBookButton.addEventListener("click", toggleOverlay);

  submitFormInput.addEventListener("click", toggleOverlay);
};

// Function to create the form
const getForm = () => {
  // Configuring author input
  authorInput.type = "text";
  authorInput.placeholder = "Author";
  authorInput.id = "author-input";
  authorInput.autocomplete = "off";
  form.appendChild(authorInput);

  // Configuring title input
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.id = "title-input";
  titleInput.autocomplete = "off";
  form.appendChild(titleInput);

  // Configuring number input
  numberInput.type = "number";
  numberInput.placeholder = "Pages";
  numberInput.id = "number-input";
  numberInput.min = 0;
  numberInput.inputMode = "numeric";
  form.appendChild(numberInput);

  // Configuring submit button
  submitFormInput.type = "submit";
  submitFormInput.value = "submit";
  submitFormInput.id = "submit-form-input";
  form.appendChild(submitFormInput);

  // Appending the form to the form container
  formContainer.appendChild(form);
};

// Class constructor for Book
class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
  }
}

// Array to store books
let myLibrary = [];

// Function to create a new book card and add it to the library
const addToLibrary = () => {
  // Create a new book object
  const newBook = new Book(
    authorInput.value,
    titleInput.value,
    numberInput.value
  );

  // Add the new book to the library array
  myLibrary.push(newBook);

  // Clear existing book cards
  mainBookContainer.innerHTML = "";

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

    let isReading = true;

    newReadToggle.addEventListener("click", () => {
      if (isReading) {
        newReadToggle.style.backgroundColor = "red";
        newReadToggle.innerText = "FINISHED";
      } else {
        newReadToggle.style.backgroundColor = "";
        newReadToggle.innerText = "READING";
      }

      isReading = !isReading;
    });

    // Append elements to the new card container
    newBookCardContainer.appendChild(newAuthorTag);
    newBookCardContainer.appendChild(newTitleTag);
    newBookCardContainer.appendChild(newNumberTag);

    newSliderContainer.appendChild(newReadToggle);
    newBookCardContainer.appendChild(newSliderContainer);

    mainBookContainer.appendChild(newBookCardContainer);
  });

  // Reset form values
  authorInput.value = "";
  titleInput.value = "";
  numberInput.value = "";

  // Remove the form
  formContainer.removeChild(form);
};

// Event listeners for form and submit button
const addFormAndRemove = () => {
  // Event listener to show the form
  addBookButton.addEventListener("click", getForm);

  // Event listener for form submission
  submitFormInput.addEventListener("click", (e) => {
    e.preventDefault();
    // Call addToLibrary when the form is submitted
    addToLibrary();
  });

  // Input validation to prevent 'e' key in number input
  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "e" || e.key == "E") {
      e.preventDefault();
    }
  });
};

// Initialize the form and event listeners
addFormAndRemove();

document.addEventListener("DOMContentLoaded", overlay);
