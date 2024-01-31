const db = require('./db');
const Joi = require('joi');

const item_pedidoSchema = Joi.object({
    id: Joi.string().required(),
    qtde: Joi.string().required(),
    valor_parcial: Joi.string().required(),
    id_produto: Joi.string().required(),
    id_pedido: Joi.string().required(),
});

exports.listarItem_pedido = (req, res) => {
    db.query('SELECT * FROM item_pedido', (err, result) => {
        if (err) {
            console.error('Erro ao buscar item pedido: ', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }
        res.json(result);
    });
};

exports.buscarItem_pedido = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM item_pedido WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Erro ao buscar item pedido:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }
        if (result.length === 0) {
            res.status(404).json({ error: 'Driver not found' });
            return;
        }
        res.json(result[0]);
    });
};


