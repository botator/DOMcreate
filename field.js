export function renderField(config) {
  let field;
  switch(config.type){
    case 'text':
      field = renderText(config);
      break;
    case 'number':
      field = renderNumber(config);
      break;
    case 'email':
      field = renderEmail(config);
      break;
    case '':
      field = renderDef(config);
      break;
  }

  return field

 
}

function renderText(config) {
  let label = document.createElement('label');
  let input = document.createElement('input');
  let div = document.createElement('div');
  let br = document.createElement('br')
  if(config.label == ""){
    label.textContent = config.labelOnTop;
    div.appendChild(label);
    div.appendChild(br)
    div.appendChild(input);
  }
  if(config.labelOnTop == ""){
    label.textContent = config.label;
    div.appendChild(label);
    div.appendChild(input);
  }
  input.type = config.type;
  input.id = config.id
  
  
  input.addEventListener('input', () => {
    config.state[config.id] = input.value;
    //console.log(JSON.stringify(config.state));
    console.log(config.state)
  }); 
  return div;
}

function renderNumber(config) {
  let input = document.createElement('input');
  let label = document.createElement('label');
  let div = document.createElement('div');
  let br = document.createElement('br')
  if(config.label == ""){
    label.textContent = config.labelOnTop;
    div.appendChild(label);
    div.appendChild(br)
    div.appendChild(input);
  }
  if(config.labelOnTop == ""){
    label.textContent = config.label;
    div.appendChild(label);
    div.appendChild(input);
  }
  
  input.type = 'number';
  input.id = config.id;

  input.addEventListener('input', () => {
    config.state[config.id] = input.value;
    //console.log(JSON.stringify(config.state));
    console.log(config.state)
  }); 

  
  return div;
}

function renderEmail(config) {
  const parentDiv = document.createElement('div')
  const br = document.createElement('br');
  let label = document.createElement('label');
  label.textContent = label.config 

  const localInput = document.createElement('input')
  localInput.type = "text"

  const at = document.createElement('span');
  at.textContent = '@';

  const domainInput = document.createElement('input')
  domainInput.type = "text"

  const emailParts = config.state[config.id] ? config.state[config.id].split('@') : [];
  localInput.value = emailParts[0] || "";
  domainInput.value = emailParts[1] || "";

  if(config.label == ""){
    label.textContent = config.labelOnTop;
    parentDiv.append(label,br,localInput, at, domainInput)
  }
  if(config.labelOnTop == ""){
    label.textContent = config.label;
    parentDiv.append(label,localInput, at, domainInput)
  }
  

  localInput.addEventListener('input', () => {
    config.state[config.id] = `${localInput.value}@${domainInput.value}`;
      console.log(JSON.stringify(config.state));
  });

  domainInput.addEventListener('input', () => {
    config.state[config.id] = `${localInput.value}@${domainInput.value}`;
      console.log(JSON.stringify(config.state));
  });

  return parentDiv
}

function renderDef(config) {
  let div = document.createElement('div');
  div.id = config.id;

  div.addEventListener('div', () => {
    config.state[config.id] = div.value;
    //console.log(JSON.stringify(config.state));
    console.log(config.state)
  });

  return div;
}
