document.addEventListener('DOMContentLoaded', () => {
    const driverForm = document.getElementById('driverForm');
    const driverList = document.getElementById('driverList');

    driverForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const driverName = document.getElementById('driverName').value;
        const vehicleNumber = document.getElementById('vehicleNumber').value;
        addDriver(driverName, vehicleNumber);
        driverForm.reset();
    });

    function addDriver(name, vehicle) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${name} - ${vehicle}</span> <button class="remove">Remove</button>`;
        driverList.appendChild(li);

        li.querySelector('.remove').addEventListener('click', function() {
            driverList.removeChild(li);
        });
    }
});
