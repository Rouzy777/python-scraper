# app.py

from flask import Flask, render_template, request, json         # import flask
import scrapper_amaz

app = Flask(__name__)             # create an app instance

@app.route("/", methods = ['GET', 'POST'])                   # at the end point /
def index():                      # call method hello
  if request.method == 'POST':
    amazon_url = request.form['url']
    result = scrapper_amaz.main_scrapper(amazon_url)
    if '_id' in result:
      del result['_id']

    result = json.dumps(result)
    result = result.replace('"[','[').replace(']"',']')
    return json.dumps(json.loads(result), indent=2)

  if request.method == 'GET':
    return render_template('index.html')         # which returns "hello world"

if __name__ == "__main__":        # on running python app.py
    app.run()                     # run the flask app
