const cloud = require('wx-server-sdk')
cloud.init()
// 云函数入口函数
const db = cloud.database()
// 云函数访问数据库上限为100
const MAX_LIMIT = 100
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const listname = "Invitations"
  // 先取出集合记录总数
  const countResult = await db.collection(listname).count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection(listname).skip(i * MAX_LIMIT).limit(MAX_LIMIT).where({receiverid:event.receiverid}).get()
    tasks.push(promise)
  }
  if(tasks.length!=0)
  {
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
      openid:wxContext.OPENID
    }
  })}
  else{
    return {
      data: [],
      errMsg: "",
      openid:wxContext.OPENID
    }
  }
}