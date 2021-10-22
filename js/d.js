window['global']['_function']['_fn'] = {
  "_d": function (a) {
    Object.entries(a).forEach(([k, v]) => {
      try {
        if (k.includes("remove")) {
          return;
        }
        v();
      } catch (e) {
        this._d(v);
      }
    });
  },
  "init": function () {
    
  }
  ,
  "pre": function () {
    const css = {
      "🦠🦠": {
        "background": "linear-gradient(to left bottom,#f8aa,#a8fa)",
      },
      "💉💉": {
        "background": "linear-gradient(to left bottom,#8afa,#8faa)",
      },
    }
    Object.entries(css).forEach(([_class, styles]) => {
      Object.entries(styles).forEach(([k, v]) => {
        $("." + _class + ".items").css(k, v);
      });
    });
  },
  "・・・": window['global']['_function']['_covid']['vaccination'](),
  "－・－・": window['global']['_function']['_covid']['case'](),
  "remove": function () {
    Object.entries(this).forEach(([k, v]) => {
      delete this[k];
    });
    delete this;
  },
}
window['global']['_function']['__'] = async function () {
  return (async function () {
    await (async function () {
      await globalThis['global']['_function']._fn._d(globalThis['global']['_function']._fn);
      await globalThis['global']['_function']._fn.remove();
      delete globalThis['global']['_function']._fn;
    })();

    await (async function () {
      Object.keys(window['global']).forEach((_varNm) => {
        if (window['global']['_window'].includes(_varNm)) { return; }
        if ((typeof window['global'][_varNm]).includes('bject')) {
          Object.keys(window['global'][_varNm])
        }
        if(typeof window['global'][_varNm]){
          delete window['global'][_varNm];
        }
      })
    })();
  })
}