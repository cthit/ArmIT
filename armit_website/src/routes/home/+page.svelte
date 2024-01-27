<script>
    import Menu from "../../components/Menu.svelte"
    import MobileMenu from '../../components/MobileMenu.svelte';
    import Cards from '../../components/Cards.svelte'
    import {menuToggler} from "../../store/menuStore"
    import { onDestroy } from "svelte";
    let visible = false;

    const unsubscribe = menuToggler.subscribe(value => {
        visible = value;
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="flex flex-col h-auto w-full max-w-full max-h-full">
    <div class="flex w-full h-screen relative">
        <Menu/>
        {#if visible}
            <MobileMenu/>
        {/if}  
    </div>
</div>

