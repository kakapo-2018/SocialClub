# SocialClub
The idea of this app is to create a "billboard" style site for people who would like to offer Goods, Services or Food. 

To connect people who may need goods, services and food with people who can and would like to.


Hey I'm a readme

To get started run:

yarn knex:migrate latest
yarn knex:seed run

Rename the rename me to .env to .env

You should now be able to register and login accounts


API:

GET /API/posts/:category - gets list of posts from selected catergory
GET /API/posts/:id - gets individual posts
POST /API/newpost - writes new post to posts DB
POST /API/register - adds new user to user DB
GET /API/login - logs registered user in and routes to logged in page

STRETCH:
POST /API/posts/:id/message - writes message against post to message DB
DEL /API/posts/:id - deletes post from posts DB
UPDATE /API/posts/:id - edits post from posts DB 