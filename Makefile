prep=./prep/prep
cwd=`pwd`
support=--support=${cwd}/support.js

all:
	node stubs.js

#	${prep} '.' '$$' drawio.ohm drawio.glue --stop=1 ${support} <d2f.drawio

