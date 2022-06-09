

     import  Router from "express" 
     import  { login, register, registerUser, loginUser}  from "../controllers/authController.js"

     const authentic = Router()

     //Views
     authentic.get('/login', login)
     authentic.get('/register', register)
    

     //Methodsx
     authentic.post('/register', registerUser)
     authentic.post('/login', loginUser)
    
    


     export default  authentic 