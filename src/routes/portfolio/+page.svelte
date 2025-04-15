<script>
    let count = 0;
    let todos = ["Изучить Svelte", "Сделать проект", "Задеплоить"];
    let newTodo = "";
  
    function addTodo() {
      if (newTodo.trim()) {
        todos = [...todos, newTodo];
        newTodo = "";
      }
    }
  
    function removeTodo(index) {
      todos = todos.filter((_, i) => i !== index);
    }
  </script>
  
  <main>
    <h1>Список дел!</h1>  
     
    <!-- Список дел -->
    <div class="todos">
      <input 
        type="text" 
        bind:value={newTodo} 
        placeholder="Добавить задачу"
        on:keydown={(e) => e.key === 'Enter' && addTodo()}
      />
      <button on:click={addTodo}>Добавить</button>
  
      <ul>
        {#each todos as todo, index}
          <li>
            {todo}
            <button on:click={() => removeTodo(index)}>❌</button>
          </li>
        {/each}
      </ul>
    </div>
  </main>
  
  <style>
    main {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .counter {
      margin: 20px 0;
    }
    button {
      margin: 0 5px;
      padding: 5px 10px;
      cursor: pointer;
    }
    .todos {
      margin-top: 30px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      border-bottom: 1px solid #eee;
    }
  </style>