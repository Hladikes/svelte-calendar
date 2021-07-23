<script>
  import { generateCalendar, getCurrentYear, getCurrentMonth } from './date.util'
  import Day from './Day.svelte'
  
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
  ]

  const months = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ]

  let selectedYear = getCurrentYear()
  let selectedMonth = getCurrentMonth()

  $: calendar = generateCalendar(selectedYear, selectedMonth)

  function nextMonth() {
    if (selectedMonth === 11) {
      selectedMonth = 0
      selectedYear++
    } else {
      selectedMonth++
    }
  }

  function previousMonth() {
    if (selectedMonth === 0) {
      selectedMonth = 11
      selectedYear--
    } else {
      selectedMonth--
    }
  }
</script>

<div class="calendar">
  <div class="calendar-header">
    <button on:click={ previousMonth }>&lt;</button>
    <span>{selectedYear} {months[selectedMonth]}</span>
    <button on:click={ nextMonth }>&gt;</button>
  </div>
  
  <div class="calendar-container">
    <div class="calendar-grid">
      {#each days as day}
        <div class="day-header">{day}</div>
      {/each}

      {#each calendar as week}
        {#each week as day}
          {#if day}
            <Day date={day} />
          {:else}
            <div></div>
          {/if}
        {/each}  
      {/each}
    </div>
  </div>
</div>

<style>
  * {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .calendar {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #F5F5F5;
  }

  .calendar-header * {
    padding: 8px 16px;
    font-size: 20px;
  }

  .calendar-container {
    display: flex;
    flex: 1;
    border: 1px solid lightgray;
    background-color: #EEEEEE;
  }

  .day-header {
    font-weight: bold;
    text-align: center;
  }

  .day-header {
    color: rgba(0, 0, 0, 0.7);
    padding: 8px;
    background-color: white;
  }

  .calendar-grid {
    flex: 1;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: max-content;
  }

</style>