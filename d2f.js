

var diagramparser_signature = {
    name: "diagramparser",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var diagramparser_protoImplementation = {
    name: "diagramparser",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdiagramparser (message.data);
me.send ("out", x, message);


    }
}

function diagramparser (container, instancename) {
    let me = new Leaf (diagramparser_signature, diagramparser_protoImplementation, container, instancename);
    return me;
}



var asfactbase_signature = {
    name: "asfactbase",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var asfactbase_protoImplementation = {
    name: "asfactbase",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfasfactbase (message.data);
me.send ("out", x, message);


    }
}

function asfactbase (container, instancename) {
    let me = new Leaf (asfactbase_signature, asfactbase_protoImplementation, container, instancename);
    return me;
}



var deleteblanklines_signature = {
    name: "deleteblanklines",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var deleteblanklines_protoImplementation = {
    name: "deleteblanklines",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdeleteblanklines (message.data);
me.send ("out", x, message);


    }
}

function deleteblanklines (container, instancename) {
    let me = new Leaf (deleteblanklines_signature, deleteblanklines_protoImplementation, container, instancename);
    return me;
}



var sortForPROLOG_signature = {
    name: "sortForPROLOG",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var sortForPROLOG_protoImplementation = {
    name: "sortForPROLOG",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfsortForPROLOG (message.data);
me.send ("out", x, message);


    }
}

function sortForPROLOG (container, instancename) {
    let me = new Leaf (sortForPROLOG_signature, sortForPROLOG_protoImplementation, container, instancename);
    return me;
}



var deleteTrailingSugar_signature = {
    name: "deleteTrailingSugar",
    inputs: [{name:"in", structure:["in"]}],
    outputs: []
}


var deleteTrailingSugar_protoImplementation = {
    name: "deleteTrailingSugar",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdeleteTrailingSugar (message.data);
me.send ("out", x, message);


    }
}

function deleteTrailingSugar (container, instancename) {
    let me = new Leaf (deleteTrailingSugar_signature, deleteTrailingSugar_protoImplementation, container, instancename);
    return me;
}



var kickStart_signature = {
    name: "kickStart",
    inputs: [],
    outputs: [{name:"out", structure:["out"]}]
}


var kickStart_protoImplementation = {
    name: "kickStart",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var rawbinary = sfreadfile (argv._[0]);
me.send ("out", rawbinary, null);


    }
}

function kickStart (container, instancename) {
    let me = new Leaf (kickStart_signature, kickStart_protoImplementation, container, instancename);
    return me;
}



var d2f_signature = {
    name: "d2f",
    inputs: [],
    outputs: []
}



function d2f_makechildren (container) {
      var child1 = new diagramparser (container, "diagramparser");
        var child2 = new asfactbase (container, "asfactbase");
        var child3 = new deleteblanklines (container, "deleteblanklines");
        var child4 = new sortForPROLOG (container, "sortForPROLOG");
        var child5 = new deleteTrailingSugar (container, "deleteTrailingSugar");
        var child6 = new kickStart (container, "kickStart");
        var child7 = new styleexpander (container, "styleexpander");
        var child8 = new uncompress (container, "uncompress");
      var children = [ {name: "diagramparser", runnable: child1}, {name: "asfactbase", runnable: child2}, {name: "deleteblanklines", runnable: child3}, {name: "sortForPROLOG", runnable: child4}, {name: "deleteTrailingSugar", runnable: child5}, {name: "kickStart", runnable: child6}, {name: "styleexpander", runnable: child7}, {name: "uncompress", runnable: child8} ];
      return children;
}

function d2f_makeconnections (container) {
    var conn9 = {sender:{name: "uncompress", etag: "out"}, net: "NIY", receivers:  [{name: "diagramparser", etag: "in"}] };
    var conn10 = {sender:{name: "diagramparser", etag: "out"}, net: "NIY", receivers:  [{name: "styleexpander", etag: "in"}] };
    var conn11 = {sender:{name: "styleexpander", etag: "out"}, net: "NIY", receivers:  [{name: "asfactbase", etag: "in"}] };
    var conn12 = {sender:{name: "asfactbase", etag: "out"}, net: "NIY", receivers:  [{name: "deleteblanklines", etag: "in"}] };
    var conn13 = {sender:{name: "deleteblanklines", etag: "out"}, net: "NIY", receivers:  [{name: "sortForPROLOG", etag: "in"}] };
    var conn14 = {sender:{name: "sortForPROLOG", etag: "out"}, net: "NIY", receivers:  [{name: "deleteTrailingSugar", etag: "in"}] };
    var conn15 = {sender:{name: "kickStart", etag: "out"}, net: "NIY", receivers:  [{name: "uncompress", etag: "in"}] };
    var connections = [ conn9, conn10, conn11, conn12, conn13, conn14, conn15 ];
    return connections;
}

function d2f_makenets (container) {
    return [];
}

var d2f_protoImplementation = {
    name: "d2f",
    kind: "container",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        deliverInputMessageToAllChildrenOfSelf (me, message);
    }
}

function d2f (container, instancename) {
    let me = new Container (d2f_signature, d2f_protoImplementation, container, instancename);
    me.children = d2f_makechildren (me);
    me.connections = d2f_makeconnections (me);
    me.nets =  d2f_makenets (me);
    me.deliver_input_from_container_input_to_child_input = deliver_input_from_container_input_to_child_input;
    me.deliver_input_from_container_input_to_me_output = deliver_input_from_container_input_to_me_output;
    return me;
}



var styleexpander_signature = {
    name: "styleexpander",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var styleexpander_protoImplementation = {
    name: "styleexpander",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfstylexpander (message.data);
me.send ("out", x, message);


    }
}

function styleexpander (container, instancename) {
    let me = new Leaf (styleexpander_signature, styleexpander_protoImplementation, container, instancename);
    return me;
}



var uncompress_signature = {
    name: "uncompress",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var uncompress_protoImplementation = {
    name: "uncompress",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var u = sfuncompress (message.data);
me.send ("out", u, message);


    }
}

function uncompress (container, instancename) {
    let me = new Leaf (uncompress_signature, uncompress_protoImplementation, container, instancename);
    return me;
}


