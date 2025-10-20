import express from 'express'
import { login, logout, registor } from '../Controllers/user.controller.js'

const router =express.Router()

router.route("/registor").post(registor)
router.route("/login").post(login)
router.route("/logout").get(logout)


export default router