import re
from datetime import datetime

def validar_nome(nome):
    if not nome or len(nome.strip()) < 3:
        return False
    
    if nome.isdigit():
        return False
    
    if not re.match("^[A-Za-z]+$", nome):
        return "O nome não pode conter numero"
    
    return True

def validar_idade(idade):
    if idade is None:
        return True
    if not isinstance(idade,int):
        return False
    if idade < 0 or idade > 120:
        return False
    else:
        return True

def validar_telefone(telefone):
    if not telefone:
        return False
    if not telefone.isdigit():
        return False
    if len(telefone) != 11:
        return False
    else:
        return True
def validar_email(email):
    if not email:
        return True
    padrao = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if re.match(padrao, email):
        return True
    else:
        return False
    
def calcular_idade(nascimento):
    if not nascimento:
        return None
    try:
        data_nasc = datetime.strptime(nascimento, "%Y-%m-%d").date()
        atual = datetime.now()
        idade = atual.year - data_nasc.year
        if (atual.month, atual.day) < (data_nasc.month, data_nasc.day):
            idade -=1
        return idade
    except:
        return None