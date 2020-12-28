/* To access an API , first you must investigate how it is created ! 
whether it is an array or an object !
here in this API , its an array which contains two items of objects.
to access any item we have to specify which item we want , data[0] or data[1],  then writing which object 
you are demanding to display its contents. 
simply by writing data[0].key >> its value will be displayed.
fx in below code we have data[0].character , which displays its value which is "Bender".

*/

const url = "http://futuramaapi.herokuapp.com/api/quotes?search=Fry";
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);

    console.log(
      "The character is " +
        data[0].character +
        ". And here is the quote " +
        " ' " +
        data[0].quote +
        "'"
    );
    console.log(
      "The character is " +
        data[1].character +
        ". And here is the quote " +
        " ' " +
        data[1].quote +
        "'"
    );
  });
