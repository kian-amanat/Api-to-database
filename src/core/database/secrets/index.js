const POSTGRES_SECRET = {
  // host: process.env["PGHOST"],
  // database: process.env["PGDATABASE"],
  // user: process.env["PGUSER"],
  // password: process.env["PGPASSWORD"],
  // port: +process.env["PGPORT"],
  // ssl: !!process.env["PGSSL"],
  connectionString: process.env["PGCONECTION"],
};
export { POSTGRES_SECRET };
