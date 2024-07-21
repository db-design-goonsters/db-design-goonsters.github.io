const { Pool } = require('pg'); 

export const pool = 
new Pool({ user: 'postgres', 
host: 'localhost', 
database: 'postgres', 
password: 'your_password', 
port: '5432', 
max: 20, // Maximum number of clients in the pool 
idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed 
}); 