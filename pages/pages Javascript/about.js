function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var faqSections = document.querySelectorAll('.faq-section');
  
    faqSections.forEach(function(section) {
      var sectionAnswer = section.querySelector('.answer');
      if (sectionAnswer.id === id) {
        if (sectionAnswer.classList.contains('show')) {
          sectionAnswer.classList.remove('show');
        } else {
          sectionAnswer.classList.add('show');
        }
      } else {
        sectionAnswer.classList.remove('show');
      }
    });
  }