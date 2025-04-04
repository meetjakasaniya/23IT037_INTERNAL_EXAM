import mongoose from 'mongoose';

const qrCodeSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the model as a default export
const QrCode = mongoose.model('QrCode', qrCodeSchema);
export default QrCode;