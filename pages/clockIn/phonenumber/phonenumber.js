// pages/clockIn/phonenumber/phonenumber.js
const $common = require('../../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
  },
  inputPhone(e) {
    this.data.phone = e.detail.value
  },
  UserBinding() {
    let {phone} = this.data
    if (!$common.phoneReg.test(phone)) return $common.showToast('手机号不正确')
    $common.request(
      'POST',
      $common.config.UserBinding, {
        uPhone: +phone
      },
      (res) => {
        if (res.data.IsBinding) {
          wx.reLaunch({
            url: '/pages/clockIn/clockIn/clockIn'
          })
        } else {
          $common.showToast('登陆失败')
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
  bindGetUserInfo(e) {
    let userInfo = e.detail.userInfo
    if (!userInfo) return
    $common.getOpenid(() => {
      $common.getUserInfo(userInfo, this.UserBinding)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})