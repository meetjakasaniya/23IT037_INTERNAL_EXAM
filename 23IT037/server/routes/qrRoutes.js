import express from 'express';
import { generateQRCode, getAllQRCodes } from '../controllers/qrController.js';

const router = express.Router();

// Define routes
router.post('/generate', generateQRCode);
router.get('/', getAllQRCodes);

// Export the router as the default export
export default router;