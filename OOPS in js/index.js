const s1='hello';
console.log(typeof s1);//string

const s2=new String("Hi");
console.log(typeof s2);//object

console.log(window);
//alert ("hi");

//object Literal
const book1 = {
    title : 'Book one',
    author :'Mike',
    year : '2020',
    getSummary: function()
    {
        return `${this.title} was wrriten by ${this.author} in ${this.year}`;
    }
};
console.log(book1.getSummary());//Book one was wrriten by Mike in 2020
console.log(Object.values(book1));//["Book one", "Mike", "2020", ƒ]
console.log(Object.keys(book1));//["title", "author", "year", "getSummary"]


//CONSTRUCTOR
function Book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
   /* this.getSummary= function()
    {
        return `${this.title} was wrriten by ${this.author} in ${this.year}`;
    };*/
}
//getsummary--prototype--dynamic way
Book.prototype.getSummary=function()
{
    return `${this.title} was wrriten by ${this.author} in ${this.year}`;
};
//getAge
Book.prototype.getAge=function()
{
    const years=new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old `;
}
//revise
Book.prototype.revise=function(newYear)
{
    this.year=newYear;
    this.revised=true;
}

//Instantiating an object
const bookone=new Book('The one ','Harry',2018);
const book2=new Book('The two','milton',2019);
console.log(bookone);
console.log(book2);
console.log(book2.title);
console.log(book2.getSummary());//The two was wrriten by milton in 2019
console.log(bookone.getAge());//The one  is 2 years old 
book2.revise('2020');
console.log(book2);


//Magazine inheriting the properties of the book
//Inheritance
function Magazine(title,author,year,month)
{
  Book.call(this,title,author,year);
  this.month=month;
}
//Inherit prototype method of the book
Magazine.prototype=Object.create(Book.prototype);
//Instantiate magazine object
const mag1=new Magazine("Maga one",'John','2020','jan');
console.log(mag1);
console.log(mag1.getSummary());

//object create()
const bookProtos={
    getSummary:function(){
        return `${this.title} was wrriten by ${this.author} in ${this.year}`;
    },
    getAge:function(){
        return `${this.title} is ${years} years old `;
    }
}
const books=Object.create(bookProtos);
books.title='one';
books.author='jane';
books.year='2013';
console.log(books);

const booksdet=Object.create(bookProtos,{
    title:{value:'Book two'},
    author:{value:'Doe'},
    year:{value:'2017'}
});
console.log(booksdet);

//classes and subclasses
class Note{
    constructor(title,author,year)
    {
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary()
    {
        return `${this.title} was wrriten by ${this.author} in ${this.year}`;
    }
    revise(newYear)
    {
        this.year=newYear;
        this.revised=true;
    }
    static store()
    {
        return 'Located near 7th street';
    }
}
//instantiate object
const note1=new Note('Note one','harry','2020');
console.log(note1);
console.log(note1.getSummary());
note1.revise('2021');
console.log(note1);
console.log(Note.store());//static methods no need to instantiate

//subclass
class Newmagazine extends Note{
    constructor(title,author,year,month)
    {
        super(title,author,year)
        this.month=month;
    }
}
const nmag=new Newmagazine('Mag one','Hilton','2020','Feb');
console.log(nmag);
console.log(nmag.getSummary());


