function covid_vaccinate() {
    return (async function () {
        const data_src = {
            "url": "https://github.com/TaYaKi71751/corcc",
            "name": "corcc",
            "data": {
                "url": "https://tayaki71751.github.io/corcc/data/simple/latest.json",
            }
        }, emoji = {
            "symbol": "💉",
            "dataTime": "📅",
            "firstcnt": "☝️",
            "secondcnt": "✌️",
            "thirdcnt": "🤟",
        };
        $(`.${emoji['symbol'] + emoji['symbol']}.items`).append(`<a 
                class='${emoji['symbol'] + emoji['symbol']} source ' 
                href='${data_src.url}' title='${data_src.name}'>
                    <div class='${emoji['symbol']} sym'>${emoji['symbol']}</div>
            </a>`);
        await $.get(data_src.data.url, function (data) {
            Object.entries(data['today']).forEach(([k, v]) => {
                $(`.${emoji['symbol'] + emoji['symbol']}.items`).append(
                    `<div class="center-width item">
                    <div class='${emoji[k]}'>${emoji[k]}</div>
                        <div class="value">${v}</div>`);
                console.log(emoji[k], v)
            });
        });
    });
}
