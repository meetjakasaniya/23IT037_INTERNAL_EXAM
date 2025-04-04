import QrCode from '../models/QrCode.js';
import QRCode from 'qrcode';

// Generate QR Code
export const generateQRCode = async (req, res) => {
    const { data } = req.body;
    try {
        const qrCodeData = await QRCode.toDataURL(data);
        const newQrCode = new QrCode({ data });
        await newQrCode.save();
        res.json({ qrCodeData, message: 'QR Code generated successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error generating QR Code' });
    }
};

// Get all QR Codes
export const getAllQRCodes = async (req, res) => {
    try {
        const qrCodes = await QrCode.find();
        res.json(qrCodes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching QR Codes' });
    }
};