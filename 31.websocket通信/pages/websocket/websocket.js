Page({
	message: '',
	data: {
		responseString: '<h1>this is reponse content</h1>'
	},
	recodeMessage(e) {
		this.message = e.detail.value;
	},
	sendMessage(e) {
		let that = this;
		// 发送socket数据
		wx.sendSocketMessage({
			data: that.message
		});
		// 接收服务器返回的数据
		wx.onSocketMessage((data) => {
			console.log('接收到服务器的数据', data);
			let receiveData = data.data.split(" ")[0];
			this.setData({
				responseString: '<h4>[接收到服务器的数据]' + receiveData + '</h4>'
			});


		});
	},

	onShow: function () {
		// 在线服务器位置：http://coolaf.com/tool/chattest
		// 建立连接
		wx.connectSocket({
			url: 'ws://123.207.136.134:9010/ajaxchattest'
		});

		// 链接成功与否的判断
		wx.onSocketOpen(() => {
			console.log("socket连接成功");
		});
	},

	onHide: function () {
		// 关闭连接
		wx.closeSocket({});

		// 关闭连接回调
		wx.onSocketClose(() => {
			console.log('socket已经关闭');
		});
	}
})