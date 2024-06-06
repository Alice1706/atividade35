// Código JavaScript para filtrar tabela e barra de pesquisa
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    // Adiciona um ouvinte de evento de entrada para a barra de pesquisa
    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();
        filterTable(searchText);
    });

    function filterTable(searchText) {
        const rows = document.querySelectorAll('#dataTable tbody tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let found = false;

            cells.forEach(cell => {
                const cellText = cell.textContent.toLowerCase();
                if (cellText.includes(searchText)) {
                    found = true;
                }
            });

            if (found) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
});
