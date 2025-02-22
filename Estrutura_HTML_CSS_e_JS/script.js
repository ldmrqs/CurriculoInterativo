function selectIcon(event, element) {
    event.stopPropagation(); // Impede que o clique no ícone dispare o evento do body
    
    // Remove a seleção dos outros ícones
    document.querySelectorAll('.internet').forEach(icon => icon.classList.remove('selected'));

    // Adiciona a seleção ao ícone clicado
    element.classList.add('selected');
}

function deselectIcon(element) {
    // Remove a seleção ao dar double click
    element.classList.remove('selected');
}

function clearSelection(event) {
    // Remove a seleção ao clicar fora do ícone
    if (!event.target.closest('.internet')) {
        document.querySelectorAll('.internet').forEach(icon => icon.classList.remove('selected'));
    }
}
