# Email Subscription Backend Component
Email Subscription Api accepts user email addrees and saves data into postgresql database. 
Incase if user is already enrolled then Api responds with "Email already in use" message.
Some basic backend validations are also in place and can be extended.

Sample Api to refer in postman:
https://ravitejakolla-portfolio.herokuapp.com/subscribe/signup

Sample request body:
{"email" : "ravitejakolla@email.com"}

Technology Stack:
NodeJs, ExpressJs, KnexJs, Postgresql

Platform:
Heroku & Heroku Postgres
