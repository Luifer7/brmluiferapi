
         import  Router from "express" 
         import  {getProducts, getOneProduct, createProducts, updateProducts, deleteProducts}  from "../controllers/apiControllers.js"
       
         
    
         const apiRouter = Router()
 
         
         // GET Products
         apiRouter.get('/api/product', getProducts)

          // GET ONE Product
          apiRouter.get('/api/product/:id', getOneProduct)

         // CREATE Product
         apiRouter.post('/api/product', createProducts)
         
         // EDIT product
         apiRouter.post('/api/product/:id', updateProducts)
         
         // DELETE Product
         apiRouter.delete('/api/product/:id', deleteProducts)



         //clientes API
        // apiRouter.get('/api/clientes', clientesApi)

       

       

       
 
         export default  apiRouter 
       