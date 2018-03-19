module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'database_development',
    host: 'db/development.sqlite',
    dialect: 'sqlite',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: 'db/development.sqlite',
    dialect: 'sqlite',
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_ROOT_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'pg',
  },
};
