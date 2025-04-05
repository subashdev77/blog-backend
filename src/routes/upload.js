const uploadRouter = require("express").Router();
const multer = require("multer");
const s3 = require("../config/aws-config");
const multerS3 = require("multer-s3");

// Configure Multer to use S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "etmmam-image-videos", 

    
    key: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); 
    },
  }),
});

uploadRouter.post("/", upload.single("file"), (req, res) => {
  try {
    console.log(req.file);
    res.status(200).json({ fileUrl: req.file.location }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = uploadRouter;
