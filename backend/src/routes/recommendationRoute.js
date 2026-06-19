import express from 'express'
import request from '../controllers/recommendationController.js'

const router = express.Router()


router.post("/recommendRestaurant", request)


export default router