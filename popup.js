const validateForm = data => (data.startTime !== "" && data.lunchStart !== "" && data.lunchEnd !== "" && data.end !== "")

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#submit-btn").addEventListener("click", () => {
    let startTime = document.querySelector("#start").value
    let lunchStart = document.querySelector("#lunch-start").value
    let lunchEnd = document.querySelector("#lunch-end").value
    let end = document.querySelector("#end").value

    let data = { startTime, lunchStart, lunchEnd, end }
    if (validateForm(data)) {
      document.querySelector(".error").style.visibility = "hidden"
      chrome.tabs.executeScript({
        code: "let data = " + JSON.stringify(data)
      }, function() { chrome.tabs.executeScript({file: "filler.js"}) })
    } else {
      document.querySelector(".error").style.visibility = "visible"
    }
  })
})
