function navigate(page) {
    document.body.classList.add("fade-out")
    setTimeout(() => {
        window.location.href = page
    }, 450)
}
