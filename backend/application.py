from flask import Flask, jsonify
from corsOrigins import getOrigins
from flask_cors import CORS, cross_origin

application = Flask(__name__)

@application.route("/")
@cross_origin(origins=getOrigins())
def hello_world():
    return jsonify({"message": "Hello World"})


if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()
    
