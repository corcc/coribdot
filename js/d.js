var _fn = {
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
    "pre": function () {
        const css = {
            "🦠🦠": {
                "background": "linear-gradient(to left bottom,#f8a,#a8f)",
            },
            "💉💉": {
                "background": "linear-gradient(to left bottom,#8af,#8fa)",
            },
        }
        Object.entries(css).forEach(([_class, styles]) => {
            Object.entries(styles).forEach(([k, v]) => {
                $("." + _class + ".items").css(k, v);
            });
        });
    },
    "－・－・": covid(),
    "remove": function () {
        Object.entries(this).forEach(([k, v]) => {
            delete this[k];
        });
        delete this;
    },
}
var __ = async function () {
    return (async function () {
        await (async function () {
            await _fn._d(_fn);
            await _fn.remove();
            delete _fn;
        })();

        await (async function () {
            window.covid_vaccinate = undefined;
            window.covid_case = undefined;
        })();
    })
}