import os
from flask import Flask
from makeCelery import make_celery

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

app.config.update(CELERY_BROKER_URL=os.getenv('REDIS_URL', 'redis://redis:6379/0'),
                  CELERY_RESULT_BACKEND= 'db+' + os.getenv('DATABASE_URL', 'redis://redis:6379/0'))

celery = make_celery(app)

from views import index