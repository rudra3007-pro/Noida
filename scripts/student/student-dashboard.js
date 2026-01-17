document.addEventListener("DOMContentLoaded", () => {
  loadDashboardStats()
  loadTodayRecommendation()
  bindDashboardActions()
})

function loadDashboardStats() {
  setText("currentSubject", "Mathematics")
  setText("conceptMastery", "68%")
  setText("pendingConcepts", "5")
  setText("studyStreak", "6 Days")
}

function loadTodayRecommendation() {
  setText(
    "aiRecommendation",
    "Revise Equivalent Fractions before moving to Comparing Fractions"
  )
}

function bindDashboardActions() {
  bindClick("continueLearningBtn", () => navigate("learning-path.html"))
  bindClick("takeQuizBtn", () => navigate("quiz.html"))
  bindClick("viewProgressBtn", () => navigate("progress.html"))
  bindClick("viewProfileBtn", () => navigate("student-profile.html"))
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
