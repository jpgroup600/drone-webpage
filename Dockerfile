# Use lightweight nginx image
FROM nginx:alpine

# Remove default Nginx static site (optional but clean)
RUN rm -rf /usr/share/nginx/html/*

# Copy all your static files into the nginx html folder
# If your HTML etc is in a subfolder like 'public', adjust the path.
COPY . /usr/share/nginx/html

# Expose port 80 so CapRover can map it
EXPOSE 80

# Healthcheck so CapRover knows the container is healthy
HEALTHCHECK CMD wget -qO- http://127.0.0.1:80/ || exit 1
