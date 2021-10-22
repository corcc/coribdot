window.onload = (function () {
  (async function () {
    const _ = await window['global']['_function']['__']();
    await _();
  })().then(()=>{
    Object.keys(window).forEach((k)=>{
      if(window.global._window.includes(k)) { return; }
      delete window[k];
    })
  });
});
