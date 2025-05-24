<script lang="ts">
	import {tick} from 'svelte';
	import {toSeconds , fromTime} from '$lib/util/timer'
	let hours:number = 0;
	let minutes:number = 0;
	let seconds:number = 0;
	let intervalId :number| null = null;
	let totalSeconds: number = 0;
	let timerOn:boolean = false;
	let startTime:number = 0;
	let progress_timer:number=0;

	function stopTimer(){
		timerOn = false;
		if(intervalId !== null){
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	function startTimer() {
		if(!intervalId){
			totalSeconds = toSeconds(hours, minutes , seconds);
			startTime = totalSeconds;
			timerOn = true;
			intervalId =  setInterval(async()=> {
				if(totalSeconds > 0){
					totalSeconds--;
					const time = fromTime(totalSeconds);
					hours = time.h;
					minutes = time.m;
					seconds = time.s;
					await tick()
					progress_timer = ((startTime - totalSeconds)/startTime)*100;

				}else{
					stop()

				}
			},1000)  
		}
	}

</script>

<div class="bg-orange-300">
	<div class="flex item-center flex-col justify-center overflow-hidden h-10%">
		<div class="border-b-4 border-grey-300 bg-orange-200 item-center grid grid-flow-col justify-items-center">
			<h1 class="font-serif text-4xl font-bold">
				Focus Time
				<i class="fa-solid fa-bell"></i>
			</h1>
		</div>
		<div></div>
		<form
			id="time-form" 
			class="flex flex-col items-center justify-center min-h-screen flex-grow"
		>
			<div class="w-1/6 bg-gray-300 h-10 rounded border-black border-4 border-double">
				<div class="bg-orange-500 h-full " style="width: {progress_timer}%; transition: width 0.3s;"></div>
			</div>

			<div class="h-20 max-w-fit flex items-center justify-center gap-2">
				<input
					bind:value={hours}
					type="number"
					min="0"
					max="59"
					disabled = {timerOn}
					class="time-input remove-arrow w-20 border-2 border-gray-500 rounded px-4 py-2 mt-2 w-30"
				/>
				<span class="text-xl font-bold">:</span>
				<input
					type="number"
					min="0"
					max="59"
					bind:value={minutes}
					disabled = {timerOn}
					class="time-input remove-arrow w-20 border-2 border-gray-500 rounded px-4 py-2 mt-2 w-30"

				/>
				<span class="text-xl font-semibold">:</span>
				<input
					type="number"
					min="0"
					max="59"
					disabled = {timerOn}
					bind:value={seconds}
					class="time-input remove-arrow w-20 border-2 border-gray-500 rounded px-4 py-2 mt-2 w-30"
				/>
			</div>

			<div class="flex gap-x-3">
				<button
					on:click={startTimer}
					class="bg-orange-400 hover:bg-orange-500 h-10 max-w-fit mt-10 font-bold p-2 border-2 border-black rounded-xl"
					>Start</button
				>
				<button
					on:click={stopTimer}
					class="bg-green-400 hover:bg-green-500 h-10 max-w-fit mt-10 font-bold p-2 border-2 border-black rounded-xl"
					>Stop</button
				>
			</div>
		</form>
	</div>
</div>
