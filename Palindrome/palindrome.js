document.getElementById("btn").addEventListener("click", function () {
  let txt = document.getElementById("input-text").value;
  PalindromeCheck(txt);
});
function cler() {
  document.getElementById('input-text').value = '';
}
function PalindromeCheck(txt) {
  let n = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let len = n.length;
  let halfLen = Math.floor(len / 2);
  let i;

  for (i = 0; i < halfLen; i++) {
    if (n[i] !== n[len - 1 - i]) {
      document.getElementById("result").innerHTML = "No! It's Not a Palindrome.";
      document.getElementById("result").style.color = "Red";
      return;
    }
    document.getElementById("result").innerHTML = "Yes! It's a Palindrome.";
    document.getElementById("result").style.color = "Green";
  }
}
