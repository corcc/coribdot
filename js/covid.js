async function covid19() {
	const data_src = {
		"url":"https://pomber.github.io/covid19/timeseries.json",
		"repository":{
			"name":"pomber/covid19",
			"url":"https://github.com/pomber/covid19",
			"platform":"GitHub",
		},
	},release_src = {
		"url":"https://github.com/TaYaKi71751/C0V1D-19-B0t/releases/tag/latest",
		"name":"Latest Release"
	},emoji = {
		"confirmed": "🦠",
		"deaths": "💀",
		"recovered": "😊",
		"date": "📅",
	};;

	await $.get(data_src.url, function (data) {
		Object.entries(data["Korea, South"][data["Korea, South"].length - 1]).forEach(([k, v]) => {
			var _html = '<div class="center-width item">';
			_html += '<div class="' + emoji[k] + '">' +
				emoji[k] + '</div>' +
				'<div class="value">' + v + '</div>';
			$(".covid.items").append(_html);
		});
	});
	await $(".covid.items").css("background","linear-gradient(to left bottom,#f8a,#a8f)");
	await $(".covid.items").append('<a class="covid source" href="' + data_src.repository.url + '" title=" ' + data_src.repository.name + ' (' + data_src.repository.platform + ') ' + ' ">Data-Src</a>');
	await $(".covid.items").append('<a class="covid release" href="' + release_src.url + '" title=" ' + release_src.name + ' ">Release</a>');
}