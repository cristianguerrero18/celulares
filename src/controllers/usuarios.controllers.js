import getConnection from "../db/database.js"
const getUsuarios =  async (req , res) => {
    
    try {
         const connection = await getConnection();
         const result = await connection.query("SELECT id_usuario, nombre, email, password, direccion, telefono, tipo, fecha_registro, cedula FROM usuarios");
         res.json(result);
    } catch (error) {
        console.log("error 505");
    }
}


export const methodHTTP = {
    getUsuarios
}
