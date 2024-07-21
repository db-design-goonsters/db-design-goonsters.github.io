import { pool } from "./services/pool";

const clickMe = document.querySelector('.intro .test-connection');

clickMe.onclick = function testConnection() {
    pool.query(`Select * From Supplier`, (err, result) => 
          {
  if (err) { 
      console.error('Error executing query:', err); 
  } 
  else { 
      console.log('Query result:', result.rows); 
  } 
});
}

