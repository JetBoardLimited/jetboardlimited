# jetboardlimited

## Code Structure

- `public` - Contains assets that are visible to the public domain.
- `routes` - Contains the URI routing logic for sending the right web page to the right route.
- `views` - Contains the stylesheets and pug templates that makes each web page.
- `bin` - Contains `www` which is the project's init program.


## Setup Web Server + Database

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up # for development
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up # for production
```

## Setup Forum

In a different terminal from the web and database container:

```
# for development
docker-compose -f docker-compose.yml -f docker-compose-dev.yml run --service-ports forum bash
./nodebb setup
./nodebb start
./nodebb log

# for production
docker-compose -f docker-compose.yml -f docker-compose-prod.yml run --service-ports forum bash
./nodebb setup
./nodebb start
./nodebb log
```
