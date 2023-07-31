// 发送ajax请求
/*
1.封装函数
    1.功能点明确
    2.函数内部应该保留固定代码（静态的）
    3.将动态的数据抽取成形参，由使用者根据自身的情况动态的传入实参
    4.一个良好的功能函数应该设置形参的默认值
2.封装功能组件
    1.功能点明确
    2.组件内部保留静态的代码
    3.将动态的数据抽取成props参数，由使用者根据自身的情况以标签的形式动态传入props参数
    4.一个良好的组件应该设置组件的必要性及数据类型
    props：{
        msg:{
            required:true;
            default:默认值；
            type:String;
        }
    }

*/
// 设定默认值
import config from "./config"
export default (url, data = {}, method = "GET") => {
    // 一个new Promise的初始化状态是pendding
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host + url,
            data,
            method,
            success: (res) => {
                resolve(res.data)
            },
            fail: (error) => {
                reject(error)
            }
        })
    })

}