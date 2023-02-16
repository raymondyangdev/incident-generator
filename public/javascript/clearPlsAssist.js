window.addEventListener('load', function() {
    document.querySelector('#resetBtn').addEventListener('click', clearPlsAssist)

    function clearPlsAssist() {
        document.querySelector('#please-assist-ty').value = '';
    }
})