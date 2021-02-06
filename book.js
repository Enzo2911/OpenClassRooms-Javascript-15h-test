export class Book {
    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = pages;
            return 1;
        } else if (page == this.pages) {
            this.currentPage = pages;
            this.read = true;
            return 1;
        }
    }
}

const book1 = new Book("Livre 1", "Me", "aucune idée", 300, 0, false)

const book2 = new Book("Livre 2", "Me", "aucune idée", 100, 0, false)

const book3 = new Book("livre 3", "Me", "aucune idée", 200, 0, false)

export const books = [book1, book2, book3];
