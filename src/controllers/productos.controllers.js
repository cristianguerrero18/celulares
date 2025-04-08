import getConnection from "../db/database.js"
const getProductos =  async (req , res) => {
    
    try {
         const connection = await getConnection();
         const result = await connection.query("SELECT id_producto, nombre, marca, modelo, descripcion, precio_unitario, imagen, fecha_Creacion FROM productos");
         res.json(result);
    } catch (error) {
        console.log("error 505");
    }
}


export const methodHTTP = {
    getProductos 
}
