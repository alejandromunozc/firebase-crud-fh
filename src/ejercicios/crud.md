const usuariosRef = db.collection('usuarios');

## Objeto

const usuario = {
  nombre: 'Daniela',
  activo: false,
  fechaNacimiento: 0,
  salario: 1600
}

## Insertar usuarios
db.collection('usuarios')
  .add(usuario)
  .then( docRef => {
    console.log(docRef);
  })
  .catch(e => console.log('error', e));

## Actualizar una propiedad
usuariosRef.doc('g0bn3DVxkfEq5axA0uNh').update({
  activo: false
})

## Actualiza borrando sobreescribiendo y borrando lo que hay
usuariosRef.doc('g0bn3DVxkfEq5axA0uNh').set({
    activo: true
  })

## Eliminar
usuariosRef
  .doc('g0bn3DVxkfEq5axA0uNh')
  .delete()
  .then(resp => console.log(resp))
  .catch(e => console.log('error', e));

## Leer registros
usuariosRef
  .onSnapshot(snap => {
    retornaDocumentos(snap);
  });

usuariosRef
  .onSnapshot(retornaDocumentos);

usuariosRef
  .get()
  .then(snap => {
    retornaDocumentos(snap);
  });

usuariosRef
  .get().then(retornaDocumentos);


##   select * from usuarios
##     where activo = true


usuariosRef.where('activo', '==', true).get().then(retornaDocumentos);


##   select * from usuarios
##    where salario > 1800


usuariosRef.where('salario', '>', 1700).get().then(retornaDocumentos);


##   select * from usuarios
##     where salario > 1700 and salario < 1900


usuariosRef.where('salario', '>', 1700).where('salario', '<', 1900).get().then(retornaDocumentos);


## select * from usuarios
##     where salario > 1700 and activo = true


usuariosRef.where('salario', '>', 1700).where('activo', '==', true).get().then(retornaDocumentos);