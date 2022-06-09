
        
        import  Router from "express" 
        import  {crudHome, crudAdd, crudEdit, crudEditView, crudDelete}  from "../controllers/homeController.js"
        //import  { isLogin }  from "../controllers/authController.js"

        const router = Router()

        //Ruta HOME
       router.get('/home', crudHome)
       
       //Vsita y metodo crear
       router.get('/crear', (req, res) => {res.render('crear', {alert: false})});
       router.post('/add', crudAdd)

       //Metodo update
       router.get('/edit/:id', crudEditView)
       router.post('/update', crudEdit)

        //Metodo DELETE
        router.get('/delete/:id', crudDelete)

        export default  router 
      