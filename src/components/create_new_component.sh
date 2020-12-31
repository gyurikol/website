#!/bin/bash

: '
this file is used to create new components directory and base empty files

to understand furthermore of the structure read the following...
	https://charles-stover.medium.com/optimal-file-structure-for-react-applications-f3e35ad0a145
'

echo "what is the name of the component?"
read componentName

if [ ! -d $componentName ]; then
	mkdir $componentName
	cd $componentName

	touch "$componentName.css"
	# touch "$componentName-container.js"
	# touch "$componentName-redux.js"
	# touch "$componentName-styles.js"
	cat > "$componentName-view.js" << EOL
import React from "react";
import { Link } from "react-router-dom";

// styles
import "$componentName.css";

function $componentName() {

	return (
		<>

		</>
	);
}
EOL

	cat > "index.js" << EOL
export { default } from './$componentName-view'
EOL

fi
