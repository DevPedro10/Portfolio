import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Se há um hash (âncora), não scroll para o topo
        if (hash) {
            return;
        }
        
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, hash]);

    return null;
}
