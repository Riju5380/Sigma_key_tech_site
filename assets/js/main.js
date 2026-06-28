document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)';
      header.style.padding = '5px 0';
    } else {
      header.style.boxShadow = 'none';
      header.style.padding = '0';
    }
  });

  // 2. Mobile Menu Navigation
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. FAQ Accordion Panel
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');
      
      // Close all open FAQs first
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
        const ans = el.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });
      
      // Toggle current FAQ
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 4. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm && successModal) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Fetch values if backend sync is ever added
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      console.log(`Submitting support ticket for: ${name} (${email})`);
      
      // Show Premium Success Modal
      successModal.classList.add('active');
      
      // Reset Form
      contactForm.reset();
    });
    
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
      });
    }
    
    // Close modal when clicking outside contents
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }

  // 5. Data Deletion Request Form Submission
  const deleteAccountForm = document.getElementById('deleteAccountForm');
  const deletionSuccessModal = document.getElementById('deletionSuccessModal');
  const closeDeletionModalBtn = document.getElementById('closeDeletionModalBtn');

  if (deleteAccountForm && deletionSuccessModal) {
    deleteAccountForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const parentEmail = document.getElementById('parentEmail').value;
      const studentDetails = document.getElementById('studentDetails').value;
      
      console.log(`Initiating profile deactivation for: ${parentEmail} (${studentDetails})`);
      
      // Show Deletion Success Modal
      deletionSuccessModal.classList.add('active');
      
      // Reset Form
      deleteAccountForm.reset();
    });

    if (closeDeletionModalBtn) {
      closeDeletionModalBtn.addEventListener('click', () => {
        deletionSuccessModal.classList.remove('active');
      });
    }

    // Close modal when clicking outside contents
    deletionSuccessModal.addEventListener('click', (e) => {
      if (e.target === deletionSuccessModal) {
        deletionSuccessModal.classList.remove('active');
      }
    });
  }
});
