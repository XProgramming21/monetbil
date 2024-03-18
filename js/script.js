const form = document.getElementById('form');
const amount = document.getElementById('amount').value;
const error = document.getElementById('error');

        form.addEventListener('submit', function (event) {
            amount.value = amount.value.trim();
            form.submit();
        });