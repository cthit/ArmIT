<script>
    import "../app.css";
    import { onNavigate } from '$app/navigation';

    let { children } = $props();

    onNavigate((navigation) => {
      if (!document.startViewTransition) return;

      const from = navigation.from?.url;
      const to = navigation.to?.url;
      const isSamePageHashNavigation =
        from &&
        to &&
        from.pathname === to.pathname &&
        from.search === to.search &&
        from.hash !== to.hash;

      if (isSamePageHashNavigation) return;

      return new Promise((resolve) => {
        document.startViewTransition(async () => {
          resolve();
          await navigation.complete;
        });
      });
    });
  </script>
  
  {@render children()}
