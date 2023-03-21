const calculateWidth = () => {
  let fontSize = 12;
  document.getElementById('input').innerHTML =
    document.getElementById('text-input').value;
  let test = document.getElementById('input');
  test.style.fontSize = fontSize;
  var height = test.clientHeight + 1 + 'px';
  var width = test.clientWidth + 1 + 'px';

  console.log('height:', height, 'width:', width);

  document.getElementById(
    'output'
  ).innerHTML = `'height:' ${height}, 'width:' ${width}`;
};
