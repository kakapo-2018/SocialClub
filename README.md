# SocialClub

Hey I'm a readme

To get started run:
```
yarn knex:migrate latest
```
```
yarn knex:seed run
```

Rename the rename me to .env to .env

You should now be able to register and login accounts


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
