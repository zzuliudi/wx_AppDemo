// pages/index/index.js
import request from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    topList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // this为当前页面的实例对象
    let bannerListData = await request("banner", {
      type: 2
    })
    let recommendListData = await request("personalized", {
      limit: 10
    })
    this.setData({
      bannerList: bannerListData.banners,
      recommendList: recommendListData.result,
    })
    let idsIndex = [991319590, 2809513713, 2809577409, 5059633707, 5059642708]
    let resultArr = []
    idsIndex.forEach(async (item) => {
      let topListData = await request("playlist/detail", {
        id: item
      })
      let topListItem = {
        name: topListData.playlist.name,
        tracks: topListData.playlist.tracks.slice(0, 3)
      }
      resultArr.push(topListItem)
      //不需要五次请求结束
      this.setData({
        topList: resultArr
      })
      // 需要等待五次请求结束之后才更新，页面会长时间白屏，用户体验差
      // return  this.setData({
      //   topList: resultArr
      // })
    })
    console.log(resultArr);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})