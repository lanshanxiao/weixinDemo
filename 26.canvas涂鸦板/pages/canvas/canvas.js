// pages/canvas/canvas.js
Page({
  startX: 0, //保存x坐标轴变量
  startY: 0, //保存u坐标轴变量
  isClear: false, //是否启用橡皮擦标记

  /**
   * 页面的初始数据
   */
  data: {
    pen: 3, //画笔的粗细默认值
    color: '#000' //画笔颜色
  },

  touchStart(e) {
    // 获取当前坐标点
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;

    // 创建绘图上下文对象
    this.context = wx.createContext();

    // 判断是否使用橡皮擦功能：true.是;false.否;
    if (this.isClear) {
      this.context.setStrokeStyle("#f8f8f8"); //橡皮擦原理:利用擦过的地方被填充为画布的颜色,从而达到橡皮擦的效果
      this.context.setLineCap('round'); //设置线条端点的样式
      this.context.setLineJoin('round'); //设置两线交叉处的样式
      this.context.setLineWidth(20); //设置线条宽度
      this.context.save(); //保存当前坐标轴的缩放，旋转，平移信息
      this.context.arc(this.startX, this.startY, 5, 0, 2 * Math.PI, true); //添加一个弧形路径到当前路径，顺时针绘制，这里总共画360度，圆形
      this.context.fill(); //对当前路径进行填充
      this.context.restore(); //恢复之前保存过的坐标轴的缩放、旋转、平移信息
    } else {
      // 设置颜色
      this.context.setStrokeStyle(this.data.color);
      // 设置笔宽
      this.context.setLineWidth(this.data.pen);
      // 设置笔边(圆角)
      this.context.setLineCap("round");
      // 开始绘制
      this.context.beginPath();
    }
  },

  touchMove(e) {
    // 获取移动后的坐标点
    let moveX = e.changedTouches[0].x;
    let moveY = e.changedTouches[0].y;

    if (this.isClear) {
      this.context.save();
      // 设置画笔移动到起始点
      this.context.moveTo(this.startX, this.startY);
      // 绘制一条到x1, y1的直线
      this.context.lineTo(moveX, moveY);
      // 需要进行路径描边(内存中完成)
      this.context.stroke();
      this.context.restore(); //恢复之前保存过的坐标轴的缩放、旋转、平移信息

    } else {
      this.context.moveTo(this.startX, this.startY);
      this.context.lineTo(moveX, moveY);
      this.context.stroke();
    }

    // 重新设置坐标点
    this.startX = moveX;
    this.startY = moveY;

    // 绘制到页面
    wx.drawCanvas({
      canvasId: 'myCanvas',
      reserve: true, //是否存储
      actions: this.context.getActions() //获取绘图动作数组
    });
  },

  touchEnd(e) {

  },

  penSelect(e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param)
    });
    this.isClear = false;
  },

  colorSelect(e) {
    this.setData({
      color: e.currentTarget.dataset.param
    });
    this.isClear = false;
  },

  clearCanvas() {
    if (this.isClear) {
      this.isClear = false;
    } else {
      this.isClear = true;
    }
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