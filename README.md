# simple-user-noti
![Overview](https://github.com/zestzero/simple-user-noti/blob/main/documents/overview.png?raw=true)

## Development
> Simply start development environment using docker
```bash
$ docker-compose up
```

## Components
### Web server - [Repository](https://github.com/zestzero/simple-user-noti-web)
> A NextJs with NestJs server-side and ReactJs on client-side.
### Gateway API - [Repository](https://github.com/zestzero/simple-user-noti-gw)
> A Gateway API acts as a facade to sit in front of microservice in the backend.

### Backend API - [Repository](https://github.com/zestzero/simple-user-noti-be)
> A service to store data into database and publish message to messaging queue.

### Messaging Queue
> Coming soon

### Notification Service
> Coming soon

## Submodules
> Git submodules allows developers to create sub repositories within the same main repository. Also main repository is able to point to specific snapshot of submodules in order to keep versioning. [More detail and tutorial can be found here.](https://www.atlassian.com/git/tutorials/git-submodule)

### How to update submodules?
When you merged any submodule PRs into their own main branch and you would like to update the main repository to poining to the latest every submodules' main branches. Just simply execute the below command line at the main repository.
```bash
$ git submodule update
```

### Implementation notes 📝
> Push notification using Socket connection vs Server-sent evens (SSE)? 
> https://www.telerik.com/blogs/websockets-vs-server-sent-events

> Event source, web interface to server-sent events. It's not IE compatible at all.
> https://developer.mozilla.org/en-US/docs/Web/API/EventSource

> Interesting React UI library
> Mantine - Build fully functional accessible web applications with ease https://mantine.dev

> Interesting articles about combining GraphQL for client and gRPC for micro-service
> When GQL meets GRPC - https://medium.com/@svengau/when-graphql-meets-grpc-3e9729d32e05
> Evaluating Performance of REST vs. gRPC - https://medium.com/@EmperorRXF/evaluating-performance-of-rest-vs-grpc-1b8bdf0b22da
> NestJs supports GQL - https://docs.nestjs.com/graphql/quick-start
> NestJs also supports gRPC - https://docs.nestjs.com/microservices/grpc#sample-grpc-service

> Interesting articles about integrating centralized logging system to consume logs from each micro-services using the following components:
> - [Winston](https://github.com/winstonjs/winston) logging library writting logs into files.
> - [Fluentd](https://github.com/fluent/fluentd-docker-image) data collector forwarding to a logstash.
> - [ELK](https://logz.io/learn/complete-guide-elk-stack/#installing-elk) steps by steps installation guide for ELK stack to display logs in Kibana web UI.