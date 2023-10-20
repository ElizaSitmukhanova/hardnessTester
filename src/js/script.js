/* const text = document.querySelector('.promo__text p');
text.innerHTML = text.innerText.split('').map((char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}‹/span>`).join('');
 */

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("_show");
  }
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('_show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }