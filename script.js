const addBookButton = document.querySelector("#add-book-button");
const formContainer = document.querySelector(".form-container");

// this is our form elements and values

const form = document.createElement("form");
const authorInput = document.createElement("input");
const titleInput = document.createElement("input");
const numberInput = document.createElement("input");
const submitFormInput = document.createElement("input");
const authorInputValue = authorInput.value;
const titleInputValue = titleInput.value;
const numberInputValue = numberInput.value;

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

const inputValues = () => {
  submitFormInput.addEventListener("click", () => {
    console.log("form Received");
    console.log(`author: ${authorInputValue}`);
    console.log(`title: ${titleInputValue}`);
    console.log(`Pages: ${numberInputValue}`);

    const hideForm = form.style.display = "none";
    return hideForm;
  });
};

function addFormLimit(){
    addBookButton.addEventListener('click', getForm);
    inputValues();
}
addFormLimit();