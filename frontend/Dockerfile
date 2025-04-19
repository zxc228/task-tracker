# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the project
COPY . .

# 5. Build the app
RUN npm run build

# 6. Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]