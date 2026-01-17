document.addEventListener("DOMContentLoaded", () => {
  loadTeacherSummary()
  loadClassSnapshot()
  loadAiInsights()
  bindTeacherActions()
})

function loadTeacherSummary() {
  setText("assignedClasses", "3")
  setText("totalStudents", "92")
  setText("atRiskStudents", "11")
  setText("strongConcepts", "5")
}

function loadClassSnapshot() {
  const snapshot = document.getElementById("classSnapshot")
  if (!snapshot) return

  const classes = [
    { name: "Class 6 • Mathematics", mastery: "61%" },
    { name: "Class 7 • Mathematics", mastery: "65%" }
  ]

  snapshot.innerHTML = ""
  classes.forEach(item => {
    const row = document.createElement("div")
    row.className = "snapshot-row"
    row.innerHTML = `<span>${item.name}</span><strong>${item.mastery}</strong>`
    snapshot.appendChild(row)
  })
}

function loadAiInsights() {
  const list = document.getElementById("aiInsightsList")
  if (!list) return

  const insights = [
    "Focus on Comparing Fractions in Class 6",
    "Use bilingual explanations for 8 students",
    "Short concept quizzes improve retention"
  ]

  list.innerHTML = ""
  insights.forEach(text => {
    const li = document.createElement("li")
    li.textContent = "📌 " + text
    list.appendChild(li)
  })
}

function bindTeacherActions() {
  bindClick("viewClassAnalyticsBtn", () => navigate("class-analytics.html"))
  bindClick("planInterventionBtn", () => navigate("intervention-planner.html"))
  bindClick("logoutBtn", logout)
}
