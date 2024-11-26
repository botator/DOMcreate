export function renderField(config) {
    let input = document.createElement('input');
    input.type = config.type;
    input.id = config.id;

  
    input.addEventListener('input', () => {
      config.state[config.id] = input.value;
      //console.log(JSON.stringify(config.state));
        console.log(config.state)
    });
  
    return input;
}
  