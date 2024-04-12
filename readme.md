# Example POC for Node DI and integration tests
This is just a hacked together project that demonstrates how to use Node DI and integration tests that involve a database connection. Specifically it proves the concept of auto-wiring (see `src/Service/UserService.ts`) whilst maintaining testability at the `Service` level.

DI uses awilix and is configured in the `config/container.js` file. The integration tests use a separate database connection and are configured in the `test/config/testContainer.js` file which extends the orignal.

The database uses Prisma (with postgresql) for models and migrations.

A docker-compose.yml is included for the database container. This could be used as part of running tests in a CICD pipeline.

# How to run
1. Clone the repo
2. Run `npm install`
3. Create the `.env` file in the root of the project with the contents of the `.env.example` file.
4. Run the DB migrations with `npm run db:migrate`
5. Run the project locally with `npm run dev`
6. Run the tests with `npm run test`