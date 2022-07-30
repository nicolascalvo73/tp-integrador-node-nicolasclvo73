Trabajo Practico integrador API node.js
base de datos de paradas de colectivo por lineas
empleando express, axios, mongoose, nodemon, config, dotenv.

# tp-integrador-node-nicolasclvo73

get('http://localhost:3000/busstops/', getAllStops);
get('http://localhost:3000/busstops/:id', getStopById);
post('http://localhost:3000/busstops/', newStop);
post('http://localhost:3000/busstops/:linea', newStopLine);
delete('http://localhost:3000/busstops/:id', deleteStopById);
patch('http://localhost:3000/:id', updateStopById);

curl --location --request GET 'http://localhost:3000/busstops/62e55c2d74fdf0afcbf6aa00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "coordinates": {
        "lat": -31.41417,
        "lon": -64.199021
    },
    "company": "Coniferal",
    "stop": "C7040",
    "line": "71",
    "master_line": "Troncal 70",
    "direction": "B° CABO FARINA",
    "img": "https://www.infobae.com/new-resizer/4EAAweQLmEpbX0vaGXWGbpIgYwo=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/BB2OE5LWVJFI5BYCLFWU6YUFZM.jpg"
}'
