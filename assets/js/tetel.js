document.querySelectorAll('.toggle-content').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation();
        const content = item.nextElementSibling;
        content.classList.toggle('show');
        updateMainContentHeight(content.closest('.main-content'));
    });
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function toggleMainContent(element) {
    const content = element.nextElementSibling;
    content.classList.toggle('show');
    element.classList.toggle('active');
    
    if (content.classList.contains('show')) {
        updateMainContentHeight(content);
    } else {
        content.style.maxHeight = '0';
    }
}

function updateMainContentHeight(mainContent) {
    const totalHeight = Array.from(mainContent.children)
        .reduce((sum, child) => sum + child.scrollHeight + 40, 0);
    mainContent.style.maxHeight = `${totalHeight + 30}px`; // 30px for padding
}

const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', () => {
            window.location.href = '../';
        });

// Initialize main topics
document.querySelectorAll('.main-topic').forEach(topic => {
    topic.nextElementSibling.classList.remove('show');
});