import os
import random
import pandas as pd

from flask import Flask, send_from_directory, jsonify
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

THIS_FILE_DIR = os.path.dirname(os.path.realpath(__file__))
PROJECT_DIR = os.path.dirname(THIS_FILE_DIR)
RESOURCES_DIR = os.path.join(PROJECT_DIR, 'public')
DATA_DIR = os.path.join(PROJECT_DIR, 'data')

@app.route('/<path:resource>')
def public_resource(resource):
    """Serves a static resource."""
    return send_from_directory(RESOURCES_DIR, resource)

@app.route('/ts/<string:ts_id>')
def load_data(ts_id):
    path = os.path.join(DATA_DIR, ts_id+'.csv')
    df = pd.read_csv(path)
    df = df.set_index('date')
    return jsonify(df.to_dict())

@app.route('/')
def index():
    """Serve the index."""
    return public_resource('index.html')


@app.route('/newtext')
def newtext():
    x = random.randrange(100)
    return jsonify({'text': 'hello changed? Text ' + str(x)})

if __name__ == '__main__':
    app.run(debug=True)
