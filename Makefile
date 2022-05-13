prep=./prep/prep
cwd=`pwd`
support=--support=${cwd}/support.js

all:
	node stubs.js d2f.drawio

#	${prep} '.' '$$' drawio.ohm drawio.glue --stop=1 ${support} <d2f.drawio

