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
    host: 'db/test.sqlite',
    dialect: 'sqlite',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    socketPath: '/var/run/mysqld/mysqld.sock',
    dialect: 'mysql',
  },
};
