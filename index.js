let container = document.querySelector(".books");
const tableCart = document.querySelector(".book__cart");
let total = 0;
let books = [
     {  id:1,
        image: "CSS/images/51L7pTOL+KL._AC_SY1000_.jpg",
        title: 'Harry Potter 1',
        price: 50,
        quantity: 1
    },
    {   id:2,
        image: "CSS/images/61fnMO3vVzL._SX427_BO1,204,203,200_.jpg",
        title: 'Harry Potter 2',
        price: 40,
        quantity: 1
    },
    {   id:3,
        image: "CSS/images/B076WS5MFV.01._SCLZZZZZZZ_SX500_.jpg",
        title: 'Fantastic Beasts',
        price: 35,
        quantity: 1
    }
];

window.onload = function createBookCard() {
   for (let i=0; i<books.length; i++) {
   const bookCard = document.createElement('div');
   bookCard.className = "book__card";
   bookCard.id = books[i].id;

   const image = document.createElement("img");
   image.src = books[i].image;
   bookCard.appendChild(image);

   const h3 = document.createElement("h3");
   h3.innerHTML = '<strong>Book title:</strong> ' + books[i].title;
   bookCard.appendChild(h3);

   const price = document.createElement("p");
   price.innerHTML = '<strong>Price: $</strong> ' + books[i].price;
   bookCard.appendChild(price);

   const quantity = document.createElement("input");

   //Assign initial qauntity value
   quantity.value = books[i].quantity;
   bookCard.appendChild(quantity);

   const addButton = document.createElement("button");
   addButton.className = "add__button";
   addButton.innerHTML = "Add to card";

   addButton.addEventListener("click",
   function () {
        const tr = document.createElement("tr");
        tableCart.appendChild(tr);

        let td1 = document.createElement("td");
        td1.textContent = books[i].title;
        tr.appendChild(td1);

       let td2 = document.createElement("td");

        //quantity value from text box
        td2.textContent = quantity.value;
        tr.appendChild(td2);

       let td3 = document.createElement("td");
       td3.textContent = books[i].price;
       tr.appendChild(td3);

        let td4 = document.createElement("td");
        //qauntity value * book price
        td4.textContent = td2.textContent * books[i].price;
        tr.appendChild(td4);

       //Calculate total
       total = total + books[i].price * quantity.value;

       //Show total
       document.getElementById("total").innerHTML = "$" + total;



        let td5 = document.createElement("button");
        td5.textContent = "Remove";
        td5.className = "remove__button";
        tr.appendChild(td5);

        td5.addEventListener("click", function() {
            tableCart.removeChild(tr);

            //Remove total
            total = total - td4.textContent;
            document.getElementById("total").innerHTML ="$" +  total;
        });
    }, false);

bookCard.appendChild(addButton);
container.appendChild(bookCard);
    }
}

