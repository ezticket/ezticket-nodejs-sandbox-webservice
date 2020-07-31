const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket.model');
const scan = require('../models/scan.model');
const mid = require('../helpers/middlewares');

/**
 * All scans
 */
router.get('/getScans', async (req, res) => {
    await scan.getScans()
        .then(scans => res.json(scans))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            } else {
                res.status(500).json({ message: err.message });
            }
        });
});

/**
 * Insert a scan
 */
router.post('/:ticketid/scan', async (req, res) => {
    const ticketid = req.params.ticketid;

    await ticket.scan(ticketid, req.body)
        .then(data => res.json({
            message: 'Escaneo registrado correctamente',
            content: data
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            }
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;
