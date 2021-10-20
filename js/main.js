window.onload = async function () {
  (async function () {
    const _ = await __();
    await _();
  })();
  (function () {
    window['__'] = undefined;
  })();
}