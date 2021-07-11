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