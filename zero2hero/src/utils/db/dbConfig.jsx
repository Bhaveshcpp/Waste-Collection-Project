//psql 'postgresql://neondb_owner:npg_xVLtaK4g5IZn@ep-cool-snow-a1eadhm1-pooler.ap-southeast-1.aws.neon.tech/zero2hero?sslmode=require&channel_binding=require'
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });