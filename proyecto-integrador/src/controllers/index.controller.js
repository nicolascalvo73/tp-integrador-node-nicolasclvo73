function getIndex(req, res){
    res.json({
        msj: "Hola mundo desde getindex"
    });
}

function postIndex(req, res){
    res.json({
        msj: "Hola mundirijillo desde postIndex"
    });
}


module.exports = { getIndex, postIndex };