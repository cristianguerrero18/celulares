import getConnection from "../db/database.js"
const getProductos =  async (req , res) => {
    
    try {
         const connection = await getConnection();
         const result = await connection.query("SELECT id_producto, nombre, marca, modelo, descripcion, precio_unitario, stock, imagen, fecha_Creacion FROM productos");
         res.json(result);
    } catch (error) {
        console.log("error 505");
    }
}

const postProducto = async (req, res) => {
    try {
        const {
            nombre,
            marca,
            modelo,
            descripcion,
            precio_unitario,
            stock,
            imagen,
            fecha_Creacion
        } = req.body;

        const producto = {
            nombre,
            marca,
            modelo,
            descripcion,
            precio_unitario,
            stock,
            imagen,
            fecha_Creacion
        };

        const connection = await getConnection();
        await connection.query("INSERT INTO productos SET ?", producto);
        res.status(201).json({ message: "Producto agregado correctamente" });

    } catch (error) {
        console.error("Error al insertar producto:", error);
        res.status(500).send("Error al insertar producto");
    }
}

export const methodHTTP = {
    getProductos,
    postProducto
}
