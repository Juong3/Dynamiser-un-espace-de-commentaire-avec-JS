document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Récupère les valeurs saisies 
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation des données du formulaire
    if (!firstName || !lastName || !message) {
        // message d'alerte quand le formulaire n'est pas complet 
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Cache le message d'erreur 
    document.getElementById('errorMessage').style.display = 'none';

    // Pour créer un nouveau commentaire
    const newComment = document.createElement('div');
    newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'py-10', 'border-t', 'border-gray-200');
    newComment.innerHTML = `
        <div class="flex-1">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${message}</p>
            </div>
        </div>
    `;

    // Ajoute le commentaire à la liste de commentaire
    document.getElementById('comment-list').appendChild(newComment);

    // Reset le formulaire
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('message').value = '';
});
