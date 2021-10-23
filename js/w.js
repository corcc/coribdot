window['global'] = {};
window['global']['host'] = 'https://corcc.github.io';
window['global']['_function'] = {};
window['global']['_function']['covid'] = {};
window['global']['_function']['_covid'] = {};
window['global']['_window'] = Object.keys(window);
window['cookie'] = (function () {
  (function () {
    const _default = {
      'background': '#242424',
    };
    if (document.cookie == '') {
      Object.entries(_default).forEach(([k, v]) => {
        document.cookie = `${k}=${v};`;
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
const randomNum = (function (MAX_NUM) {
  return ((Math.random() + "").split(".")[1]) % MAX_NUM;
});
const randomColor = (function () {
  return `rgba(${randomNum(255)},${randomNum(255)},${randomNum(255)},160)`;
});
const randomGradient = (function (deg) {
  return `linear-gradient(${deg},${randomColor()},${randomColor()}) no-repeat fixed`
})
let prop = {
  "background": '#242424',
};
Object.defineProperty(prop, "background", {
  get: function () {
    return {
      "cfg": background,
      "now": document.body.style.background,
    };
  },
  set: function (value) {
    document.body.style.background = (value == 'random') ? (randomNum(2) ? randomColor() : randomGradient('to right bottom')) : value;
    background = value;
    document.cookie = `background=${value};`;
    console.log({
      "cfg": background,
      "now": document.body.style.background,
    });
  },
});