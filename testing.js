import { pool } from "./services/pool";
// Now you can use the pool to execute queries 
pool.query(`insert into supplier
          ( suppId, suppName, supplierAddress ) VALUES
            (1,'walmart','walmart street'), 
            (2,'meijer','afganistan'), 
            (3,'costco','ireland'); `, (err, result) => 
            {
    if (err) { 
        console.error('Error executing query:', err); 
    } 
    else { 
        console.log('Query result:', result.rows); 
    } 
});