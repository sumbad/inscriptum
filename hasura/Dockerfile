FROM hasura/graphql-engine:v2.5.2.cli-migrations-v2

COPY ./repository/migrations /hasura-migrations
COPY ./repository/metadata /hasura-metadata

# # Enable the console
# ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true

# # Enable debugging mode. It should be disabled in production.
# ENV HASURA_GRAPHQL_DEV_MODE=true

# Change $DATABASE_URL to your heroku postgres URL if you're not using
# the primary postgres instance in your app
CMD graphql-engine \
    --database-url $DATABASE_URL \
    serve \
    --server-port $PORT

## Comment the command above and use the command below to
## enable an access-key and an auth-hook
## Recommended that you set the access-key as a environment variable in heroku
#CMD graphql-engine \
#    --database-url $DATABASE_URL \
#    serve \
#    --server-port $PORT \
#    --access-key XXXXX \
#    --auth-hook https://myapp.com/hasura-webhook 
#
# Console can be enable/disabled by the env var HASURA_GRAPHQL_ENABLE_CONSOLE
