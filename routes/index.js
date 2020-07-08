const tools = require('../lib/tools.js');
const { Router } = require('express');
const db = require("../models");

const router = Router();

// TEMP PIZZA HUT
const COD_RESTAURANTE = '07';
const BEVERAGE_CODE = '00207';
const BEVERAGE_NAME = 'Coca Cola 2 Ltrs';
const BEVERAGE_PRICE = 10;
const BEVERAGE_QTY = 1;


router.get('/orders', (req, res) => {
    db.Order.findAll()
        .then(orders => {
            res.send(orders);
        });
});

router.post('/orders', (req, res) => {
    // Insert Order data
    if (!req.body.noSQL || req.body.noSQL === 0) {
        db.Order.create(
            {
                nomCliente: req.body.NomCliente,
                subTotalUber: req.body.precio * req.body.cantidad,
                numOrdenUber: tools.generateRandomStr(6),
                codRestaurante: COD_RESTAURANTE,
                orderId: tools.generateRandomStr(10)
            }
        ).then(order => {
                // Insert order details
                db.OrderDetail.create(
                    {
                        idEnc: order.id,
                        numLinea: 1,
                        codProPosSic: req.body.CodProPosSic,
                        nomPro: req.body.NomPro,
                        priceUber: req.body.precio,
                        preVta: req.body.precio,
                        cantidad: req.body.cantidad
                    }
                ).then(detail => {
                    // Insert beverage
                    if (req.body.bebida != 0) {
                        db.OrderDetail.create(
                            {
                                idEnc: order.id,
                                numLinea: 2,
                                codProPosSic: BEVERAGE_CODE,
                                nomPro: BEVERAGE_NAME,
                                priceUber: BEVERAGE_PRICE,
                                preVta: BEVERAGE_PRICE,
                                cantidad: BEVERAGE_QTY
                            }
                        ).then(detail => {
                            res.sendStatus(200);
                        });
                    }
                    else {
                        res.sendStatus(200);
                    }
                });
            }
        ).catch(function (err) {
            res.sendStatus(500);
        });
    }
    else {
        if (req.body.NomCliente 
            && req.body.CodProPosSic
            && req.body.NomPro
            && req.body.precio
            && req.body.cantidad
            && (req.body.bebida || req.body.bebida === 0)) {
            res.send("OK with no insert");
        }
        else {
            res.sendStatus(400);
        }
    }
});

module.exports = router;