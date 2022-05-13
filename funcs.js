
function sfdiagramparser (xml) {
    return xml;
}

function sfasfactbase (xml1) {
    return xml1;
}

function sfdeleteblanklines (text) {
    return text;
}

function sfsortForPROLOG (text) {
    return text;
}

function sfdeleteTrailingSugar (text) {
    return text;
}

function sfstyleexpander (xml) {
    return xml;
}

function sfuncompress (rawdrawio) {
    console.log ('uncompress')
    var data = atob (rawdrawio);
    var inf = pako.inflateRaw (
	Uint8Array.from (data, c=>c.charCodeAt (0)), {to: 'string'})
    var str = decodeURIComponent (inf);
    return str;
}

function sfreadfile (fname) {
    var bytes = fs.readFileSync (fname, 'utf-8');
    return bytes;
}
