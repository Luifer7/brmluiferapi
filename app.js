            

            import express from "express" 
            import expressLayouts from "express-ejs-layouts"
            import bodyParser from "body-parser"
            import path from "path"
            import dotenv from "dotenv"
            import cors from "cors"
            import authentic from "./routes/auth.js"
            import router from "./routes/router.js"
            import ApiRouter from "./api/apiRouter.js"
            import store from "./routes/store.js"
            import cookieParser from "cookie-parser";
          
            const app = express();
            const PORT = process.env.PORT || 4000;

             // Middelwares
             app.use(cors())
             app.use(express.json());
             app.use(express.urlencoded({urlencoded: true}))

            //Para el ejs
            app.set('view engine', 'ejs');
            app.use(expressLayouts)

            //La Caperta Public
            app.use(express.static('./public'))


            //SET DE LAS VARIABLES DE ENTORNO
            dotenv.config({path: './.env'})

            //Para cookie parser
            app.use(cookieParser())

             //Utilizamos el Auth
             app.use(authentic)

            //Utilizamos el Auth
            app.use(store)

            //Utilizamos el ROUTER
            app.use(router)

            //Utilizamos ApiRouter
            app.use(ApiRouter)
          
            app.listen(PORT, () => {     
                console.log(`Server started on port ${PORT}`);
            });



         