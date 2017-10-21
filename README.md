# jetboardlimited

## Code Structure

- `web/public` - Contains assets that are visible to the public domain.
- `web/routes` - Contains the URI routing logic for sending the right web page to the right route.
- `web/views` - Contains the stylesheets and pug templates that makes each web page.
- `web/bin` - Contains `www` which is the project's init program.

## Setting it up

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml -d up # for development
docker-compose -f docker-compose.yml -f docker-compose-prod.yml -d up # for production
```
