<script>
    import { writable } from 'svelte/store';
    import { fade, slide } from 'svelte/transition';

    let people = [
        {name: "Kevin Collins", role: "President", image: "/kevino.png"},
        {name: "Liam Mayor", role: "Vice President", image: "/smurf.png"},
        {name: "Annelie Hansson", role: "Head of Marketing", image: "/smurf.png"},
        {name: "Hanna Bahilu", role:"Event Organizer", image: "/smurf.png"},
        {name: "David Gidlöf Sjökvist", role: "Treasurer", image: "/smurf.png"},
        {name: "Hannah Tu", role: "Head of Logistics", image: "/smurf.png"},
        {name: "Mikael Motin", role:"Business Contact", image: "/smurf.png"}
    ]

    let currentIndex = writable(0);

    $: displayItems = getDisplayItems();

    $: $currentIndex, displayItems = getDisplayItems();

    function getDisplayItems() {
    let start = $currentIndex % people.length; // Ensure looping
    let end = start + 4;
    // If the end exceeds the array length, slice from start to the end of array and from the beginning to the needed count
    if (end > people.length) {
        return [...people.slice(start, people.length), ...people.slice(0, end - people.length)];
    } else {
        return people.slice(start, end);
    }
}

function next() {
    currentIndex.update($currentIndex => ($currentIndex + 1) % people.length);
}
</script>

<section>
    <div class="flex flex-col items-center">
        <!-- Team Cards -->
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center content-center w-4/5 gap-x-8">
            {#each displayItems as {name, role, image}}
            <div class="flex flex-col border-none justify-center" in:slide={{ duration: 400 }} out:fade={{ duration: 400 }}>
                <img
                    class="max-w-sm hover:border-t-8 hover:border-l-8 border-blue-500 saturate-0 hover:saturate-100 duration-300" 
                    src="{image}" 
                    alt="Team member"
                    in:slide={{ x: 200, duration: 500 }}
                    out:slide={{ x: -200, duration: 500 }}
                >
                <div class="flex flex-col gap-y-2">
                    <p class="text-2xl font-bold">{name}</p>
                    <p class="text-xl font-bold">{role}</p>
                    <div class="flex flex-row gap-x-4">
                        <a href="" class="hover:scale-110 duration-300 max-w-[24px]"><img src="https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-1/100/Call_Phone_Cell_Ring_Pick_up-512.png" alt="phone"></a>
                        <a href="" class="hover:scale-110 duration-300 max-w-[24px]"><img src="https://www.iconpacks.net/icons/2/free-mail-icon-2569-thumb.png" alt="mail"></a>
                        <a href="" class="hover:scale-110 duration-300 max-w-[24px]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedin"></a>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
    <button on:click={next}>apa</button>
</section>