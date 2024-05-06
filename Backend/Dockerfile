FROM node:18.18.2

# Set working directory inside the container
WORKDIR /backend

ENV PORT=3000
ENV LOG_LEVEL='info'
ENV JWT_SECRET='superSecretPassword'
ENV STORE_DIR='/backend/files'
ENV DB_HOST='database'
ENV DB_PORT=5432

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

CMD [ "npm", "start" ]