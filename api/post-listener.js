module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Datos recibidos:', data);
    return res.status(200).json({
      message: 'Datos recibidos correctamente',
      received: data,
    });
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
};