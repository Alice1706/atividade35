document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '250px';
    document.querySelector('.content').style.marginLeft = '250px'; // Adicionado
  });
  
  document.querySelector('.sidebar').addEventListener('click', function() {
    this.style.width = '0';
    document.querySelector('.content').style.marginLeft = '0'; // Adicionado
  });
  