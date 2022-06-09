
    

    // Import the functions you need from the SDKs you need
    import { conexion } from "../database/db.js"
    
    

    //Obtener CRUD
    export const crudHome = (req, res ) => {
        
        conexion.query('SELECT * FROM data_luis', (error, results)=>{
            if (error) {
                console.log(`Ha ocurrido un error: ${error}`)
            }else {
                res.render('home', {results: results, alert: false})
            }
        })
     
     } 

     //Agregar CRUD
     export const crudAdd = (req, res ) => {
        
        const id = req.body.id;
        const number = req.body.number;
        const name = req.body.name;
        const price = req.body.price;
        const stock = req.body.stock;
        const date = req.body.date;
        
        conexion.query('INSERT INTO data_luis SET ?', [{number:number, name:name, price:price, stock:stock, date:date }, id], (error, results) =>{
            if (error) {
                console.log(error);
            } else {
                res.redirect('/home');
            }
        })
     } 


     //Generamos la vista EDIT
    export const crudEditView = (req, res ) => {
            
        const id = req.params.id;
        conexion.query('SELECT * FROM data_luis WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.log(error)
            } else {
                res.render('edit', {product:results[0], alert: false})
            }
        })
    }
     //Editar CRUD
     export const crudEdit = (req, res) => {
        const id = req.body.id;
        const number = req.body.number;
        const name = req.body.name;
        const price = req.body.price;
        const stock = req.body.stock;
        const date = req.body.date;
    
        conexion.query('UPDATE data_luis SET ? WHERE id = ?', [{number:number, name:name, price:price, stock:stock, date:date}, id], (error, results) =>{
            if (error) {
                console.log(error);
            } else {
                res.redirect('/home');
            }
        })
     }

     //Delete CRUD
     export const crudDelete = (req, res ) => {
        
        conexion.query('DELETE FROM  data_luis WHERE id = ?', [req.params.id], (error, results) =>{
            if (error) {
                console.log(error);
            } else {
               res.redirect('/home');
            }
        })
      }  

     
     