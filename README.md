```

██╗     ███████╗██╗  ██╗██╗  ██╗██████╗ ██╗     ██╗   ██╗███████╗███████╗
██║     ██╔════╝╚██╗██╔╝╚██╗██╔╝██╔══██╗██║     ██║   ██║██╔════╝██╔════╝
██║     █████╗   ╚███╔╝  ╚███╔╝ ██████╔╝██║     ██║   ██║███████╗███████╗
██║     ██╔══╝   ██╔██╗  ██╔██╗ ██╔═══╝ ██║     ██║   ██║╚════██║╚════██║
███████╗███████╗██╔╝ ██╗██╔╝ ██╗██║     ███████╗╚██████╔╝███████║███████║
╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝ ╚══════╝╚══════╝

```

## Requirements

### Production mode

- [Docker and docker-compose](https://docs.docker.com)

### Development mode

- [Docker and docker-compose](https://docs.docker.com)
- Python 3.11 (you can use [pyenv](https://github.com/pyenv/pyenv), [conda](https://docs.conda.io/projects/miniconda/en/latest/) or [asdf](https://asdf-vm.com) to install it)
- nodejs 20.5.1 (you can use [nvm](https://github.com/nvm-sh/nvm), [n](https://github.com/tj/n) or [asdf](https://asdf-vm.com) to install it)

## Run in development mode

1. Install dependencies

```bash
$ pip install -r requirements.txt
```

2. Start the postgres database server

```bash
$ docker-compose up -d
```

3. Run initial migrations

```
$ make migrate_dev
```

4. Seed the database (optional)

```
$ make seed_dev
```

5. Start the API server

```
$ make run_dev
```

6. Start the frontend server

```
$ cd frontend
$ npm ci
$ npm run dev
```

Frontend is served at `http://localhost:5173`

API is served at `http://localhost:8000`

## Run in production mode

1. Build and start the containers

```bash
$ make run
```

2. Run initial migrations

```
$ make migrate
```

3. Seed the database (optional)

```
$ make seed
```

Frontend is served at `http://localhost:3000`

API is served at `http://localhost:8000`
