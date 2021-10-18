function covid_vaccinate() {
    return (async function () {
        const data_src = {
            "url": "https://github.com/TaYaKi71751/corcc",
            "name": "corcc",
            "data": {
                "url": "https://tayaki71751.github.io/corcc/data/simple/latest.json",
            }
        }, emoji = {
            "dataTime": "📅",
            "firstcnt": "☝️",
            "secondcnt": "✌️",
            "thirdcnt": "🤟",
        };
        // Use cors-anywhere for get proxied response
        await $.get(data_src.data.url, function (data) {
            Object.entries(data['today']).forEach(([k, v]) => {
                $('.vaccination.items').append(
                    `<div class="center-width item">
                    <div class='${emoji[k]}'>${emoji[k]}</div>
                        <div class="value">${v}</div>`);
                console.log(emoji[k], v)
            });
        });
        $('.vaccination.items').append('<a class="vaccination source" href="' + data_src.url + '" title=" ' + data_src.name + ' ">Data-Src</a>');
    });
}