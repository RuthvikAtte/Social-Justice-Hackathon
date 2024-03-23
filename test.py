from flask import Flask

app = Flask(__name__)

@app.route('/data', methods=['POST', 'GET'])
def data():
    return {"aditya": ["member", "member", "member"]}

if __name__ == "__main__":
    app.run(debug=True)