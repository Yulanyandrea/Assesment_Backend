# Assesment_Backend


### Documentation:

The following project use a No SQL database in Moongo DB . The principal idea is that any user can create different favourite lists focus on their thoughts .
Every list have the name of the person who create the list. 

To run the program you need to write: 

## npm run dev 

After you will need a software similar to Postman to create users and favourite list. First, you need to create an user with the following endpoint:

 http://localhost:3000/api/users

Also, you need the following structure in the format JSON (method POST):

```
{
        "name":"xxxxx",
        "email":"xxxxx",
        "password":"xxxxx"
    }
    
    
 ```
    
On the other hand, to generate the token in order to have accessibility to delete,create or update any list you need to log in. Use the following format in the Method
POST. 

```
URL:  http://localhost:3000/auth/local/login

{
    "email":"XXX",
    "password":"XXXX"
}

```

To create a favourite list you will need to introduce the token  Authorization "Bearer Token" in the following URL :  http://localhost:3000/api/favList
```
{
    "name":"Music",
    "title":"Yula's music",
    "description":"This is Yula's playlist.She listening to different gendre",
    "link":"https://open.spotify.com/playlist/37i9dQZF1DXbGsT3lGmSyq",
    "createdBy":"xxxxx"
}
```

createdBy needs the id of the logged in user . 

## Rememeber

You will not avalible to update or delete users' list . Only yours will be manipulated 
In case you want to update or delete your lists, you will need the token and introduce the fields that you want to update 

Before

```
{
        
        "name": "Jonas hobbies :P",
        "title": "My favourite hobbies",
        "description": "I love watch movies",
        "link": "xxxxxx",
        "createdBy": "63d4182a8771f953d6866433",
        "createdAt": "2023-01-27T21:52:03.948Z",
        "updatedAt": "2023-01-27T21:52:03.948Z"
    }
    
  ```


After 

```
{
        
        "name": "Yula's hobbies",
        "title": "My favourite hobbies",
        "description": "I love watch movies",
        "link": "OOOOOOO",
        "createdBy": "63d4182a8771f953d6866433",
        "createdAt": "2023-01-27T21:52:03.948Z",
        "updatedAt": "2023-01-27T21:52:03.948Z"
    }
    
  ```

If yor want to delete put the method DELETE and introduce the id related with your list and  your token


## Homework 

### Indicate which are the parts of the following url: 

https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

## Schema 

  - This is the Sheme which means what is the protocol to use. It tells to the browser to encrypt all the information onto the page you are trying to access. 


![scheme](https://user-images.githubusercontent.com/79812118/211703173-05973314-2308-46a4-8f47-d698cfb25aae.jpg)


## Subdomain

  - The url can be see it as a house and the different parts that complement it means all rooms inside . The subdomain indicates which page the browser should server up. Also, indicates groups of information that are located in the web site for instance, categories or more information different to the home page.


![subdomain](https://user-images.githubusercontent.com/79812118/211704333-05bee641-4884-4d7a-bc98-207b6b70cb23.jpg)


## Second level domain 

 - The second level domain means the web site name and it help people to know a certain brand's site 
 
 
![second_level_domain](https://user-images.githubusercontent.com/79812118/211705781-c92309b9-cf00-4102-a6be-55e5a59e150e.jpg)


## Top level domain 


 - The TLD or domain extension specify what type of entity the organization is register on the internet. (.com) it was use to commercial sites , but nowadays indicates any web site. " whereas ‘.org’ is usually used to indicate that the website is that of an organization. When it comes to buying a domain, the domain extension can decide how expensive it is. For instance, ‘.vegas’ tends to be more expensive than ‘.com’ or ‘.net’." paragraph taken from https://medium.com/@joseph.pyram/9-parts-of-a-url-that-you-should-know-89fea8e11713 
 

![top level domain](https://user-images.githubusercontent.com/79812118/211706164-e1c207fe-7960-473a-aa3a-27487faa7e2f.jpg)

## Port

  - The port  is focus on the channel where different servers will use. Browsers are required to connect to a particular port in order to access the resources on that server
  


![port](https://user-images.githubusercontent.com/79812118/211707358-0b1c4a99-6812-491b-8412-5ed1f5880838.jpg)


## The path 


  - The path shows which is the directory the server will have to request. However, paths are used to identify any route in the navigational structure of the website



![path](https://user-images.githubusercontent.com/79812118/211708060-afa98e3b-c654-4b04-a572-e8c3326024ef.jpg)

## The query 

  - " The question mark tell the browser that a query is being performed against a database where the data is stored." 
 
 
 ![the query](https://user-images.githubusercontent.com/79812118/211709509-65c25b58-90e7-44bd-9267-361099c817b3.jpg)

## The parameters


  - The parameters are the values that are being queried  while someone performs a search

![the parameters](https://user-images.githubusercontent.com/79812118/211709866-b171bd26-2b8f-4086-a5c0-fc31358cd432.jpg)



### Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-

## Web Api 
  - It is an API over the web which can be accessed using HTTP protocol. It can be built Web API using different technologies such as JavaScript

## Resfull Api

  - It is an interface that two different systems use to comunicate secure information over the internet 

## status 200 (SUCCESSFUL RESPONSE)

  - Succeeded request deppeding of the method GET,POST, PATCH , PUT , DELETE 

## status 400 (CLIENT ERROR RESPONSE)

  - bad request: the server could not process the request because of any invalid data 

## status 500 (SERVER ERROR RESPONSE)


  - Internal server error : the server found and error that it  cannot handle

### When we talk about CRUD, what does it mean?
When someone build an API  the model should have funtionalities like create, read, update, and delete . A model must have the correct funtion in order to complete different actions. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.


