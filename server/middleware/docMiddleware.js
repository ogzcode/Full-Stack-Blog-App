import multer from "multer";

export const docMiddleware = multer({
    limits: { fieldSize: 10 * 1024 * 1024 },
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
        destination: (req, file, cb) => {
            cb(null, "public");
        }
    })
});