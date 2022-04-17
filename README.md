## Comands Initialiation APP

  # Hosts Docker Workspace
    - 3009 # backend_adonis   # http://localhost:3009
    - 3010 # backend_nest     # http://localhost:3010
    - 3011 # frontend         # http://localhost:8011
    - 3012 # ecommerce        # http://localhost:3012

    
  # Docker
    - build
      $ docker-compose build workspace
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev build workspace
      $ docker-compose -f docker-compose.stage.yml --env-file .env.stage build workspace

    - up container
      $ docker-compose up -d workspace mysql
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev up -d workspace mysql 
      $ docker-compose -f docker-compose.stage.yml --env-file .env.stage up -d workspace mysql 

    - exec container
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev exec workspace bash  
      $ docker exec -it id_constainer bash

    - stop/start container
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev stop workspace
      $ docker-compose -f docker-compose.dev.yml --env-file .env.dev start workspace

  # Start Apps
    - obs: after getting inside the workspace container

    $ cd ./packages/backend_adonis && yarn isntall && yarn dev
    $ cd ./packages/backend_adonis && yarn isntall && yarn start:dev
    $ cd ./packages/ecommerce && yarn isntall && yarn dev
    $ cd ./packages/frontend && yarn isntall && yarn dev
