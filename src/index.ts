import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrarDocumentos';


const usuariosRef = db.collection('usuarios');

//Next
const btnNext = document.createElement('button');
btnNext.innerText = 'Next page';
document.body.append(btnNext);

let lastDocument:any = null;
let firstDocument:any = null;

btnNext.addEventListener('click', () => {
  const query = usuariosRef.orderBy('nombre').startAfter(lastDocument);

  query.limit(2).get().then(snap => {
    firstDocument = snap.docs[0] || null;
    lastDocument = snap.docs[snap.docs.length - 1] || null;
    retornaDocumentos(snap);
  })
});

//Prev
const btnPrev = document.createElement('button');
btnPrev.innerText = 'Previos page';
document.body.append(btnPrev);


btnPrev.addEventListener('click', () => {
  const query = usuariosRef.orderBy('nombre').endBefore(firstDocument);

  query.limit(2).get().then(snap => {
    firstDocument = snap.docs[0] || null;
    lastDocument = snap.docs[snap.docs.length - 1] || null;
    retornaDocumentos(snap);
  })
});

