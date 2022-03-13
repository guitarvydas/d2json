NODEMODULES=\
	../node_modules/ohm-js \
	../node_modules/yargs \
	../node_modules/atob \
	../node_modules/pako

# change this for your own environment
TOOLS=~/projects

all: $(NODEMODULES) tools helloworld.json

../node_modules/ohm-js:
	(cd .. ; npm install ohm-js)
../node_modules/yargs:
	(cd .. ; npm install yargs)
../node_modules/atob:
	(cd .. ; npm install atob)
../node_modules/pako:
	(cd .. ; npm install pako)

tools:
	(cd ../dr ; make)
	(cd ../prep ; make)
	(cd ../d2f ; make)
	(cd ../das2f ; make)
	(cd ../das2j ; make)

helloworld.json : tools helloworld.drawio
	./generate.bash $(TOOLS) helloworld.drawio

clean:
	(cd ../dr ; make clean)
	(cd ../prep ; make clean)
	(cd ../d2f ; make clean)
	(cd ../das2f ; make clean)
	(cd ../das2j ; make clean)
	rm -f layer*
	rm -f preprocessed*
	rm -f duct?_*
	rm -f out.json
	rm -rf _*
	rm -f *~

npmstuff: ../node_modules/ohm-js ../node_modules/yargs ../node_modules/yargs-parser ../node_modules/atob ../node_modules/pako
	cd ..
	npm install ohm-js yargs atob pako

