const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb+srv://admin:admin123@cluster0.gyh8e.mongodb.net/back-end-chat?retryWrites=true&w=majority",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
};

module.exports = config;
