<script>
  let { data } = $props();
</script>

<div class="container text-center text-light mt-5">
  <h1 class="mb-3">
    Willkommen bei <span class="text-primary">FitTrack</span>
  </h1>
  <p class="lead">
    Verwalte deine Workouts, verfolge deinen Fortschritt – ganz einfach.
  </p>

  <img
    src="/images/jamesleepeak.webp"
    alt="Startbild"
    class="img-fluid rounded shadow mt-4 mb-4"
    style="max-height: 300px; object-fit: cover;"
  />

  <div class="d-flex justify-content-center gap-3 mb-5">
    <a class="btn btn-outline-primary" href="/workouts">Workouts anzeigen</a>
    <a class="btn btn-outline-light" href="/new-workout">Workout erstellen</a>
  </div>
</div>

<div class="custom-quote-box mt-4 mx-auto text-light text-center">
  {#if data.quote}
    <div class="quote-box">
      <p class="quote-text fst-italic" style="font-size: 1.1rem;">
        “{data.quote}”
      </p>
      <p class="quote-author text-muted">– {data.author}</p>
      <p class="quote-attribution">
        Quelle: 
        <a
          href="https://dummyjson.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          DummyJSON API
        </a>
      </p>
    </div>
  {:else}
    <div class="quote-box">
      <p class="quote-text fst-italic" style="font-size: 1.1rem;">
        Motivationszitat konnte nicht geladen werden.
      </p>
    </div>
  {/if}
</div>


<style>
  .quote-box {
    background: linear-gradient(to right, #111827, #1f2937);
    border-left: 4px solid #0d6efd;
    padding: 1.2rem;
    margin: 2rem auto;
    max-width: 700px;
    border-radius: 0.5rem;
    box-shadow: 0 0 12px rgba(13, 110, 253, 0.1);
  }

  .quote-text {
    font-style: italic;
    font-size: 1.15rem;
    color: #f1f1f1;
    margin-bottom: 0.4rem;
  }

  .quote-author {
    font-size: 0.95rem;
    color: #9ca3af;
    text-align: right;
    margin-bottom: 0.2rem;
  }

  .quote-attribution {
    font-size: 0.75rem;
    color: #6c757d;
    text-align: right;
    margin-top: 0.5rem;
  }

  .quote-attribution a {
    color: #6c757d;
    text-decoration: underline;
  }

  .quote-attribution a:hover {
    color: #0d6efd;
  }
</style>
