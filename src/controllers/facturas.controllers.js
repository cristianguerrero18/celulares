import getConnection from "../db/database.js"
const getFacturas =  async (req , res) => {
    
    try {
         const connection = await getConnection();
         const result = await connection.query("SELECT id_factura, id_compra, numero_factura, fecha_emision, total FROM facturas");
         res.json(result);
    } catch (error) {
        console.log("error 505");
    }
}


export const methodHTTP = {
    getFacturas
}
