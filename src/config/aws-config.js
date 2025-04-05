const { S3Client } = require("@aws-sdk/client-s3");
require("dotenv").config();

const s3 = new S3Client({
  region: "us-east-1", 
  // endpoint: "https://s3.ap-south-1.amazonaws.com",
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.IM_AWS_ACCESS_KEY, 
    secretAccessKey: process.env.IM_AWS_SECRET_KEY,
  },
});

module.exports = s3;
