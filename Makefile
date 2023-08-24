start: stop build
	@echo "Start services..."
	@docker-compose up -d

logs:
	@docker-compose logs -f

stop:
	@echo "Stop containers..."
	@docker-compose down --remove-orphans

restart: stop start logs

build:
	@echo "Building images..."
	@docker-compose build
