FROM tiangolo/uwsgi-nginx-flask:python3.7

COPY ./back /app
COPY ./back/requirements.txt /
RUN pip install --upgrade pip
RUN pip install -r /requirements.txt
