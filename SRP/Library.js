class Library {
    constructor(name, address, books = []){
        this.name = name;
        this.address = address;
        this.books = books;
    }

    searchBook(name){
        if(name.length <= 0 && this.books.length <= 0)
            return 'Not found';

        const findBook = this.books.find((item) => item.name == name);
        return findBook;
        

    }

    addBook(book){
        if(book){
            return this.books.push(book);
        }
    }

    listBooks(){
        if(this.books.length > 0){
            this.books.map((item) => console.log(`Book: ${item.name} - Author: ${item.author} - Pages: ${item.pages} - Publishing Company: ${item.publishingCompany}`));
        }
    }

    removeBook(name){
        if(name){
            const indexFind = this.books.findIndex((item) => item.name == name);
            this.books.splice(indexFind, 1);
        }
    }
}

module.exports = Library;