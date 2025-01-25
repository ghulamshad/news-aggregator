FROM php:8.2-fpm
WORKDIR /var/www
COPY . .
RUN apt-get update && apt-get install -y zip unzip && docker-php-ext-install pdo_mysql
RUN composer install
CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000
