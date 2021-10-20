function covid_vaccinate() {
  return (async function () {
    const data = {
      "url": "https://corcc.github.io/corcc/data/vaccination/simple/latest.json",
      "repository": {
        "name": "corcc/corcc",
        "url": "https://github.com/corcc/corcc",
        "platform": "GitHub",
      }
    }, emoji = {
      "symbol": "💉",
      "dataTime": "📅",
      "firstcnt": "☝️",
      "secondcnt": "✌️",
      "thirdcnt": "🤟",
    }, desc = {
      "thirdcnt": "Booster",
      "secondcnt": "Fully",
      "firstcnt": "First",
      "dataTime": "Data's Time (GMT+0900)",
    };

    const __ = (function (v) {
      return !(typeof v == 'undefined' || v == '');
    });
    const _e = (function (options, ...inner) {
      var _inner = '';
      if (__(inner) && typeof inner != 'string') {
        const _tmp = Object.values(inner);
        for (var _index = 0; _index < _tmp.length; _index++) {
          _inner += (_index != 0 ? (__(options.br) ? (options.br ? '<br>' : '') : '') : '') +
            _tmp[_index];
        }
      }
      return ((__(options.tag) ? `<${options.tag}` : '') + ' ' +
        (__(options.class) ? `${'class="' + options.class + '"'}` : '') + ' ' +
        (__(options.href) ? `href='${options.href}'` : '') + ' ' +
        (__(options.title) ? (`title='${options.title.replace("'","&#146;")}'`) : '') + ' ' +
        (__(options.tag) ? `>` : '') + ' ' +
        (__(inner) ? `${typeof inner != 'string' ? _inner : inner}` : '') + ' ' +
        (__(options.tag) ? `</${options.tag}>` : '') + ' ');
    });
    const docAppend = (function (selectors, doc) {
      $(`${selectors}`).append(doc);
    });

    const symbol = (function symbol() {
      docAppend(`.${emoji['symbol'] + emoji['symbol']}.items`,
        _e({
          'tag': 'a',
          'class': `${emoji['symbol'] + emoji['symbol']} source`,
          'href': `${data.repository.url}`,
          'title': ` ${data.repository.name} (${data.repository.platform}) `
        }, _e({
          'tag': 'div',
          'class': `${emoji['symbol']} sym`,
        }, `${emoji['symbol']}`)));
    })();``
    await $.get(data.url, function (res) {
      const data = Object.entries(res['today']);
      console.log(res);
      data.forEach(([k, v]) => {
        console.log(emoji[k],v);
        docAppend(`.${emoji['symbol'] + emoji['symbol']}.items`,
          _e({
            'tag': 'div',
            'class': 'center-width item',
            'title': desc[k],
          }, _e({
            'tag': 'div',
            'class': `${emoji[k]}`,
          }, emoji[k]), _e({
            'tag': 'div',
            'class': 'value',
          }, `${v}`)));
      });
    });
  });
}
