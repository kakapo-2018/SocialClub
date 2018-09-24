# SocialClub
The idea of this app is to create a "billboard" style site for people who would like to offer Goods, Services or Food. 

To connect people who may need goods, services and food with people who can and would like to.

Hey I'm a readme

To get started run:
```
yarn knex:migrate latest
```
```
yarn knex:seed run
```
```
Rename the 'rename me to .env' to .env
```

You should now be able to register and login accounts

<strong>TEAM:</strong>

Cameron - Product Owner<br/>
Welli<br/>
Dani<br/>
Luke<br/>
Richard - Git Master / Deployer

<strong>API:</strong>

GET /API/posts/:category - gets list of posts from selected category<br/>
Example:
{ <br/>
  [ <br/>
    { <br/>
  id: 1</br>
  user_id: 2</br>
  title: Need help with lawnmowing<br/>
  content: I have a massive lawn that needs mowing. I can pick you up and drop off after. I can pay cash and provide a meal.<br/>
  category
  created: 2345252345<br/>
  expdate: 34536356356<br/>
     }, <br/>
   ] <br/>
 }<br/>   

GET /API/posts/post/:id - gets individual posts<br/>
Example:<br/>
{<br/>
  id: 1</br>
  user_id: 2</br>
  title: Need help with lawnmowing<br/>
  content: I have a massive lawn that needs mowing. I can pick you up and drop off after. I can pay cash and provide a meal.<br/>
  category
  created: 2345252345<br/>
  expdate: 34536356356<br/>
}<br/>

POST /API/newpost - writes new post to posts DB<br/>
Example:<br/>
{<br/>
  User_ID: 345<br/>
  Category: Work<br/>
  Title: Need help with lawnmowing<br/>
  Content: I have a massive lawn that needs mowing. I can pick you up and drop off after. I can pay cash and provide a meal<br/>
  Created: 2345252345<br/>
  Exp date: 34536356356 <br/>
}<br/>

POST /API/register - adds new user to user DB<br/>
Example:<br/>
{<br/>
  Name: Joe Blog<br/>
  User name: Joe Blog 123<br/>
  Email:joeblog@hotmail.com<br/>
  Password: qoiwfn398(Y#JFmnad<br/>
}<br/>

GET /API/login - logs registered user in and routes to logged in page
{<br/>
  User name: Joe Blog 123<br/>
  Password: password123  <br/>
}<br/>


STRETCH:<br/>
POST /API/posts/:id/message - writes message against post to message DB<br/>
DEL /API/posts/:id - deletes post from posts DB<br/>
UPDATE /API/posts/:id - edits post from posts DB 

<strong>MVP:</strong>

- User/clients does not need to register to view postings
- Users can browse all the postings (goods/works/foods)
- Users can filters the postings (based on goods/works/foods)
- Providers need to register to post G/W/F

<strong>STRETCH:</strong>

- As a registered user I want to be able to manage my posts. Every post of mine needs to have a 'Delete' and an 'Edit' button.
- As a non-registered user, when I am viewing the details of a post I want to be able to leave a message for the poster. There will be a single form field with a submit button. Once submitted the message will be visible on the same page underneath the listing (with the form field and submit button underneath it).

<strong>DATABASE</strong>

The database will have three tables.
User will have a one to many relationship to Posts.
Posts will have a one to many relationship to Messages.

USER:
- id: primary key, autoincrement, integer
- name: string
- user name: string
- email: string
- password: string

POSTS:
- id: primary key, autoincrement, integer
- user_id: secondary key, integer
- title: string
- content: string
- category: string
- expdate: date
- created: date

MESSAGES:
- id: primary key, autoincrement, integer
- posts_id: secondary key, integer
- message: string
- date: date
