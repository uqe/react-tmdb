const fs = require('fs');

fs.writeFileSync(
  './.env',
  `THEMOVIEDB_API_KEY=${process.env.THEMOVIEDB_API_KEY}
THEMOVIEDB_API_LANGUAGE=${process.env.THEMOVIEDB_API_LANGUAGE}
THEMOVIEDB_API_ADULT=${process.env.THEMOVIEDB_API_ADULT}`
);
