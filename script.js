 function calculateHours() {
            const required = parseFloat(document.getElementById('requiredHours').value) || 0;
            const rendered = parseFloat(document.getElementById('renderedHours').value) || 0;

            const remaining = Math.max(0, required - rendered);
            document.getElementById('remainingHoursDisplay').innerText = remaining.toFixed(1) + " hrs";
        }
