# Étape 1: Angular déjà buildé sur la VM
FROM nginx:alpine
COPY dist/sahty-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
