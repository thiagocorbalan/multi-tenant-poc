start: stop build
	@echo "Start services..."
	@docker-compose up

stop:
	@echo "Stop containers..."
	@docker-compose down --remove-orphans

build:
	@echo "Building images..."
	@docker-compose build
