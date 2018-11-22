#!/bin/bash
if [ -d build ]; then
	echo -e "Build folder detected.\nUsing existing build files for docker image: $1\n"
	npm install
	npm run build
	docker build -f nginx.Dockerfile -t $1 .
else
	echo -e "Build folder not detected.\nUsing two stage build for docker image: $1\n"
	docker build -t $1 .
fi
echo -e "\n Run with:\n docker run -p <port>:80 --name <name> -t $1"