

    `nodemon index.js`

    
- Note: 
    .env will have mongodbURL , Port , and Secret value for JWT and password hashing. 
    
++ Homepage <br>
++ Product <br>
++ Product Schema <br> 
++ Build the APIS <br> 

Methods

    `Get `
    `Post `
    `PATCH`
    `DELETE`



.env <br>

    `API_URL=/api/v1` 
    ` DB_URL=" "`
    `secret'



`${api}/products`

- Three random categores and 8 random products which you can only access form homepage<br>

    `${api}/homepage/products` <br>
    `${api}/homepage/categories`

- Categories API

    `${api}/categories`

- USERS api where you can declare your self as an admin by POST method

    `${api}/users`<br>
    `${api}/admin`

- To access the users addresses for profile page

    `${api}/profile/address`<br>

- Orders 
    - user 
    - Cart
    - status : default is pending 

    `${api}/orders`


- Images will upload in public/uploads
 
    
   
     Backend<br> 
        |<br>
        |____ public / Uploads 

