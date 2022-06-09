

    import {conexion} from "../database/db.js";
    import jwt from "jsonwebtoken";
    import bcryptjs from "bcryptjs";
    import { promisify } from "util";
import { nextTick } from "process";


    // METODO REGISTRO
    export const registerUser = async (req, res) => {

        try {
            const name = req.body.name
            const user = req.body.name
            const pass = req.body.name
            // Hash de password con Bcryptjs
            let passHash = await bcryptjs.hash(pass, 8)

            conexion.query('INSERT INTO users SET ?', {name:name, user:user, pass:passHash}, (error, results) =>{
                if (error) {
                    console.log(error);
                } else {
                    res.redirect('/login');
                }
            })

        } catch (error) {
            console.log(error)
        }
      
       
    }

    //METHOD LOGIN
    export const loginUser = async (req, res) => {
        try {
            const user = req.body.user
            const pass = req.body.pass
            if (!user || !pass) {
                res.render('login',  {
                    alert:true,
                    alertTittle:"Advertencia",
                    alertMessage:"Ingrese un usuario y password",
                    alertIcon: "info",
                    showConfirmButtom: true,
                    timer: false,
                    ruta: ''
                })
            } else {
                conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
                    if (results.length == 0 || ! (await bcryptjs.compare(pass, results[0].pass))) {
                    
                        res.render('login',  {
                            alert:true,
                            alertTittle:"Advertencia",
                            alertMessage:"Usuario y contraseña no validos",
                            alertIcon: "info",
                            showConfirmButtom: true,
                            timer: false,
                            ruta: ''
                        })
                    } else {
                        //inicio validado
                        const id = results[0]
                        const secretKey = 'secretito'
                        const token = jwt.sign({id:id}, secretKey, {
                            expiresIn: 60
                        }) 
                        console.log(token)
                        const cookieOptions = {
                           // expires: new Date(Date.now()+process.env.JWT_COOKIE_EXP * 24 * 60 * 60 * 1000),
                            httpOnly: true
                        }
                        res.cookie('jwt', token, cookieOptions)
                        res.render('login', {
                            alert: true,
                            alertTittle:"Coneccion exitosa",
                            alertMessage: "LOGIN CORRECTO",
                            alertIcon: 'success',
                            showConfirmButtom: false,
                            timer: 800,
                            ruta: ''
                        })
                    }
                })
               
            }
        } catch (error) {
            console.log(error)
        }
    }

    //render view login
    export const login = (req, res) => {
        res.render('login', {alert: false})
    } 

     //render view login
    export const register = (req, res) => {
        res.render('register', {alert: false})
    } 


   export const auth = async (req, res ) => {

   
        try {
            res.json({
                error: null,
                data: userDb 
            });

        } catch (error) {
            res.status(400).json(error)
        }

   }


   //Autenticador
   export const isLogin = async (req, res) => {
        if (req.cookieOptions.jwt) {
            try {
                const decodificada = await promisify(jwt.verify)(req.cookieOptions, secretKey )
                conexion.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results) => {
                    if (!results) { return next() }
                    req.user = results[0]
                    return next()
                })
            } catch (error) {
                console.log(error)
                return next()
            }
        }  else {
            res.redirect('/login')
            next()
        }
   }