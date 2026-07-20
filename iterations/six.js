const coding = ["js", "python", "java", "c++", "ruby"];

coding.forEach((language) => {
  //console.log(`I love coding in ${language}!`);
}); // about returning values, it doesnt return anything, it just iterates over the array and executes the function for each element.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNUMS =[];
myNums.forEach((num) => { //a way to add values instead of returning an array unlike filter method
    if(num>4)
    {
        newNUMS.push(num)
    }
});

//console.log(newNUMS);


//FILTER: it returns a new array containing only the elements that pass the test
//mostly used for filtering out values. works on true false mostly

let newNums = myNums.filter((num)=> num>5)


 newNums = myNums.filter((num)=> { return num>5 })//opening scope requires return statement


 newNums = myNums.filter((num)=> {
if(num>5){
return num
}
});

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (book)=>{ return book.title === "Book Six"});

  userBooks = books.filter( (bk) =>  bk.publish >= 1995 && bk.genre === "History"
)
  console.log(userBooks);
