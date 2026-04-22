const welcomeBtn = document.getElementById('welcomeBtn');
const mainContainer = document.getElementById('mainContainer');
const loveStage = document.getElementById('loveStage');

// Tomi-র জন্য তোমার দেওয়া নতুন লাইনগুলো এখানে
const textArray = [
    'Tomi love u Bacchaa',
    'Dina Toke Chay Tomi', 
    'Nayelar Kache Ja Tomi', 
    'Tomi love u', 
    'I Love U Tomiii', 
    'Missuuu youuuu', 
    'My Cute Tomi 🐱',  
    'Love u my catto', 
    'Always in my heart', 
    'Tomi Baccha ❤️',
    '🐱', '🐾', '💖', '✨'
];

welcomeBtn.addEventListener('click', () => {
    mainContainer.style.transition = '1s';
    mainContainer.style.opacity = '0';
    setTimeout(() => {
        mainContainer.style.display = 'none';
        setInterval(createFallingItem, 350); 
    }, 1000);
});

function createFallingItem() {
    const item = document.createElement('div');
    item.className = 'falling-item';
    item.innerText = textArray[Math.floor(Math.random() * textArray.length)];
    
    const startX = Math.random() * 85; // লেখাগুলো যেন স্ক্রিনের বাইরে না যায়
    const duration = Math.random() * 3 + 4; 
    
    item.style.left = startX + 'vw';
    item.style.fontSize = '1.2rem'; // মিডিয়াম মোটা ফন্ট
    item.style.animationDuration = duration + 's';
    
    loveStage.appendChild(item);
    setTimeout(() => { item.remove(); }, duration * 1000);
}
