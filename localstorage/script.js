const toggleBtn = document.getElementById("toggleThemeBtn");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// get the value for key "pageTheme" from localStorage
// if the theme is "dark", add a class "dark" to the body
// Also update the icon textContent to a moon emoji 🌙
// If it's not dark, keep it as light and set the icon to sun emoji ☀️




//  ------------------------------------------------------------------
// MY ORIGINAL CODE

// const theme = localStorage.getItem("pageTheme") === dark;



// if (pageTheme === dark) {
//     document.body.classList.add("dark");
//     statusText.textContent = "🌙 Dark Mode";
// } else {
//     document.body.classList.add("light");
//     statusText.textContent = "☀️ Light Mode";
// }

// toggleBtn.addEventListener("click", () => { 
//     localStorage.setItem("dark", "true");
// });
//-------------------------------------------------------------------


const savedTheme = localStorage.getItem("pageTheme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeIcon.textContent = "☀️";
} else {
    themeIcon.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const currTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("pageTheme", currTheme);
    themeIcon.textContent = currTheme === "dark" ? "☀️" : "🌙";
})
    
    


// Add a click event listener to the toggle button
// When clicked, toggle the "dark" class on the body
// save the new theme ("dark" or "light") to localStorage
// update the icon to reflect the current theme