import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    title: {type: String, default: 'My Resume'},
    templateId: {type: String, default: 'blue'},
    data: {type: Object,  required: true},
}, {timestamps: true});

export default mongoose.model('Resume', resumeSchema)