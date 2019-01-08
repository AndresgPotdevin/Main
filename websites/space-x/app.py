from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/missions')
def missions():
        return render_template('/missions.html')

@app.route('/about')
def about():
        return render_template('/about.html')

if __name__ == '__main__':
   app.run(debug = True)
