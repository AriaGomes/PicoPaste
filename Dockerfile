FROM node:alpine
EXPOSE 5000
EXPOSE 3000

WORKDIR /home
COPY ./ ./
RUN cd backend && yarn && cd ..
RUN yarn
CMD yarn docker