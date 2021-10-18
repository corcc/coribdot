function covid_vaccinate() {
    return (async function () {
        const data_src = {
            "url": "https://www.data.go.kr/data/15078166/openapi.do",
            "name": "",
            "openapi": {
                "url": "https://nip.kdca.go.kr/irgd/cov19stats.do?list=all",
            }
        }, emoji = {
            "dataTime": "📅",
            "firstcnt": "☝️",
            "secondcnt": "✌️",
            "thirdcnt": "🤟",
        };
        // Use cors-anywhere for get proxied response
        await $.get('https://tayaki71751.github.io/corcc/data/simple/latest.json', function (data) {
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