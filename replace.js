const replaceBtn = document.getElementById('replaceBtn');

replaceBtn.addEventListener('click', () => {

  const input = document.getElementById('inputText').value;
  const find = document.getElementById('findText').value;
  const replace = document.getElementById('replaceText').value;

  if (find !== "") {
    const result = input.replaceAll(find, replace);
    document.getElementById('outputText').value = result;
  } else {
    alert("置換したい文字を入力してください");
  }
});
