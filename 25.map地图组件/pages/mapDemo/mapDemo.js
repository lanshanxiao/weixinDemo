// pages/mapDemo/mapDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099993,
      longitude: 113.324520,
      name: 'T.I.T创意园',
      iconPath: '/images/location.png',
      width: 50,
      height: 50
    }, {
      id: 2,
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/images/location.png',
      width: 50,
      height: 50
    }]
  },

  getCenterLocation(e) {
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log(res.longitude);
        console.log(res.latitude);
      }
    })
  },

  moveToLocation(e) {
    this.mapCtx.moveToLocation();
  },

  translateMarker(e) {
    this.mapCtx.translateMarker({
      markerId: 2,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.099993,
        longitude: 113.324520
      },
      animationEnd() {
        console.log('移动完成');
      }
    })
  },

  includePoints(e) {
    this.mapCtx.includePoints({
      padding: [5], //缩放比例
      points: [{
          latitude: 23.10229,
          longitude: 113.3345211
        },
        {
          latitude: 23.00229,
          longitude: 113.3345211
        }
      ]
    });
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
    this.mapCtx = wx.createMapContext("myMap");
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