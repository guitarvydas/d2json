prep=./prep/prep
cwd=`pwd`
support=--support=${cwd}/support.js

all:
	${prep} '.' '$$' drawio.ohm drawio.glue --stop=1 ${support} <d2f.drawio

