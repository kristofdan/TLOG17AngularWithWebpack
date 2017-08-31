FROM infoslack/alpine-nginx:latest
MAINTAINER Andras Gazdag "agazdag@precognox.com"
# COPY src /usr/html/
# COPY node_modules /usr/html/node_modules
COPY dist /usr/html/
COPY nginx.conf /etc/nginx/nginx.conf
CMD nginx -g "daemon off;"

