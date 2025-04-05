const s3 = require('../config/aws-config');

const uploadFile = async (
  uploadData,
  successCallback = () => {},
  failCallback = () => {}
) => {
  const uploadParams = {
    Bucket: process.env.BUCKET_NAME
      ? process.env.BUCKET_NAME
      : 'etmmam-image-videos',
    Key: uploadData?.key,
    Body: uploadData?.file,
    ContentType: uploadData?.contentType,
  };

  try {
    const data = await s3.upload(uploadParams)?.promise();
    successCallback(data?.Location);
    return data;
  } catch (err) {
    failCallback(err);
  }
};

module.exports = { uploadFile };
