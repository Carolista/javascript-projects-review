// Define your Book class here:
class Book {

  constructor(title, author, copyrightDate, isbn, numPages, checkoutCount = 0) {
    this.title = title;
    this.author = author;
    this.copyrightDate = new Date(copyrightDate);
    this.isbn = isbn;
    this.numPages = numPages;
    this.checkoutCount = checkoutCount;
    this.discarded = false;
  }

  checkOut(num = 1) {
    this.checkoutCount += num;
    console.log(`${this.title} has been checked out ${this.checkoutCount} times.`);
  }

}

// Define your Manual and Novel classes here:

class Manual extends Book {

  constructor(title, author, copyrightDate, isbn, numPages, checkoutCount) {
    super(title, author, copyrightDate, isbn, numPages, checkoutCount);
  }

  evaluateDiscard() {
    let msPerYear = 365 * 24 * 60 * 60 * 1000;
    if (new Date() - this.copyrightDate > 5 * msPerYear) {
      this.discarded = true;
      console.log(`${this.title} has been discarded.`);
    } else {
      console.log(`${this.title} does not need to be discarded yet.`);
    }
  }
}

class Novel extends Book {

  constructor(title, author, copyrightDate, isbn, numPages, checkoutCount) {
    super(title, author, copyrightDate, isbn, numPages, checkoutCount);
  }

  evaluateDiscard() {
    if (this.checkoutCount > 100) {
      this.discarded = true;
      console.log(`${this.title} has been discarded.`);
    } else {
      console.log(`${this.title} does not need to be discarded yet.`);
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let novel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32);
let manual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1);

// Code exercises 4 & 5 here:
manual.evaluateDiscard();
novel.checkOut(5);
