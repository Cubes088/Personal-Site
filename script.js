function openPopup(id) {
  document.body.style.overflow = 'hidden'; // Disabilita lo scroll della pagina principale
  const popup = document.getElementById(id);
  const overlay = document.getElementById('overlay');
  const toggle = document.getElementById("check-5");
  const buttons = popup.querySelectorAll('.button');
  
  buttons.forEach(btn => {
    if (toggle.checked) {
      btn.classList.remove('dark');
      btn.classList.add('light');
    } else {
      btn.classList.remove('light');
      btn.classList.add('dark');
    }
  });

  if (popup && overlay) {
    popup.classList.add('show');
    overlay.classList.add('show');

    // Applica tema al popup
    if (toggle.checked) {
      popup.classList.remove('dark');
      popup.classList.add('light');
    } else {
      popup.classList.remove('light');
      popup.classList.add('dark');
    }
  }
}

function closePopup(id) {
  document.body.style.overflow = ''; // Riabilita lo scroll della pagina principale
  const popup = document.getElementById(id);
  const overlay = document.getElementById('overlay');

  if (popup && overlay) {
    popup.classList.remove('show');
    overlay.classList.remove('show');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("check-5");

  if (!toggle) {
    console.error("Checkbox non trovato!");
    return;
  }

  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      document.body.style.background = "linear-gradient(to bottom, #0a0a0a 60%, #ff00aa 100%)";
      document.body.style.color = "#ff00aa";
    } else {
      document.body.style.background = "linear-gradient(to bottom, #0a0a0a 60%, #7b6dfaff 100%)";
      document.body.style.color = "#7b6dfaff";
    }
    const buttons = document.querySelectorAll('.button');
    const questions = document.querySelectorAll('.question');

    buttons.forEach(btn => {
      if (toggle.checked) {
        btn.classList.remove('dark');
        btn.classList.add('light');
      } else {
        btn.classList.remove('light');
        btn.classList.add('dark');
      }

       questions.forEach(q => {
    if (toggle.checked) {
      q.classList.remove('dark');
      q.classList.add('light');
    } else {
      q.classList.remove('light');
      q.classList.add('dark');
    }
    
  });
});
}); 

  // Chiudi cliccando sull’overlay
  document.getElementById('overlay').addEventListener('click', () => {
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('show'));
    document.getElementById('overlay').classList.remove('show');
  });
});
