import express from 'express'

const router = express.Router()

router.post('/event', async (req, res, next) => {
  console.log("🚀 ~ file: event-route.ts:6 ~ router.post ~ req:", req.body)
  try {
    
    
  } catch (error) {
    next(error)
  }
})

export default router
