
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
    console.log ('uncompress')
    var data = atob (rawdrawio);
    var inf = pako.inflateRaw (
	Uint8Array.from (data, c=>c.charCodeAt (0)), {to: 'string'})
    var str = decodeURIComponent (inf);
    return str;
}

function sfreadfile (fname) {
    console.log ('sfreadfile');
    console.log (fname);
    var bytes = fs.readFileSync (fname, 'utf-8');
    return bytes;
}
