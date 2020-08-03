const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket.model');
const scan = require('../models/scan.model');
const owner = require('../models/owner.model');
const mid = require('../helpers/middlewares');

/**
 * All scans
 */
router.get('/:ticketid/scans', async (req, res) => {
    const ticketid = req.params.ticketid;

    await scan.getScans(ticketid)
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
router.post('/:ticketid/scans', mid.checkFieldsScan, async (req, res) => {
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

/**
 * All owners
 */
router.get('/:ticketid/owners', async (req, res) => {
    const ticketid = req.params.ticketid;

    await owner.getOwners(ticketid)
        .then(owners => res.json(owners))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            } else {
                res.status(500).json({ message: err.message });
            }
        });
});

/**
 * Insert a list of tickets purchased
 */
router.post('/sell', mid.checkFieldsSell, async (req, res) => {
    await ticket.sell(req.body)
        .then(data => res.json({
            message: 'Venta registrada correctamente',
            content: data
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            }
            res.status(500).json({ message: err.message });
        });
});

/**
 * Modify a list of tickets purchased
 */
router.post('/resell', mid.checkFieldsSell, async (req, res) => {
    await ticket.resell(req.body)
        .then(data => res.json({
            message: 'Reventa registrada correctamente',
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
