const addBookButton = document.querySelector("#add-book-button");
const formContainer = document.querySelector(".form-container");

// this function lets our form to appear for our user input
const createForm = () => {
  const form = document.createElement("form");
  const authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.placeholder = "Author";
  authorInput.id = "author-input";
  form.appendChild(authorInput);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.id = "title-input";
  form.appendChild(titleInput);

  const numberInput = document.createElement("input");
  numberInput.type = "number";
  numberInput.placeholder = "Pages";
  numberInput.id = "number-input";
  numberInput.min = 0;
  numberInput.inputMode = "numeric";
  form.appendChild(numberInput);

  const submitFormInput = document.createElement("input");
  submitFormInput.type = "submit";
  submitFormInput.value = "submit";
  submitFormInput.id = "submit-form-input";
  form.appendChild(submitFormInput);
  submitFormInput.addEventListener("click", (e) => {
    e.preventDefault();
  });

  const inputValues = () => {
    submitFormInput.addEventListener("click", () => {
      const authorInputValue = authorInput.value;
      const titleInputValue = titleInput.value;
      const numberInputValue = numberInput.value;

      console.log("form Received");
      console.log(`author: ${authorInputValue}`);
      console.log(`title: ${titleInputValue}`);
      console.log(`Pages: ${numberInputValue}`);
    });
  };

  formContainer.appendChild(form);
  return inputValues();
};
const addBookLimit = () => {
  addBookButton.addEventListener("click", createForm, { once: true });
};
addBookLimit();
