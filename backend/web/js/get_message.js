document.addEventListener("DOMContentLoaded", function (event) { 
	$.ajax({
		url: '/admin/site/get-message',
		type: 'GET',
		dataType: 'json',
		data: { },
		success: function (data) {
			$("#message-count").text(data.total_count);
			delete data.total_count;
			Object.keys(data).forEach(function (key) {
				console.log(data[key]);
				$(".menu").append('<li><a href="#"><div class="pull-left"><img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" class="img-circle" alt="User Image"></div><h4>' + data[key].name + '<small><i class="fa fa-clock-o"></i>' + data[key].created_at+'</small></h4><p>' + data[key].message+'</p></a></li >');
			});
		},
	});
});