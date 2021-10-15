var emoji = {
	"confirmed": "🦠",
	"deaths": "💀",
	"recovered": "😊",
	"date": "📅",
};
window.onload =
	function () {
		$.get("https://pomber.github.io/covid19/timeseries.json", function (data) {
			Object.entries(data["Korea, South"][data["Korea, South"].length - 1]).forEach(([k, v]) => {
				var _html = '<div class="center-width item">';
				_html += '<div class="' + emoji[k] + '">' +
					emoji[k] + '</div>' +
					'<div class="value">' + v + '</div>';
				$(".covid.items").append(_html);
			});
		}).then(()=>{
			$(".covid.items").append('<a class="covid source" href="https://github.com/pomber/covid19" title=" pomber/covid19 (GitHub) ">Data-Src</a>');
			$(".covid.items").append('<a class="covid release" href="https://github.com/TaYaKi71751/C0V1D-19-B0t/releases/tag/latest" title=" Release ">Release</a>')
		});
		
	}