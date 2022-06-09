
 import { conexion } from "../database/db.js";
 
//Api GET Products
export const getProducts = (req, res ) => {
  conexion.query('SELECT * FROM data_luis', (error, results)=>{
    if (error) {
        console.log(`Ha ocurrido un error: ${error}`)
    }else {
        res.json({results: results})
    }
})
} 

//Api GET ONE Product
export const getOneProduct = (req, res ) => {
  conexion.query('SELECT * FROM data_luis WHERE id = ?',[req.params.id], (error, results)=>{
    if (error) {
        console.log(`Ha ocurrido un error: ${error}`)
    }else {
        res.json({results: results})
    }
})
}

//Api CREATE Porducts
export const createProducts = (req, res ) => {

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
              res.json({results: results})
            }
        })
}  

//Api EDIT products
export const updateProducts = (req, res ) => {
        const id = req.params.id;
        const number = req.body.number;
        const name = req.body.name;
        const price = req.body.price;
        const stock = req.body.stock;
        const date = req.body.date;
    
        conexion.query('UPDATE data_luis SET ? WHERE id = ?', [{number:number, name:name, price:price, stock:stock, date:date}, id], (error, results) =>{
            if (error) {
                console.log(error);
            } else {
              res.json({results: results})
            }
        })
  
}  

//Api DELETE products
export const deleteProducts = (req, res ) => {
  
  conexion.query('DELETE FROM  data_luis WHERE id = ?', [req.params.id], (error, results) =>{
      if (error) {
          console.log(error);
      } else {
        res.send(`<span>Producto ${req.params.id} eliminado</span>`)
      }
  })
}  





//Clientes ENDPOINT
/*
export const clientesApi = (req, res ) => {
  console.log('ruta API')
}  
 */




