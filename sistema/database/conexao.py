import mysql.connector
import os

def conectar():
    return mysql.connector.connect(
        host=os.environ.get("DB_HOST", "localhost"),
        user=os.environ.get("DB_USER", "root"),
        password=os.environ.get("DB_PASSWORD", "reidson_10"),
        database=os.environ.get("DB_NAME", "agenda")
    ) 