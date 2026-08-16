const cursor = document.getElementById('cursor');
const hoverElements = document.querySelectorAll('[data-cursor]');

document.addEventListener('mousemove', (e) => {
  requestAnimationFrame(() => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
});

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    const cursorClass = el.getAttribute('data-cursor');
    cursor.classList.add(cursorClass);
  });
  el.addEventListener('mouseleave', () => {
    const cursorClass = el.getAttribute('data-cursor');
    cursor.classList.remove(cursorClass);
  });
});

document.querySelectorAll('a, button').forEach(el => {
  if (!el.closest('[data-cursor]')) {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
      cursor.style.backgroundColor = 'var(--accent)';
      cursor.style.border = 'none';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = 'var(--text)';
    });
  }
});

const modal = document.getElementById('projModal');

function openModal(title, category, desc) {
  document.getElementById('mdlTitle').innerText = title;
  document.getElementById('mdlCat').innerText = category;
  document.getElementById('mdlDesc').innerText = desc;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeOnBg(e) {
  if (e.target === modal) closeModal();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});