import { pool } from "./services/pool";

const clickMe = document.querySelector('.intro .test-connection');

clickMe.onclick = function testConnection() {
    fetch('/get-suppliers')
        .then(response => response.json())
        .then(data => {
            console.log('Query result:', data);
            // Update your UI here, for example:
            displaySuppliers(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors here
        });
}



// document.addEventListener('DOMContentLoaded', () => {
//     const clickMe = document.querySelector('.intro .test-connection');
  
//     clickMe.onclick = function testConnection() {
//       pool.query('SELECT * FROM Supplier', (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//         } else {
//           console.log('Query result:', result.rows);
//         }
//       });
//     };
//   });