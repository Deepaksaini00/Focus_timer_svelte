
<script>
	let result = '';

	function key_press(char) {
		result += char;
	}
	
	function mathematical_calculation(expression) {
		return expression.length
	}
		$: count = mathematical_calculation(result)
	function free_result() {
		result = '';
	}
</script>

<div>
  <h2>Calculator</h2>
	<h3>Result = {count}</h3>
  <table>
    <tr>
      <td><input type="text" bind:value={result}>
      </td>
      <td>
        <input type="button" value="C" on:click={free_result}>
      </td>
		</tr>

		{#each ["123/" , "456*" , "789-" , "0.=+"] as num_list}
		<tr>
				
				{#each num_list as char}
					<td>
							<input type="button" value = "{char}" on:click={function () {key_press(char)}} >
					</td>
				{/each}
		</tr>
		{/each}

  </table>
</div>

