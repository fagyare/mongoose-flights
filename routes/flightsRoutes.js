const express = require('express')

const router = express.Router()

const flightsController = require('../controllers/flightsController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for flights, attach it to router along with the controller logic
router.get('/', flightsController.index)

// Setup a "new" route for creating flight
router.get('/new', flightsController.new)

// router.delete('/clear', flightsController.delete)

// Setup a "delete" route for removing a specific flight
// router.delete('/:id', flightsController.delete)

// Setup a "update" route for updating a specific flight
// router.put('/:id', flightsController.update)

// router.post('/seed', flightsController.seed)

// Setup a "create" route for adding flight data
router.post('/', flightsController.create)

// Setup a "edit" route for editing a flight
// router.get('/:id/edit', flightsController.edit)

// Setup an "show" route for flights, attach it to router along with the controller logic
router.get('/:id', flightsController.show)


module.exports = router;