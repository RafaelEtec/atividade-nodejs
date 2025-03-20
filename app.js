var weather = require('weather-js');
const { translate } = require('bing-translate-api');

const cidade = process.argv[2];
var condicao = "";

weather.find({search: cidade, degreeType: 'C'}, async function(err, result) {
    if(err) console.log(err);

    await translate(result[0].current.skytext, null, 'pt').then(res => {
        condicao = res;
    }).catch(err => {
        console.error(err);
    });

    console.log(
        "Previsão do tempo para " + cidade + ":" +
        "\n - Temperatura: " + result[0].current.temperature + "°C" +
        "\n - Condição: " + condicao.translation +
        "\n - Sensação térmica: " + result[0].current.feelslike + "°C"
    );
});