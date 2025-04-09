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

const postCompra = async (req, res) => {
    try {
        const { p_id_usuario, p_id_producto, p_cantidad } = req.body;

        const connection = await getConnection();

        await connection.query("CALL realizar_compra(?, ?, ?)", [
            p_id_usuario,
            p_id_producto,
            p_cantidad
        ]);

        res.status(201).json({ message: "Compra realizada correctamente" });

    } catch (error) {
        console.error("Error al ejecutar la compra:", error);
        res.status(500).send(error.message || "Error al ejecutar la compra");
    }
};



export const methodHTTP = {
    getCompras ,
    postCompra
}
