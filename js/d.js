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
  "－・－・": window['global']['_function']['_covid']['case'](),
  "・・・": window['global']['_function']['_covid']['vaccination'](),
  "remove": function () {
    Object.entries(this).forEach(([k, v]) => {
      delete this[k];
    });
    delete this;
  },
}
window['global']['_function']['__'] = async function () {
  return (async function () {
    prop.background = globalThis['cookie']()['background'];
    await (async function () {
      await globalThis['global']['_function']._fn._d(globalThis['global']['_function']._fn);
      await globalThis['global']['_function']._fn.remove();
      delete globalThis['global']['_function']._fn;
    })();

    await (async function () {
      Object.keys(globalThis['global']).forEach((_varNm) => {
        if (globalThis['global']['_window'].includes(_varNm)) { return; }
        delete globalThis['global'][_varNm];
      })
    })();
  })
}