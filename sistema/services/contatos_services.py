from sistema.models.contatos_model import listar_contatos, buscar_contato
from sistema.utils.response import resp_erro
from datetime import datetime

from ..utils.validacao import calcular_idade

def obter_contatos():
    try:
        contato = listar_contatos()

        lista = []
        for dados in contato:
            lista.append({"id": dados[0],
                          "nome": dados[1],
                          "telefone": dados[2]})
        return lista
    except Exception as e:
       raise e

def buscar_contatos_id(id):
    try:

        dados = buscar_contato(id)
        if not dados:
            return None
        
        idade = calcular_idade(dados[6].strftime("%Y-%m-%d")) if dados[6] else None
        if dados:
            contato = {"id": dados[0],
                       "nome": dados[1],
                       "telefone": dados[2],
                       "email": dados[3],
                       "endereco": dados[4],
                       "observacao": dados[5],
                       "data_nascimento": dados[6],
                       "idade": idade}
            return contato
        else:
            return None
    except Exception as e:
        raise e
    
