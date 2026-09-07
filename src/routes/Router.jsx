// Preserve normal anchor behavior for modified clicks, hashes, and external links.
export function Link({ to, children, onClick, ...props }) {
  return (
    <a
      href={to}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        if (!to.startsWith("/") || to.includes("#")) return;
        event.preventDefault();
        // Notify App after internal navigation, including query-only filter changes.
        window.history.pushState({}, "", to);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }}
    >
      {children}
    </a>
  );
}
