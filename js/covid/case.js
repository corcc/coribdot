window['global']['_function']['_covid']['case'] = function () {
  return (async function () {
    const data = {
      "url": globalThis.global.host + "/corcc/case/simple/latest.json",
      "repository": {
        "name": "corcc/corcc",
        "url": "https://github.com/corcc/corcc",
        "platform": "GitHub",
      },
    }, emoji = {
      "symbol": "🦠",
      "confirmed": "🦠",
      "deaths": "💀",
      "recovered": "😊",
      "dataTime": "📅",
    }, desc = {
      "confirmed": "Confirmed Cases",
      "deaths": "Deceased",
      "recovered": "Recovered",
      "dataTime": "Data's Time (GMT+0900)",
    };
    const __ = (function (v) {
      return !(typeof v == 'undefined' || v == '');
    });
    const randomNum = (function(MAX_NUM){
      return ((Math.random()+"").split(".")[1]) % MAX_NUM;
    });
    const randomColor = (function () {
      return `rgba(${randomNum(255)},${randomNum(255)},${randomNum(255)},160)`;
    });
    const _e = (function (options, ...inner) {
      var _inner = '', _style = '';
      if (__(inner) && typeof inner != 'string') {
        const _tmp = Object.values(inner);
        for (var _index = 0; _index < _tmp.length; _index++) {
          _inner += (_index != 0 ? (__(options.br) ? (options.br ? '<br>' : '') : '') : '') +
            _tmp[_index];
        }
      }
      if (typeof options.style == 'object') {
        Object.entries(options.style).forEach(([prpNm, prpVl]) => {
          _style += `${prpNm}:${prpVl};`;
        });
      }
      return ((__(options.tag) ? `<${options.tag}` : '') + ' ' +
        (__(options.class) ? `${'class="' + options.class + '"'}` : '') + ' ' +
        (__(options.href) ? `href='${options.href}'` : '') + ' ' +
        (__(options.style) ? `style='${typeof options.style == 'object' ? _style : options.style}'` : '') + ' ' +
        (__(options.title) ? (`title='${options.title.replace("'", "&#146;")}'`) : '') + ' ' +
        (__(options.tag) ? `>` : '') + ' ' +
        (__(inner) ? `${typeof inner != 'string' ? _inner : inner}` : '') + ' ' +
        (__(options.tag) ? `</${options.tag}>` : '') + ' ');
    });
    const docAppend = (function (selectors, doc) {
      $(`${selectors}`).append(doc);
    });
    const symbol = (function symbol() {
      return _e({
        'tag': 'a',
        'class': `${emoji['symbol'] + emoji['symbol']} source`,
        'href': `${data.repository.url}`,
        'title': ` ${data.repository.name} (${data.repository.platform}) `
      }, _e({
        'tag': 'div',
        'class': `${emoji['symbol']} sym`,
      }, `🆕🗓️${emoji['symbol']}`))
    });

    await $.get(data.url, function (res) {
      const data = Object.entries(res);
      console.log(res);
      var _html = "";
      (function () {
        if ($(`.covid > .${emoji['symbol'] + emoji['symbol']}.items`).length == 0) {
          $(`.covid`).append(_e({
            'tag': 'div',
            'class': `${emoji['symbol'] + emoji['symbol']} items`,
            'style': {
              "background": `linear-gradient(to left bottom,${randomColor()},${randomColor()})`
            }
          }));
        }
      })();
      data.forEach(([k, v]) => {
        console.log(emoji[k], v);
        _html += _e({
          'tag': 'div',
          'class': 'center-width item',
          'title': desc[k],
        }, _e({
          'tag': 'div',
          'class': `${emoji[k]}`,
        }, emoji[k]), _e({
          'tag': 'div',
          'class': 'value',
        }, `${v}`));
      });
      $(`.covid > .${emoji['symbol'] + emoji['symbol']}.items`).html(symbol() + _html);
    });

  });
}