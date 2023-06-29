import { mysqlTable, int, text, varchar, timestamp } from 'drizzle-orm/mysql-core'

export const posts = mysqlTable('posts', {
    id: int("id").autoincrement().notNull().primaryKey(),
    title: varchar("title", {length: 256}).notNull(),
    markdown: text("markdown").notNull(),
    createdAt: timestamp('created_at', {mode: 'date'}).notNull().defaultNow(),
})