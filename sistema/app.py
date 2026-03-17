from flask import Flask, render_template
from flask_cors import CORS
from sistema.routes.contatos_routes import contato_bp
app = Flask(__name__)
CORS(app)
app.register_blueprint(contato_bp)

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/buscar")
def buscar():
    return render_template("buscar_dados.html")
@app.route("/cadastrar")
def adicionar():
    return render_template("cadastro.html")


    
## rota para exercutar no dispositivo moveis
if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0", port=5000) 