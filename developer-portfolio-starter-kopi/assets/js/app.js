// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


// script.js
// Array of book objects
const books = [
    { title: "Surronded by idiots", imageUrl: "https://imgcdn.saxo.com/_9781785042188" },
    { title: "Can't hurt me", imageUrl: "https://imgcdn.saxo.com/_9781544507859" },
    { title: "Nudge", imageUrl: "https://cdn.kobo.com/book-images/26047613-a240-4556-aee7-203b1ccfff6a/1200/1200/False/nudge-2.jpg"},
    { title: "What you do is who you are", imageUrl: "https://m.media-amazon.com/images/I/81OA0ldxPLL._AC_UF1000,1000_QL80_.jpg"},
    { title: "Hooked", imageUrl: "https://imgcdn.saxo.com/_9780241184837"},
    { title: "The art of thinking clearly", imageUrl: "https://imgcdn.saxo.com/_9780062219695"},
    { title: "Surely you are joking Mr. Feynman", imageUrl: "https://imgcdn.saxo.com/_9780393355628"},
    { title: "The mom test", imageUrl: "https://m.media-amazon.com/images/I/61ixLoT4lyL._AC_UF1000,1000_QL80_.jpg"},
    { title: "fall in love with the problem, not the solution", imageUrl: "https://m.media-amazon.com/images/I/71tl+PBqA-L._AC_UF1000,1000_QL80_.jpg"},
    { title: "Walt Disney - An American Original", imageUrl: "https://imgcdn.saxo.com/_9781368083966"},
    { title: "det første skridt – 200 måder at få ting til at ske", imageUrl: "https://images.bogportalen.dk/images/9788750063155.jpg"},
    { title: "Atomic Habits", imageUrl: "https://imgcdn.saxo.com/_9781847941831"},
    { title: "The Lean Startup", imageUrl: "https://imgcdn.saxo.com/_9780307887894"},
    { title: "Customer Success", imageUrl: "https://imgcdn.saxo.com/_9781119168294"},
    { title: "Product-Led Growth", imageUrl: "https://m.media-amazon.com/images/I/41MLsTpmqUL.jpg"},
    { title: "Falske sandheder i livet", imageUrl: "https://imgcdn.saxo.com/_9788702316407"},
    { title: "Effortless", imageUrl: "https://imgcdn.saxo.com/_9780753558379"},
    { title: "How to win friends and influence people", imageUrl: "https://imgcdn.saxo.com/_9780091906818"},
    { title: "How to become a people magnet", imageUrl: "https://imgcdn.saxo.com/_9789918950973"},
    { title: "Product-Led Onboarding", imageUrl: "https://m.media-amazon.com/images/I/61PHdADdCcL._AC_UF1000,1000_QL80_.jpg"},
    { title: "Donald Trump", imageUrl: "https://imgcdn.saxo.com/_9788771805260"},
    { title: "Steven Gerrard", imageUrl: "https://imgcdn.saxo.com/_9788771598254"},
    { title: "Iværksætter", imageUrl: "https://imgcdn.saxo.com/_9788702213591"},
    { title: "The art of war (Spanish version)", imageUrl: "https://m.media-amazon.com/images/I/61aTf+8b6qL._AC_UF1000,1000_QL80_.jpg"},
    { title: "Elon Musk (Spanish version)", imageUrl: "https://imgcdn.saxo.com/_9780062301239"},
    { title: "Measure what matters", imageUrl: "https://imgcdn.saxo.com/_9780525536222"},
    { title: "Shoe dog", imageUrl: "https://imgcdn.saxo.com/_9788771599015"},
    // Add more books as needed
];

// Function to generate book cards
function generateBookCards() {
    const container = document.getElementById('books-container');
    books.forEach(book => {
        // Creating HTML structure for a book card
        const card = `<div class="book-card">
            <img src="${book.imageUrl}" alt="Cover image of ${book.title}" />
            <h3>${book.title}</h3>
        </div>`;
        // Appending the card HTML to the container
        container.innerHTML += card;
    });
}

// Call the function to generate cards when the page loads
generateBookCards();

const audiobooks = [
    { title: "The hard thing about hard things", imageUrl: "https://imgcdn.saxo.com/_9780062273208" },
    { title: "Min vej som leder", imageUrl: "https://imgcdn.saxo.com/_9788702386660" },
    { title: "The subtle art of not giving a f#ck", imageUrl: "https://imgcdn.saxo.com/_9780062899149" },
    { title: "Sur for en sikkerheds skyld?", imageUrl: "https://imgcdn.saxo.com/_9788772380940" },
    { title: "Jytte fra marketing er desværre gået for i dag", imageUrl: "https://imgcdn.saxo.com/_9788702243581" },
    { title: "Papmaché reglen", imageUrl: "https://imgcdn.saxo.com/_9788702187816" },
    { title: "Skab din egen success", imageUrl: "https://imgcdn.saxo.com/_9788702389074" },
    { title: "Bobler, bullshit og børsfest", imageUrl: "https://imgcdn.saxo.com/_9788740064957" },
    { title: "Den tålmodige investor", imageUrl: "https://imgcdn.saxo.com/_9788771809855" },
    { title: "Børshaj", imageUrl: "https://imgcdn.saxo.com/_9788776922207" },
    { title: "Slut med forbudt", imageUrl: "https://imgcdn.saxo.com/_9788740027228" },
    { title: "Kick Ass", imageUrl: "https://imgcdn.saxo.com/_9788771088205" },
    { title: "Sådan blev jeg Stein Bagger", imageUrl: "https://imgcdn.saxo.com/_9788740050110" },
  ];

  function generateAudiobookCards() {
    const container = document.getElementById('audiobooks-container');
    audiobooks.forEach(audiobook => {
      const card = `<div class="book-card">
          <img src="${audiobook.imageUrl}" alt="Cover image of ${audiobook.title}" />
          <h3>${audiobook.title}</h3>
      </div>`;
      container.innerHTML += card;
    });
  }
  
  // Call the function when the page loads
  generateAudiobookCards();
    
const blog = [
    { title: "Blog title name", imageUrl: "https://rb.gy/06nwy2", date: "13/02/24", pageUrl: "https://www.linkedin.com/in/madsdamgaard02/" },
    { title: "Blog title name", imageUrl: "https://rb.gy/06nwy2", date: "13/02/24", pageUrl: "https://www.linkedin.com/in/madsdamgaard02/" },
    { title: "Blog title name", imageUrl: "https://rb.gy/06nwy2", date: "13/02/24", pageUrl: "https://www.linkedin.com/in/madsdamgaard02/" },
    { title: "Blog title name", imageUrl: "https://rb.gy/06nwy2", date: "13/02/24", pageUrl: "https://www.linkedin.com/in/madsdamgaard02/" },
];

function generateBlogCards () {
    const container = document.getElementById('blog-container');
    blog.forEach(blog => {
        const card = `<div class="blog-card">
        <img src="${blog.imageUrl}" alt="Cover image of ${blog.title}" />
        <h3><a href="${blog.pageUrl}">${blog.title}</a></h3>
        <div class="blog-card-inner">
        <p>${blog.date}</p>
        <p>Mads Damgaard</p>
        </div>
        </div>`;
        container.innerHTML += card;
    });
}

generateBlogCards ();
  

/* CV page (cv.html) */







