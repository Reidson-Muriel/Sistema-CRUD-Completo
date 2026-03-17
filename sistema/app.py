from flask import Flask, render_template
from flask_cors import CORS
from sistema.routes.contatos_routes import contato_bp
app = Flask(__name__, template_folder="../frontend")
CORS(app)
app.register_blueprint(contato_bp)

@app.route("/")
def home():
    return render_template("index.html")
    
## rota para exercutar no dispositivo moveis
if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0", port=5000) 