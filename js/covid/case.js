function covid_case () {
    return (async function () {
        const data_src = {
            "url": "https://pomber.github.io/covid19/timeseries.json",
            "repository": {
                "name": "pomber/covid19",
                "url": "https://github.com/pomber/covid19",
                "platform": "GitHub",
            },
        }, emoji = {
            "confirmed": "🦠",
            "deaths": "💀",
            "recovered": "😊",
            "date": "📅",
        };
        await $.get(data_src.url, function (data) {
            Object.entries(data["Korea, South"][data["Korea, South"].length - 1]).forEach(([k, v]) => {
                var _html = `<div class="center-width item">
                    <div class='${emoji[k]}'>${emoji[k]}</div>
                    <div class="value">${v}</div>`;
                $(".covid.items").append(_html);
            });
        });
        $(".covid.items").append('<a class="covid source" href="' + data_src.repository.url + '" title=" ' + data_src.repository.name + ' (' + data_src.repository.platform + ') ' + ' ">Data-Src</a>');
    });
}