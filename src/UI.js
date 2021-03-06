class UI {
  static renderBooks(library) {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = "";
    let fragment = document.createDocumentFragment();
    library.forEach(function (book, idx) {
      let bookCard = document.createElement("div");
      bookCard.setAttribute("class", "book-card d-flex flex-column");
      bookCard.setAttribute("data-index", idx);
      bookCard.innerHTML = `
                <div class="book-title pt-3 px-2 fw-bold text-center lh-sm fs-5">${
                  book.bookName
                }</div>
                <div class="book-author pt-2 px-2 text-center">${
                  book.bookAuthor
                }</div>
                <div class="book-pages pt-1 px-2 text-center fst-italic  text-muted">${
                  book.bookPages
                } pages</div>
                <div class="book-options d-flex justify-content-between py-3">
                    <span class="material-icons-outlined ms-3 read-mark">
                        ${book.bookRead ? "done" : "remove_red_eye"}
                    </span>                    
                    <span class="material-icons-outlined me-3 delete">
                        delete
                    </span>
                </div>`;
      fragment.appendChild(bookCard);
    });
    bookContainer.appendChild(fragment);
  }

  static addBook(book, library) {
    const bookContainer = document.querySelector(".book-container");
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card d-flex flex-column");
    if (library.books.length === 0) {
      bookCard.setAttribute("data-index", 0);
    }
    bookCard.setAttribute("data-index", library.books.length);
    bookCard.innerHTML = `
                <div class="book-title pt-3 px-2 fw-bold text-center lh-sm fs-5">${
                  book.bookName
                }</div>
                <div class="book-author pt-2 px-2 text-center">${
                  book.bookAuthor
                }</div>
                <div class="book-pages pt-1 px-2 text-center fst-italic  text-muted">${
                  book.bookPages
                } pages</div>
                <div class="book-options d-flex justify-content-between py-3">
                    <span class="material-icons-outlined ms-3 read-mark">
                        ${book.bookRead ? "done" : "remove_red_eye"}
                    </span>                    
                    <span class="material-icons-outlined me-3 delete">
                        delete
                    </span>
                </div>`;
    bookContainer.appendChild(bookCard);
  }

  static removeBook(book) {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.removeChild(book);
    UI.updateIdx();
  }

  static updateBook(status) {
    if (status.innerText == "remove_red_eye") {
      status.innerText = "done";
      return;
    } else {
      status.innerText = "remove_red_eye";
      return;
    }
  }

  static showForm() {
    const form = document.querySelector(".form-container");
    form.classList.toggle("d-none");
  }

  static updateIdx() {
    const bookContainer = document.querySelector(".book-container");
    const bookCards = bookContainer.querySelectorAll(".book-card");
    bookCards.forEach(function (bookCard, idx) {
      bookCard.setAttribute("data-index", idx);
    });
  }
}

export { UI };
