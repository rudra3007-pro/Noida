document.addEventListener("DOMContentLoaded", () => {
  applyTheme()
  protectPage()
})

function navigate(path) {
  window.location.href = path
}

function setText(id, value) {
  const element = document.getElementById(id)
  if (element) element.textContent = value
}

function bindClick(id, action) {
  const element = document.getElementById(id)
  if (element) element.addEventListener("click", action)
}

function show(elementId) {
  const element = document.getElementById(elementId)
  if (element) element.style.display = "block"
}

function hide(elementId) {
  const element = document.getElementById(elementId)
  if (element) element.style.display = "none"
}

function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getLocal(key) {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

function removeLocal(key) {
  localStorage.removeItem(key)
}

function protectPage() {
  const user = getLocal("userRole")
  const publicPages = ["login.html", "index.html"]

  const currentPage = window.location.pathname.split("/").pop()
  if (!user && !publicPages.includes(currentPage)) {
    navigate("login.html")
  }
}

function applyTheme() {
  const theme = getLocal("theme") || "light"
  document.body.setAttribute("data-theme", theme)
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme")
  const next = current === "dark" ? "light" : "dark"
  document.body.setAttribute("data-theme", next)
  saveLocal("theme", next)
}

function logout() {
  removeLocal("userRole")
  removeLocal("userData")
  navigate("login.html")
}

function formatDate(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleDateString()
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remaining = seconds % 60
  return minutes + ":" + String(remaining).padStart(2, "0")
}
