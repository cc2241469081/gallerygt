const OSS = require('ali-oss')
const Client = new OSS({
  region: '',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: ''
})
export default Client
