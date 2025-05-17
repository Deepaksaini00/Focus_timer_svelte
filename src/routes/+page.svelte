<script>
	let hours = 0;
	let minutes = 10;
	let seconds = 59;
	function startTimer(){
		console.log(`${hours} : ${minutes} : ${seconds} `);

}

</script>

<div class="bg-orange-200">
	<div class="flex item-center flex-col justify-center overflow-hidden h-10%">
		<div class="bg-gray-50 item-center grid grid-flow-col justify-items-center">
			<h1 class="font-serif text-4xl font-bold">
				Focus Time
				<i class="fa-solid fa-bell"></i>
			</h1>
		</div>
		<div></div>
		<form
			id="time-form"
			class="border-4 border-indigo-500 flex flex-col items-center justify-center min-h-screen flex-grow"
		>
			<p class="text-x1 font-bold bg-orange-300 p-2 rounded-xl" id="msg">
				Focus Session Completed :)
			</p>
			<div class="h-20 max-w-fit flex items-center justify-center gap-2">
				<input
					bind:value={hours} 
					type="number"
					min="0"
					max="59"
					class="time-input remove-arrow w-20 border-2 border-gray-500 rounded px-4 py-2 mt-2 w-30"
					id="input-1"
				/>
				<span class="text-xl font-bold">:</span>
				<input
					type="number"
					min="0"
					max="59"
					bind:value={minutes}
					class="time-input remove-arrow w-20 border-2 border-gray-500 rounded px-4 py-2 mt-2 w-30"
					id="input-2"
				/>
				<span class="text-xl font-semibold">:</span>
				<input
					type="number"
					min="0"
					max="59"
					bind:value={seconds}
					class="time-input remove-arrow w-20 border-2 border-gray-500 rounded px-4 py-2 mt-2 w-30"
					id="input-3"
				/>
			</div>

			<div class="flex gap-x-3">
				<button on:click={startTimer}
					class="bg-orange-400 hover:bg-orange-500 h-10 max-w-fit mt-10 font-bold p-2 border-2 border-black rounded-xl"
					id="start-btn">Start</button
				>
				<button
					class="bg-green-400 hover:bg-green-500 h-10 max-w-fit mt-10 font-bold p-2 border-2 border-black rounded-xl"
					id="stop-btn">Stop</button
				>
			</div>
		</form>
	</div>
</div>
