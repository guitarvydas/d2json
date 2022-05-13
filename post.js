

function main () {
    // don't edit this, edit post.js instead
    argv = require('yargs/yargs')(process.argv.slice(2)).argv;
    console.log (argv);
    console.log ('main A');
    var d = new d2f (null, "d2f top");
    console.log ('main B');
    var kstart = d.lookupChild ("kickStart");
    console.log ('main C');
    kstart.handler (kstart, null);
    console.log ('main D');
    kstart.container.wakeup ();
    console.log ('main E');
          // htmlbutton.handler (htmlbutton, null);
          // htmlbutton.container.wakeup ();
          // let outs = testBench.outputs ();
          // if (Array.isArray (outs)) {
          //     if (outs.length > 0) {
          //         let order = outs [0].data;
          //         //document.getElementById ('output').innerHTML = outs.toString () + '\ndone';
          //         document.getElementById ('output').innerHTML
          //             = order.item.toString () + '\nextra: ' + order.extras.toString () + '\ncondiments: ' + order.condiments.toString ();
}    


main ();
