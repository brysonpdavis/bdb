import type { Config } from "drizzle-kit"
import * as dotenv from "dotenv"

dotenv.config()
console.log(process.env.DATABASE_URL)

export default {
    schema: "./src/db/schema.ts",
    driver: "mysql2",
    out: "./db/migrations",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    }
} satisfies Config