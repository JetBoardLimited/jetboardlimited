# jetboardlimited

## Code Structure

- `public` - Contains assets that are visible to the public domain.
- `routes` - Contains the URI routing logic for sending the right web page to the right route.
- `views` - Contains the stylesheets and pug templates that makes each web page.
- `bin` - Contains `www` which is the project's init program.


## Setup

```
npm install
docker-compose up -f docker-compose.yml -f docker-compose-dev.yml up # for development
docker-compose up -f docker-compose.yml -f docker-compose-prod.yml up # for production
```
