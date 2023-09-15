document.addEventListener("DOMContentLoaded", function() {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function() {
        // Make an AJAX request to fetch the JSON data
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // Replace with your API URL
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayBooks(data);
            }
        };
        xhr.send();
    });

    function displayBooks(books) {
        // Clear the previous book list
        bookList.innerHTML = "";

        // Create and append list items for each book
        books.forEach(function(book) {
            const listItem = document.createElement("div");
            listItem.innerHTML = `<strong>Title:</strong> ${book.title}<br><strong>Author:</strong> ${book.author}`;
            bookList.appendChild(listItem);
        });
    }
});