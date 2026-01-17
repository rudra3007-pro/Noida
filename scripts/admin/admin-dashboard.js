document.addEventListener("DOMContentLoaded", () => {
  loadSummaryMetrics()
  loadRecentActivity()
  bindNavigation()
})

function loadSummaryMetrics() {
  setText("totalSchools", "124")
  setText("totalTeachers", "862")
  setText("totalStudents", "21450")
  setText("avgMastery", "63%")
}

function loadRecentActivity() {
  const activityList = document.getElementById("activityList")
  if (!activityList) return

  const activities = [
    "Class 6 Math analytics updated",
    "New teacher onboarded – Govt School No. 12",
    "District performance report generated",
    "AI model retrained with latest data"
  ]

  activityList.innerHTML = ""
  activities.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    activityList.appendChild(li)
  })
}

function bindNavigation() {
  bindClick("viewSchoolsBtn", () => navigate("school-analytics.html"))
  bindClick("viewDistrictBtn", () => navigate("district-analytics.html"))
  bindClick("viewReportsBtn", () => navigate("reports.html"))
  bindClick("logoutBtn", () => navigate("login.html"))
}

function bindClick(id, action) {
  const element = document.getElementById(id)
  if (element) element.addEventListener("click", action)
}

function navigate(path) {
  window.location.href = path
}

function setText(id, value) {
  const element = document.getElementById(id)
  if (element) element.textContent = value
}
