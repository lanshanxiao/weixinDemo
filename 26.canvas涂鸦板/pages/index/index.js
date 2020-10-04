// pages/index/index.js
Page({
  // 定义坐标变量
  startX: 0,
  startY: 0,
  /**
   * 页面的初始数据
   */
  data: {
    pen:2,
    color:'#0f0'
  },

  touchStart(e) {
    // 获取当前坐标点
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;

    // 创建绘图上下文对象
    this.context = wx.createContext();
    // 设置颜色
    this.context.setStrokeStyle(this.data.color);
    // 设置笔宽
    this.context.setLineWidth(this.data.pen);
    // 设置笔边(圆角)
    this.context.setLineCap("round");
    // 开始绘制
    this.context.beginPath();
  },

  touchMove(e) {
    // 获取移动后的坐标点
    let moveX = e.changedTouches[0].x;
    let moveY = e.changedTouches[0].y;
    // 设置画笔移动到起始点
    this.context.moveTo(this.startX, this.startY);
    // 绘制一条到x1, y1的直线
    this.context.lineTo(moveX, moveY);
    // 需要进行路径描边(内存中完成)
    this.context.stroke();

    // 重新设置坐标点
    this.startX = moveX;
    this.startY = moveY;

    // 绘制到页面
    wx.drawCanvas({
      canvasId:'myCanvas',
      reserve:true,//是否存储
      actions:this.context.getActions()//获取绘图动作数组
    });
  },

  touchEnd(e) {

  },

  penSelect(e){
    this.setData({
      pen:parseInt(e.currentTarget.dataset.param)
    });
  },

  colorSelect(e){
    this.setData({
      color:e.currentTarget.dataset.param
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