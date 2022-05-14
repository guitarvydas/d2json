
function sfdiagramparser (xml) {
    console.log ('sfdiagramparser');
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
    console.log (rawdrawio);
    var str = prep (rawdrawio, 'drawio.ohm', 'drawio.glue', './support.js', 1);
    return str;
}

function sfreadfile (fname) {
    console.log ('sfreadfile');
    console.log (fname);
    var bytes = fs.readFileSync (fname, 'utf-8');
    console.log (`sfreadfile len=${bytes.length} type=${typeof bytes}`);
    console.log (`sfreadfile bytes=\n${bytes}`);
    return bytes;
}
