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



const postUsuario = async (req, res) => {
    try {
        const {
            id_usuario,
            nombre,
            email,
            password,
            direccion,
            telefono,
            tipo,
            fecha_registro,
            cedula
        } = req.body;

        const usuario = {
            id_usuario,
            nombre,
            email,
            password,
            direccion,
            telefono,
            tipo,
            fecha_registro,
            cedula
        };

        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", usuario);
        res.status(201).json({ message: "Usuario agregado correctamente" });

    } catch (error) {
        console.error("Error al insertar usuario:", error);
        res.status(500).send("Error al insertar usuario");
    }
}


export const methodHTTP = {
    getUsuarios,
    postUsuario
}