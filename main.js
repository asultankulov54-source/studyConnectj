function join() {
  alert("Заявка отправлена! 🚀");
}

function searchGroups() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("group-card");
  
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    cards[i].style.display = title.includes(input) ? "block" : "none";
 реп }
}