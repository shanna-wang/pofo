#!/bin/bash

for f in *.scss
do

	filename=$(basename "$f")
	filename="${filename%.*}"

	if [[ $filename =~ ^_ ]]; then
		continue
	else
		sass --sourcemap=none $filename.scss ../css/style.css
		postcss --use autoprefixer ../css/style.css -d ../
	fi

	echo style.css converted

done

echo "Conversion done!"