

document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault(); 
    const searchBox = document.getElementById('search-box');

    
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "block"; 
        searchBox.focus(); 
        this.innerHTML = '<i class="ri-close-line"></i>'; 
    } else {
        searchBox.style.display = "none"; 
        this.innerHTML = '<i class="ri-search-line"></i>'; 
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === '1234' && password === '1234') {
       
        window.location.href = 'Peminjaman Buku.html'; 
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
        document.getElementById('message').style.color = 'red';
    }
});

    function showForm(bookTitle) {
        
        const formContainer = document.getElementById('peminjaman-form');
        formContainer.style.display = 'block'; 
        document.getElementById('book-title').innerText = bookTitle; 
    }

    function hideForm() {
        const formContainer = document.getElementById('peminjaman-form');
        formContainer.style.display = 'none'; 
    }
