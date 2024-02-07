<script>
    import { writable } from 'svelte/store';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let people = [
        {name: "Kevin Collins", role: "President", image: "/portraits/individual/kev.png", linkedin: "https://www.linkedin.com/in/kevcol/", mail: "ordf.armit@chalmers.it"},
        {name: "David Gidlöf", role: "Treasurer", image: "/portraits/individual/gide.png", linkedin: "https://www.linkedin.com/in/davidgidl%C3%B6f/", mail: "kassor.armit@chalmers.it"},
        {name: "Liam Mayor", role: "Vice President", image: "/portraits/individual/post.png", linkedin: "https://www.linkedin.com/in/liam-mayor/", mail: "sekreterare.armit@chalmers.it"},
        {name: "Annelie Hansson", role: "Head of Marketing", image: "/portraits/individual/waka.png", linkedin: "https://www.linkedin.com/in/annelie-w-hansson/", mail: "annelieh@chalmers.it"},
        {name: "Hanna Bahilu", role:"Event Organizer", image: "/portraits/individual/montana.png", linkedin: "https://www.linkedin.com/in/hanna-bahilu-34a54b7d/", mail: "bahilu@chalmers.it"},
        {name: "Hannah Tu", role: "Head of Logistics", image: "/portraits/individual/utarn.png", linkedin: "https://www.linkedin.com/in/hannah-tu/", mail: "tuha@chalmers.it"},
        {name: "Mikael Motin", role:"Business Contact", image: "/portraits/individual/lustig.png", linkedin: "https://www.linkedin.com/in/mikael-motin-253292254/", mail: "motin@chalmers.it"},
        {name: "Jonas Nemeth", role:"Business Contact", image: "/portraits/individual/doxxy.png", linkedin: "https://www.linkedin.com/in/jonas-nemeth-546b43b9/", mail: "jonasne@chalmers.it"}
    ]

    let currentIndex = writable(0);
    let itemsToShow = writable(4);

    
    function adjustItemsToShow() {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width < 768) {
                itemsToShow.set(1); // Small screens
            } else if (width >= 768 && width < 1280) {
                itemsToShow.set(2); // Medium screens
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

<section class="pt-20">
    <div class="flex flex-col justify-center items-center gap-4">
        <div class="text-center">
            <p class="text-5xl font-bold text-[#1F1F3A]">Our Team</p>
            <p class="text-xl font-semibold py-2 text-[#1F1F3A]/90">ArmIT'23 consists of 8 students:</p>
        </div>
        <!-- Team Cards -->
        <div
            on:touchstart={handleTouchStart}
            on:touchmove={handleTouchMove}
            on:touchend={handleTouchEnd} 
            class=" scale-90 mx-auto grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center content-center w-4/5 gap-x-20 gap-y-8" id="team-images">
            {#each displayItems as {name, role, image, linkedin, mail}, index (name + role + index)}
            <div    
                in:fade={{ duration: 500 }} 
                class="max-w-sm flex flex-col border-none justify-center transition team-image" 
            >
                <img 
                    class="object-cover hover:shadow-[-12px_-12px_0_#63B2FF] outline-[#6BBBF8] duration-300 rounded-xl" 
                    src="{image}" 
                    alt="Team member"
                >
                <div class="pt-2 flex flex-col">
                    <p class="text-2xl font-bold">{name}</p>
                    <p class="text-xl text-[#182E6F] font-bold pb-2">{role}</p>
                    <div class="flex flex-row gap-x-4">
                        <a href="#services" class="duration-300 hover:opacity-80 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#182E6F" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
                        <a href="{mail}" class="duration-300 hover:opacity-80 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#182E6F" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                        <a href="{linkedin}" class="duration-300 hover:opacity-80 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" fill="#182E6F" stroke="white" stroke-width="2"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                    </div>
                </div>
            </div>
            {/each}
        </div>
        <div class="flex gap-8">
            <button on:click={previous}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left hover:opacity-80 hover:scale-110 transition"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button on:click={next}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right hover:opacity-80 hover:scale-110 transition"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
        </div>
    </div>
</section>