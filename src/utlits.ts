import CryptoJS from 'crypto-js';



export const Encrypt = (data: string) => {
    return CryptoJS.AES.encrypt(data, process.env.CRYPTO_SECRET).toString();


}

export const Decrypt = (data: string) => {
    const bytes = CryptoJS.AES.decrypt(data, process.env.CRYPTO_SECRET);
    return bytes.toString(CryptoJS.enc.Utf8);

}

export const paginationKey = (req) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search || "";

    return { page, limit, skip,search };
}; 