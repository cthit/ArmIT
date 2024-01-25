<script>
    import Menu from "../../components/Menu.svelte"
    import MobileMenu from '../../components/MobileMenu.svelte';
</script>

<div class="flex flex-col h-auto w-full max-w-full max-h-full">
    <div class="flex w-full h-screen relative">
        <Menu/>
        
        {#if visible}
            <MobileMenu/>
        {/if}
        
    </div>
</div>

