        
        
        import mysql from "mysql"
        

        const conexion = mysql.createConnection({
            host: 'mysql-strangepremium.alwaysdata.net',
            user: '263463_luisw',
            password: 'Wstrange.1',
            database: 'strangepremium_api_cristiana'
            //database: 'api_luis'
        }) 
        conexion.connect((error) => {
            if (error) {
                console.log(`Ha ocurrido un error: ${error}`)
                return
            }
            console.log('conectado a la base de dastos Always data :)...')
        })

        export {conexion}