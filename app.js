import { renderField } from './field.js';

let globalState = {};



const field1 = renderField({
  state: globalState,
  id: 'field1',
  type: 'text',
  label: 'szöveg: ',
  labelOnTop: ''
});

const field2 = renderField({
  state: globalState,
  id: 'field2',
  type: 'text',
  label: '',
  labelOnTop: 'szöveg: '
});
const field3 = renderField({
  state: globalState,
  id: 'field3',
  type: 'number',
  label: '',
  labelOnTop: 'szöveg: '
});
const field4 = renderField({
  state: globalState,
  id: 'field4',
  type: 'number',
  label: 'szöveg: ',
  labelOnTop: ''
});
const field5 = renderField({
  state: globalState,
  id: 'field5',
  type: '',
  label: '',
  labelOnTop: ''
});
const field6 = renderField({
  state: globalState,
  id: 'field6',
  type: 'email',
  label: '',
  labelOnTop: 'szöveg: '
});
const field7 = renderField({
  state: globalState,
  id: 'field7',
  type: 'email',
  label: 'szöveg: ',
  labelOnTop: ''
});
document.getElementById('app').appendChild(field1);
document.getElementById('app').appendChild(field2);
document.getElementById('app').appendChild(field3);
document.getElementById('app').appendChild(field4);
document.getElementById('app').appendChild(field5);
document.getElementById('app').appendChild(field6);
document.getElementById('app').appendChild(field7);

