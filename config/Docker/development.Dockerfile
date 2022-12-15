FROM public.ecr.aws/docker/library/node:current-alpine3.16 as react-build

RUN mkdir /src
WORKDIR /src

COPY package.json .
COPY . ./

RUN npm install

RUN npm run build:development

# stage 2 of docker file
# Use below nginx version
FROM public.ecr.aws/nginx/nginx:1.22-alpine

# Copy the build folder of the react app

COPY --from=react-build /src/build /var/www

# Copy the ngnix configrations
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf

# Expose it on port 3000
EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]