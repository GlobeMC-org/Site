run:
	yarn run start

deploy:
	yarn build
	rsync -av ./build/* lovie:/opt/www/globemc