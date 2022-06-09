

 import  Router from "express" 
 import { storeView } from "../controllers/storeController.js"

 const store = Router()

 store.get('/', storeView)


 export default  store 