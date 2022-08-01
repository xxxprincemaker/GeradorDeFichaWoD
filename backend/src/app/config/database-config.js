
const env = process.env;

const config = {
    db: { /* do not put password or any sensitive info here, done only for demo */
        host: env.DBHOST || 'ec2-34-235-198-25.compute-1.amazonaws.com',
        port: env.DBPORT || 5432,
        user: env.DBUSER || 'tdvfqbrapdwzdf',
        password:  env.DBPASSWORD || 'bee5da3b305d3418ac43a3fb064d366185f259c159071ebf997efb9f804a2249',
        database: env.DBNAME || 'd6434rhm51jru8',
        ssl: {
            rejectUnauthorized: false
        }
    },
    listPerPage:  10,
};

export default config;
