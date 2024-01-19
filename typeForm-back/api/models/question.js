import mongoose from "mongoose";

const { Schema } = mongoose;

const QuestionSchema = new Schema({
    question: {
        type: String,
    },
    options: {
        type: [String], // Define options as an array of strings
        
    },
    correctAnswer: {
        type: String,
        
    },
    timeLimit: {
        type: String,
        
    },
    formName: {
        type: String,
        
    },
});

export default mongoose.model("questions", QuestionSchema);
