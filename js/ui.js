/* ===== True LINE — اللايت بوكس و زر الرجوع ===== */

    function openLightbox(content, type = 'image') {
      const modal = document.getElementById('lightboxModal');
      const lightboxContent = document.getElementById('lightboxContent');
      
      if (type === 'video') {
        lightboxContent.innerHTML = `<video controls style="width:100%; height:100%; object-fit:contain; border-radius:16px;" autoplay><source src="${content}" type="video/mp4"></video>`;
      } else {
        lightboxContent.innerHTML = `<img src="${content}" style="width:100%; height:100%; object-fit:contain; border-radius:16px;">`;
      }
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
      const modal = document.getElementById('lightboxModal');
      modal.classList.add('closing');
      setTimeout(() => {
        modal.classList.remove('active', 'closing');
        document.body.style.overflow = 'auto';
      }, 300);
    }
    
    // Close lightbox when clicking outside
    document.addEventListener('click', function(e) {
      const modal = document.getElementById('lightboxModal');
      if (e.target === modal) {
        closeLightbox();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });

    // Navigation history for back button
    let screenHistory = ['screen-intro'];
    
    function goBack() {
      if (screenHistory.length > 1) {
        screenHistory.pop(); // Remove current screen
        const previousScreen = screenHistory[screenHistory.length - 1];
        showScreen(previousScreen);
      }
    }
    
    // Track screen changes
    const originalShowScreen = window.showScreen;
    window.showScreen = function(screenId) {
      // Only add to history if it's a different screen
      if (!screenHistory || screenHistory[screenHistory.length - 1] !== screenId) {
        if (!screenHistory) screenHistory = [];
        screenHistory.push(screenId);
      }
      return originalShowScreen(screenId);
    };

