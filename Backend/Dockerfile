FROM node:18.18.2

# Set working directory inside the container
WORKDIR /backend

ENV DB_URI='mongodb://admin:1234@database:27017/therapisttrack'
ENV API_PORT=3001
ENV JWT_SECRET='containerPassword'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3001

CMD [ "npm", "start" ]