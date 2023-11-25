import mongoose from "mongoose"

export const connectDB = async (params: string) => {
  try {
    await mongoose.connect(params)
    console.log("DB connected")
  } catch (error) {
    console.log(error)
  }
}