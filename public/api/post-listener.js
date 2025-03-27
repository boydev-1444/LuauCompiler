// api/receive-post.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Aquí es donde recibirás los datos POST
    const data = req.body; // Acceder a los datos enviados en el cuerpo de la solicitud

    console.log('Datos recibidos:', data); // Aquí puedes procesar los datos

    // Responder con una confirmación o lo que necesites
    return res.status(200).json({
      message: 'Datos recibidos correctamente',
      received: data,
    });
  } else {
    // Si no es un POST, devuelve un error
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
