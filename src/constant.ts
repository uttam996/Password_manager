import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGO_URL = process.env.NODE_ENV === 'development' ? 'mongodb://localhost:27017/password_manager' : process.env.MONGO_URL;
 // connvert to base64 and use as secret

export const CRYPTO_SECRET = btoa(process.env.CRYPTO_SECRET)








