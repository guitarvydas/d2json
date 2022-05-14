prep=./prep/prep
cwd=`pwd`
support=--support=${cwd}/support.js

all: clean main.js
	node main.js d2f.drawio

main: main.js
	node main.js d2f.drawio

#	${prep} '.' '$$' drawio.ohm drawio.glue --stop=1 ${support} <d2f.drawio

jslibs:
	npm install atob pako yargs ohm-js

d2f.json: ~/quicklisp/local-projects/d2json/boot/das2json/helloworld.drawio
	(cd ~/quicklisp/local-projects/d2json/boot/das2json ; make helloworld.json)
	cp ~/quicklisp/local-projects/d2json/boot/das2json/helloworld.drawio ./d2f.drawio
	cp ~/quicklisp/local-projects/d2json/boot/das2json/helloworld.json ./d2f.json
	cp ./d2f.json ../das2json/json2js

d2f.js : d2f.json
	(cd ../das2json/json2js ; make d2f.js)
	cp ../das2json/json2js/d2f.js ./d2f.js

main.js: pre.js cos.js d2f.js funcs.js post.js parser.js
	cat pre.js cos.js d2f.js funcs.js parser.js post.js >main.js

clean:
	rm -f d2f.json d2f.js main.js
