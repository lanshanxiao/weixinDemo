function getRandomColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }

  return '#' + rgb.join('');
}
// pages/video/video.js
Page({

  inputValue:'',
  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    danmulist: [{
        text: '这是第一条弹幕',
        color: '#f00',
        time: 1
      },
      {
        text: '这是第二条弹幕',
        color: '#0f0',
        time: 3
      },
    ]
  },
  bindButtonTap() {
    let that = this;
    //微信api
    wx.chooseVideo({
      sourceType: ['album', 'camera'], //视频源可以来自手机相册，也可以来自拍摄
      maxDuration: 60, //视频最长60秒
      camera: ['front', 'back'], //可以使用前置和后置摄像头
      success(res) {
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value;
  },
  bindSendDanmu(e) {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
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
    this.videoContext = wx.createVideoContext('myvideo');
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