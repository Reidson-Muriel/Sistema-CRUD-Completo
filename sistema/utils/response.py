from flask import jsonify

def resp_sucess(data=None, message=""):
    return jsonify({
        "success": True,
        "data": data,
        "message": message
    })

def resp_erro(error, status=400):
    return jsonify({
        "success": False,
        "error": error
    }), status
