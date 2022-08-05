## Basic ToDos App

1. Install dependencies `npm install`
2. Create a `.env` file in the application root with contents similar to the following:

   ```
   DATABASE_URL="file:./dev.db"
   ```

3. Generate model types `npx prisma generate`
4. Generate SQLite database file `npx prisma db push`
5. Run the API `nx serve api`
6. Run the client `nx serve todos`
