module.exports = {
    port: process.env.PORT || 8084,
    db: {
        database: process.env.DB_NAME || "mydb",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        dialect: process.env.DIALECT || "mysql",
        host: process.env.HOST || "localhost"
        
    },
    authentication: {
        jwtSecret : process.env.JWT_SECRET || 'secret'
    }
}
