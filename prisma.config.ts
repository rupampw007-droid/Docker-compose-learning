import "dotenv/config";
import { defineConfig } from "prisma/config";

console.log("DB URL:", process.env["DATABASE_URL"]); // 👈 add this

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"]!,
  },
});