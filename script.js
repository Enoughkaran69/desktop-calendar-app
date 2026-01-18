// Update calendar with current date
function updateCalendar() {
  const now = new Date();
  
  const day = now.getDate();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  const weekday = now.toLocaleString('default', { weekday: 'long' });
  
  document.getElementById('day').textContent = day;
  document.getElementById('month').textContent = month;
  document.getElementById('year').textContent = year;
  document.getElementById('weekday').textContent = weekday;
}

// Initialize on load
updateCalendar();

// Update every minute
setInterval(updateCalendar, 60000);
