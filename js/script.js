document.addEventListener('DOMContentLoaded', function() {
    loadExercises();
});

function loadExercises() {
    fetch('data/exercises.json')
        .then(response => response.json())
        .then(data => {
            const exerciseSelect = document.getElementById('exercise');
            const exerciseContainer = document.getElementById('exercise-container');

            data.exercises.forEach(exercise => {
                // Agregar ejercicio al select
                const option = document.createElement('option');
                option.value = exercise.name;
                option.textContent = exercise.name;
                exerciseSelect.appendChild(option);

                // Crear tarjeta de ejercicio
                const exerciseCard = document.createElement('div');
                exerciseCard.classList.add('exercise-card');

                const exerciseTitle = document.createElement('h3');
                exerciseTitle.textContent = exercise.name;

                const exerciseDescription = document.createElement('p');
                exerciseDescription.textContent = exercise.description;

                const exerciseVideo = document.createElement('video');
                exerciseVideo.src = exercise.video;
                exerciseVideo.controls = true;

                exerciseCard.appendChild(exerciseTitle);
                exerciseCard.appendChild(exerciseDescription);
                exerciseCard.appendChild(exerciseVideo);

                exerciseContainer.appendChild(exerciseCard);
            });
        });
}

function addExercise() {
    const exerciseSelect = document.getElementById('exercise');
    const routineList = document.getElementById('routine-list');

    const selectedExercise = exerciseSelect.value;
    const listItem = document.createElement('li');
    listItem.textContent = selectedExercise;
    routineList.appendChild(listItem);
}
