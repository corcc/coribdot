
window['global']['_function']['_covid']['vaccination'] = function () {
  return (async function () {
    const data = {
      "url": globalThis.global.host + "/corcc/vaccination/simple/latest.json",
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
      "today":"🇰🇷🆕",
      "today_c":"🇰🇷🆕🗓️",
      "yesterday_c":"🇰🇷🗓️"
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

    const symbol = (function symbol(day) {
      return _e({
        'tag': 'a',
        'class': `${emoji['symbol'] + emoji['symbol']} source`,
        'href': `${data.repository.url}`,
        'title': ` ${data.repository.name} (${data.repository.platform}) `
      }, _e({
        'tag': 'div',
        'class': `${emoji['symbol']} sym`,
      }, `${emoji[day]}${emoji['symbol']}`))
    });

    const unitTime = function (millisec) {
      const UNIT = {
        "second": 1000,
        "minute": 60000,
        "hour": 3600000,
      };
      const UNIT_MAX = {
        'second': 60,
        'minute': 60,
        'hour': 24
      };
      const _UNIT = Object.entries(UNIT).filter(([k]) => (millisec / UNIT[k] < UNIT_MAX[k]));
      return {
        'time': millisec / UNIT[_UNIT],
        'unit': _UNIT,
      };
    }

    const dataTimeAgo = function (data) {
      const _nowTime = Date.now;
      return unitTime(_nowTime() - Date.parse(data['dataTime'].replaceAll("-", " ") + " GMT+0900"));
    }
    await $.get(data.url, function (res) {
      console.log(res);
      const _data = Object.entries(res).filter(([k]) => (!(k.includes('t') && k.includes('ime'))));
      _data.forEach(([day, data]) => {
        const ago = dataTimeAgo(data);
        const mainElem = `.${emoji['symbol'] + emoji['symbol']}.items`;
        (function(){
          if($(`.covid > div > .${emoji['symbol'] + emoji['symbol']}.items.${day}`).length == 0){
            $(`.covid`).append(_e({
              'tag':'div',
              'class':'pad-1pc',
            },_e({
              'tag':'div',
              'class':`${emoji['symbol'] + emoji['symbol']} items ${day}`,
              'style':{
                'background':`${randomGradient('to left bottom')}`,
              },
            })));
          }
        })();
        var _html = "";
        Object.entries(data).forEach(([k, v]) => {
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
        $(`${mainElem}.${day}`).html(symbol(day) + _html);
      })
    });
  });
}
