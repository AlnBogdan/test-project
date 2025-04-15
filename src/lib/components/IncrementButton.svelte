<script>
    let counter = 0;

    function increment() {
        counter += 1;
    }
</script>

<button
    class="bg-blue-500 text-white p-2 rounded-lg mt-4 block mx-auto"
    on:click={increment}
>
    Increment {counter}
</button>