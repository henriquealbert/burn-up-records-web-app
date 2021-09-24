import aws from 'aws-sdk'
import { nanoid } from 'nanoid'

const region = process.env.AWS_REGION
const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

const handler = async (req, res) => {
  const params = {
    Bucket: bucketName,
    Key: nanoid(),
    Expires: 240
  }

  const url = await s3.getSignedUrlPromise('putObject', params)
  res.status(200).json({ url })
}

export default handler
