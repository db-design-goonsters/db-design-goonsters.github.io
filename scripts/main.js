// const { Pool } = require('pg'); 

import { Pool } from 'pg';

const pool = 
new Pool({ user: 'postgres', 
host: 'localhost', 
database: 'postgres', 
password: 'your_password', 
port: '5432', 
max: 20, // Maximum number of clients in the pool 
idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed 
}); 

// const clickMe = document.querySelector('.intro .test-connection');
console.log('im in the main.js file!')

document.addEventListener('DOMContentLoaded', () => {
    const clickMe = document.querySelector('.intro .test-connection');
  
    clickMe.onclick = function testConnection() {
        console.log('you clicked the button!')
      pool.query('SELECT * FROM supplier', (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
        } else {
          console.log('Query result:', result.rows);
        }
      });
    };
  });

  