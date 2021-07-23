<script>
  export let date

  function onDayClick() {
    alert(date)
  }
</script>

<div class="day" on:click={ onDayClick }>
  <span class="day-date">{date.getDate()}</span>
  {#if [6, 9, 1, 15, 20, 28].includes(date.getDate())}
    <span class="day-event-count">4</span>
    <div class="event-container">
      <p class="event" style="color: orange">Event 1 12:00 PM</p>
      <p class="event" style="color: green">Event 2 12:00 PM</p>
      <p class="event" style="color: blue">Event 3 12:00 PM</p>
      <p class="event" style="color: red">Event 4 12:00 PM</p>
    </div>
  {/if}
</div>

<style>
  .day {
    position: relative;
    display: flex;
    padding: 8px;
    background-color: white;
    flex-direction: column;
    justify-content: flex-end;
    transition: background-color 0.15s;
  }

  .day-date {
    position: absolute;
    right: 8px;
    top: 8px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 24px;
  }

  .day-event-count {
    position: absolute;
    left: 8px;
    top: 8px;
    color: white;
    padding: 2px 8px;
    border-radius: 16px;
    font-size: 16px;
    background-color: dodgerblue;
  }

  .day:hover {
    cursor: pointer;
  }

  .day:hover .day-date {
    color: dodgerblue;
  }

  .event {
    margin: 0;
  }
</style>