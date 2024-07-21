import { pool } from "./services/pool";

const clickMe = document.querySelector('.intro .test-connection');

clickMe.onclick = function testConnection() {
    pool.query(`insert into supplier
        ( suppId, suppName, supplierAddress ) VALUES
          (4,'giant eagle','america'), 
          (5,'chewy','puppy land'), 
          (6,'taj mahal','india'); `, (err, result) => 
          {
  if (err) { 
      console.error('Error executing query:', err); 
  } 
  else { 
      console.log('Query result:', result.rows); 
  } 
});
}

