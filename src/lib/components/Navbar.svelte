<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Manuelles Bootstrap-Importieren (DOM bereit)
      import('bootstrap').then(({ Collapse }) => {
        const toggleButton = document.querySelector('.navbar-toggler');
        const collapseElement = document.getElementById('navbarNav');
  
        if (toggleButton && collapseElement) {
          new Collapse(collapseElement, { toggle: false });
        }
      });
    });
  </script>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">FitTrack</a>
  
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/workouts">Workouts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/exercises">Übungen</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/new-workout">Neues Workout</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/new-exercise">Neue Übung</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  