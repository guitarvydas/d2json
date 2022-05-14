
function sfdiagramparser (xml) {
    console.log ('sfdiagramparser');
//     | $prep '.' '$' $d2fdir/diagram.ohm $d2fdir/diagram.glue --stop=1 --support=$d2fdir/support.js \
//    var xml = prep (xml, 'diagram.ohm', 'diagram.glue', './support.js', 1);
    return xml;
}

function sfasfactbase (xml1) {
    console.log ('sfasfactbase');
    return xml1;
}

function sfdeleteblanklines (text) {
    console.log ('sfdeleteblanklines');
    return text;
}

function sfsortForPROLOG (text) {
    console.log ('sfsortForPROLOG');
    return text;
}

function sfdeleteTrailingSugar (text) {
    console.log ('sfdeleteTrailingSugar');
    return text;
}

function sfstyleexpander (xml) {
    console.log ('sfstyleexpander');
    return xml;
}

function sfuncompress (rawdrawio) {
// $prep '.' '$' $d2fdir/drawio.ohm $d2fdir/drawio.glue --stop=1 --support=$d2fdir/support.js <$name
    console.log ('sfuncompress');
    var str = prep (rawdrawio, 'drawio.ohm', 'drawio.glue', './support.js', 1);
    return str;
}

function sfreadfile (fname) {
    console.log ('sfreadfile');
    var bytes = fs.readFileSync (fname, 'utf-8');
    return bytes;
}
