<script>
    import { writable } from 'svelte/store';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let people = [
        {name: "Kevin Collins", role: "President", image: "/kevino.png"},
        {name: "Liam Mayor", role: "Vice President", image: "/ArmITLogo_smurf.png"},
        {name: "Annelie Hansson", role: "Head of Marketing", image: "/ArmITLogo_smurf.png"},
        {name: "Hanna Bahilu", role:"Event Organizer", image: "/ArmITLogo_smurf.png"},
        {name: "David Gidlöf Sjökvist", role: "Treasurer", image: "/ArmITLogo_smurf.png"},
        {name: "Hannah Tu", role: "Head of Logistics", image: "/ArmITLogo_smurf.png"},
        {name: "Mikael Motin", role:"Business Contact", image: "/ArmITLogo_smurf.png"}
    ]

    let currentIndex = writable(0);
    let itemsToShow = writable(4);

    
    function adjustItemsToShow() {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width < 768) {
                itemsToShow.set(1); // Small screens
            } else if (width >= 768 && width < 1280) {
                itemsToShow.set(3); // Medium screens
            } else {
                itemsToShow.set(4); // Large screens
            }
        }
    }

    onMount(() => {
        adjustItemsToShow(); 
        window.addEventListener('resize', adjustItemsToShow); 

        return () => {
            // Cleanup listener when component is destroyed
            window.removeEventListener('resize', adjustItemsToShow);
        };
    });

    $: displayItems = getDisplayItems();
    $: $currentIndex, $itemsToShow, displayItems = getDisplayItems();

    function getDisplayItems() {
        let start = $currentIndex % people.length; // Ensure looping
        let end = start + $itemsToShow;
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

    function previous() {
        currentIndex.update(n => (n - 1 + people.length) % people.length);
    }

    // Touch event handlers:
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        touchEndX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
        if (touchStartX - touchEndX > 50) {
            next();
        } else if (touchStartX - touchEndX < -50) {
            previous();
        }
    }
</script>

<section class="pt-40">
    <div class="flex flex-col ">
        <div class="text-center">
            <p class="text-5xl font-bold">Meet the Team</p>
            <p class="text-xl font-semibold text-black/75">Armit consists of 8 students ...</p>
        </div>
        <!-- Team Cards -->
        <div
            on:touchstart={handleTouchStart}
            on:touchmove={handleTouchMove}
            on:touchend={handleTouchEnd} 
            class=" scale-90 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center justify-items-center content-center w-4/5 gap-x-20 gap-y-8">
            {#each displayItems as {name, role, image}, index (name + role + index)}
            <div    
                in:fade={{ duration: 500 }} 
                class="max-w-sm flex flex-col border-none justify-center transition"
            >
                <img 
                    class="object-cover hover:border-t-[16px] hover:border-l-[16px] border-blue-500 saturate-0 hover:saturate-100 duration-300" 
                    src="{image}" 
                    alt="Team member"
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
    <button on:click={next}>NEXT</button>
    <button on:click={previous}>PREVIOUS</button>
</section>