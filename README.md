# simple-user-noti
![Overview](https://github.com/zestzero/simple-user-noti/blob/main/documents/overview.jpg?raw=true)

## Components
### Web server - [Repository](https://github.com/zestzero/simple-user-noti-web)
> A NextJs with NestJs server-side and ReactJs on client-side.
### Gateway API - [Repository](https://github.com/zestzero/simple-user-noti-gw)
> A Gateway API acts as a facade to sit in front of microservice in the backend.
### Notification Service
### Database

### Implementation notes 📝
> Push notification using Socket connection vs Server-sent evens (SSE)? 
> https://www.telerik.com/blogs/websockets-vs-server-sent-events

> Event source, web interface to server-sent events. It's not IE compatible at all.
> https://developer.mozilla.org/en-US/docs/Web/API/EventSource