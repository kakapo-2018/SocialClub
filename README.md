# SocialClub

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

Cameron - Product Owner
Welli
Dani
Luke
Richard - Git Master / Deployer

<strong>API:</strong>

GET /API/posts/:category - gets list of posts from selected catergory
GET /API/posts/:id - gets individual posts
POST /API/newpost - writes new post to posts DB
POST /API/register - adds new user to user DB
GET /API/login - logs registered user in and routes to logged in page

STRETCH:
POST /API/posts/:id/message - writes message against post to message DB
DEL /API/posts/:id - deletes post from posts DB
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
- ID: primary key, autoincrement, integer
- Name: string
- Email: string
- Password: string

POSTS:
- ID: primary key, autoincrement, integer
- User_ID: secondary key, integer
- Title: string
- Description: string
- Expirty date: date
- Post date: date

MESSAGES:
- ID: primary key, autoincrement, integer
- Posts_ID: secondary key, integer
- Message: string
- Date: date