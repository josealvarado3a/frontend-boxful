"use client";
import logotipo from "@/assets/logotipo_boxful.svg";

export default function TopBar() {
    return (
        <nav>
            <img src={logotipo.src} alt="Logotipo Boxful" className="h-8" />
        </nav>
    );
}