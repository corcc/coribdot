function isValid(v) {
    return !(typeof v == 'undefined' || v == null);
}

function importJscript(path) {
    if (!isValid(path.src)) { throw new Error("path.src is (undefined || null)"); }
    var startingTime = new Date().getTime();

    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = isValid(path.src)?path.src:undefined;
    if (isValid(path.options)) {
        Object.entries(path.options).forEach(([k, v]) => {
            script[k] = v;
        });
    }
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
}

function importJscripts(paths) {
    Object.entries(paths).forEach(([name, value]) => {
        var path = value;
        path["name"] = isValid(path["name"])?path["name"]:name;
        importJscript(path);
    });
}

const paths = {
    "jQuery": {
        "name": "jQuery 3.6.0",
        "desc": "jQuery 3.6.0 from Microsoft CDN",
        "src": "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.min.js",
    },
    "TwEmoji": {
        "name": "TwEmoji",
        "desc": "TwEmoji by Twitter for Emoji Fonts",
        "src": "https://twemoji.maxcdn.com/v/latest/twemoji.min.js",
    },
    "./js/covid/case.js": {
        "src": "./js/covid/case.js",
    },
    "./js/covid/vaccination.js": {
        "src": "./js/covid/vaccination.js",
    },
};
importJscripts(paths);