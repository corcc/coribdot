
// async function vaccinate() {
//     const data_src = {
//         "url": "https://www.data.go.kr/data/15078166/openapi.do",
//         "name": "",
//         "openapi": {
//             "url": "https://nip.kdca.go.kr/irgd/cov19stats.do?list=all",
//         }
//     }, emoji = {
//         "firstCnt": "☝️",
//         "secondCnt": "✌️",
//         "thirdCnt": "😊",
//         "dateTime": "📅",
//     }, settings = {
//         "url": data_src.openapi.url,
//         'cache': false,
//         'dataType': "*/*",
//         "async": true,
//         "crossDomain": true,
//         "method": "GET",
//         "headers": {
//             // "Sec-Fetch-Dest":"document",
//             "accept": "*/*",
//             "Access-Control-Allow-Origin": "*"
//         },
//     };
//     await $.ajax(settings).success( function (xml) {
//         console.log($(xml));
//     });
//     await $(".vaccinate.items").css("background", "linear-gradient(to left bottom,#8f3,#f38)");
//     await $('.vaccinate.items').append('<a class="covid source" href="' + data_src.url + '" title=" ' + data_src.name + ' ">Data-Src</a>');
// }