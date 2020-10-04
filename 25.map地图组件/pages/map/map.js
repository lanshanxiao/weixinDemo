// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 0,
        top: 300,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    markers: [{
      id: 0,
      iconPath: '/images/location.png',
      longitude: '114.40198',
      latitude: '36.11642',
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: '114.40198',
        latitude: '36.11642'
      }, {
        longitude: '114.40300',
        latitude: '36.11690'
      }],
      color: '#f00',
      width: 5,
      dottedLine: true
    }]
  },

  markertap(e) {
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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