import React, { useEffect, useState } from "react";
import {
    HiHome,
    HiUser,
    HiChip,
    HiOfficeBuilding,
    HiAcademicCap,
    HiFolder,
    HiBadgeCheck,
    HiDocumentText,
    HiMail,
} from "react-icons/hi";

const navItems = [
    { id: "home", label: "Home", Icon: HiHome },
    { id: "about", label: "About", Icon: HiUser },
    { id: "technologies", label: "Tech", Icon: HiChip },
    { id: "experience", label: "Experience", Icon: HiOfficeBuilding },
    { id: "education", label: "Education", Icon: HiAcademicCap },
    { id: "projects", label: "Projects", Icon: HiFolder },
    { id: "certifications", label: "Certifications", Icon: HiBadgeCheck },
    { id: "resume", label: "Resume", Icon: HiDocumentText },
    { id: "contact", label: "Contact", Icon: HiMail },
];

const BottomNav = () => {
    const [active, setActive] = useState(navItems[0].id);

    useEffect(() => {
        const observers = [];
        const options = { root: null, rootMargin: "0px", threshold: 0.45 };

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (!el) return;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(item.id);
                });
            }, options);
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleNav = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        setActive(id);
        el.scrollIntoView({
            top: el.getBoundingClientRect().top + window.pageYOffset - 20,
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav
            aria-label="Bottom navigation"
            className="fixed left-1/2 bottom-4 sm:bottom-6 transform -translate-x-1/2 z-50 bg-neutral-900/70 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-2 shadow-lg flex items-center gap-1 sm:gap-2"
        >
            {navItems.map((item) => {
                const isActive = active === item.id;
                const Icon = item.Icon;
                return (
                    <button
                        key={item.id}
                        onClick={() => handleNav(item.id)}
                        className={`flex flex-col items-center justify-center gap-0.5 px-2 py-1 sm:px-3 sm:py-2 rounded-full transition-transform transform sm:hover:-translate-y-1
                        ${
                            isActive
                                ? "bg-amber-400 text-black font-semibold"
                                : "text-slate-100 hover:bg-white/10"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        aria-label={item.label}
                        title={item.label}
                        type="button"
                    >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-[10px] sm:text-xs leading-none hidden sm:block">
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export default BottomNav;
