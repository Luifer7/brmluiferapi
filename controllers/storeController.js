
    // Import the functions you need from the SDKs you need
    import { conexion } from "../database/db.js";


 export const storeView = (req, res ) => {
        
    conexion.query('SELECT * FROM data_luis', (error, results)=>{
        if (error) {
            console.log(`Ha ocurrido un error: ${error}`)
        }else {
            res.render('store', {results: results, alert: false},)
        }
    }) 

  
    
    
 } 