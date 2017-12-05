for (let i = 1; i < 6; i++) {
  let day = `day${i}`
  document.querySelector(`.${day}.punchIn input`).value = data.startTime
  document.querySelector(`.${day}.lunchOut input`).value = data.lunchStart
  document.querySelector(`.${day}.lunchIn input`).value = data.lunchEnd
  document.querySelector(`.${day}.punchOut input`).value = data.end
}