module.exports = {
    HOST: "localhost",
    USER: "root",
    // PASSWORD: "BngLoanAa123456",
    PASSWORD: "",
    DB: "product_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };