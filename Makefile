prep=./prep/prep
cwd=`pwd`
support=--support=${cwd}/support.js

all: example

example: clean main.js
	node main.js d2f.drawio 2>/tmp/d2f.json

main: main.js
	node main.js d2f.drawio

jslibs:
	npm install atob pako yargs ohm-js

main.js: pre.js cos.js d2f.js funcs.js post.js parser.js
	cat pre.js cos.js d2f.js funcs.js parser.js post.js >main.js

clean:
	rm -f main.js
