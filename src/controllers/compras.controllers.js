import getConnection from "../db/database.js"
const getCompras =  async (req , res) => {
    
    try {
         const connection = await getConnection();
         const result = await connection.query("SELECT id_compra, id_usuario, fecha_compra, total  FROM compras");
         res.json(result);
    } catch (error) {
        console.log("error 505");
    }
}


export const methodHTTP = {
    getCompras 
}
