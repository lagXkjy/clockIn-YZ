// pages/clockIn/judge/judge.js
const $common = require('../../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  GetIsBinding() {
    $common.request(
      'POST',
      $common.config.GetIsBinding, {
        OpenId: wx.getStorageSync('openid'),
      },
      (res) => {
        if (res.data.IsBinding) {
          wx.reLaunch({ url: '/pages/clockIn/phonenumber/phonenumber' })
        } else {
          wx.reLaunch({ url: '/pages/login/login' })
        }
      },
      (res) => {
        $common.showModal('亲~网络不给力哦，请稍后重试');
      },
      (res) => {
        $common.hide();
      }
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.GetIsBinding()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})