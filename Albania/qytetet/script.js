

function scrollTabs(distance) {
  const scrollContainer = document.querySelector('.tabs-scroll');
  scrollContainer.scrollBy({ left: distance, behavior: 'smooth' });
}

// Load widget script ONCE
!function(d,s,id){
  if(!d.getElementById(id)){
    let js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    d.getElementsByTagName('head')[0].appendChild(js);
  }
}(document,'script','weatherwidget-io-js');
  
  // Initialize tab logic
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
  
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
  
      const target = document.getElementById(tab.dataset.tab);
      if (target) {
        target.classList.add('active');
      }
    });
  });
  