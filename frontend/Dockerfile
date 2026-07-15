# ==========================================
# Stage 1 - Build Angular Application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build Angular for production
RUN npm run build -- --configuration production

# ==========================================
# Stage 2 - Nginx
# ==========================================
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular build output
COPY --from=builder /app/dist/frontend/browser/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]