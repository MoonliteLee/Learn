
function change(str) {
  let str = document.getElementById("old").value;
  switch (str) {
    case 'da':
      str = str.toUpperCase();
      break;
      case 'xiao':
      str = str.toLowerCase();
      break;

  }
  document.getElementById("new").value = str;
}