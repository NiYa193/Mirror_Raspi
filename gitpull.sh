#!/bin/sh

cd /var/www/html/
git pull origin master
python refresh.py
