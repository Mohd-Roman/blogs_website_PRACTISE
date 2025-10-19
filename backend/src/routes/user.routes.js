import express from 'express'
import { registor } from '../Controllers/user.controller.js'

const router =express.Router()

router.route("/registor").post(registor)
export default router