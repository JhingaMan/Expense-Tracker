import express from 'express'
import { extractUser } from '../utils/AuthMiddleware.js'
import { getUserTransaction } from '../Controllers/transactionController.js'

const transactionRouter = express.Router()

transactionRouter.get("/get-user-transaction", extractUser , getUserTransaction)

export default transactionRouter

