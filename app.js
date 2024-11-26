import { renderField } from './field.js';

let globalState = {};



const field1 = renderField({
  state: globalState,
  id: 'field1',
  type: 'text'
});
const field2 = renderField({
    state: globalState,
    id: 'field2',
    type: 'number'
  });
document.getElementById('app').appendChild(field1);
document.getElementById('app').appendChild(field2);