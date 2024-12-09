const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas  
app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);

// Usar el puerto proporcionado por el entorno 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
