window['global'] = {};
window['global']['host'] = 'https://corcc.github.io';
window['global']['_function'] = {};
window['global']['_function']['covid'] = {};
window['global']['_function']['_covid'] = {};
window['global']['_window'] = Object.keys(window);
window['cookie'] = (function () {
  (function () {
    const _default = {
      'background':'#242424',
    };
    if (document.cookie == '') {
      Object.entries(_default).forEach(([k,v])=>{
        document.cookie=`${k}=${v};`;
      });
    }
  })();
  const cookies = document.cookie.split(";");
  var cks = {};
  Object.values(cookies).forEach((cookie) => {
    const k = cookie.substring(0, cookie.indexOf("="));
    const v = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    cks[k] = v;
  });
  return cks;
});
let prop = {
  "background":'#242424',
};
Object.defineProperty(prop, "background", {
  get: function () {
    return `${background}`;
  },
  set: function (value) {
    document.body.style.background = value;
    background = value;
    document.cookie = `background=${value};`;
  },
});