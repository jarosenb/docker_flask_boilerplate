import random
import time
import celery
from flask import request, render_template, session, flash, redirect, \
    url_for, jsonify

from app import app



@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
