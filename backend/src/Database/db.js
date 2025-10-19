import mongoose from 'mongoose'

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(` db connected`)
    } catch (error) {
        console.log(`something error to connect the database`)
    }
}
export default connectdb;