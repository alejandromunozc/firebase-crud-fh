const usuariosRef = db.collection('usuarios');

usuariosRef.orderBy('nombre', 'desc').orderBy('salario', 'desc').get().then(retornaDocumentos);