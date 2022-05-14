
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

    var str = parsewhole (rawdrawio, 'drawio.ohm', 'drawio.glue', './support.js');

    // console.log (`uncompress len=${rawdrawio.length} ${typeof rawdrawio}`)
    // var data = atob (rawdrawio);
    // console.log (`atob data len=${data.length}`)
    // var inf = pako.inflateRaw (
    // 	Uint8Array.from (data, c=>c.charCodeAt (0)), {to: 'string'})
    // var str = decodeURIComponent (inf);

    return str;
}

function sfreadfile (fname) {
    console.log ('sfreadfile');
    console.log (fname);
    var bytes = fs.readFileSync (fname, 'utf-8');
    console.log (`sfreadfile len=${bytes.length} type=${typeof bytes}`);
    var data = atob (bytes);
    console.log (`sfreadfile atob data len=${data.length} type=${typeof data}`)
    return bytes;
}
