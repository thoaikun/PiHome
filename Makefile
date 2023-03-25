run mobile:
	cd ./mobile	
	expo start

run backend:
	docker-compose up

format code:
	npx prettier --write ./mobile/src
	npx prettier --write ./backend/src