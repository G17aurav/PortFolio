'use client';

/**
 * @file Splash Provider
 * @description Provider that shows splash screen on initial load and manages logo visibility
 */

import { ReactNode, useState, useSyncExternalStore, createContext, useContext } from 'react';
import { SplashScreen } from '@/components/splash';

interface SplashContextType {
    logoVisible: boolean;
}

const SplashContext = createContext<SplashContextType>({ logoVisible: true });

export const useSplash = () => useContext(SplashContext);

interface SplashProviderProps {
    children: ReactNode;
}

// Check if this is the first visit in this session
const SPLASH_SHOWN_KEY = 'splash_shown_session';

// SSR-safe subscription for client detection
function subscribeToNothing() {
    return () => { };
}

function getClientSnapshot() {
    return true;
}

function getServerSnapshot() {
    return false;
}

export function SplashProvider({ children }: SplashProviderProps) {
    const isClient = useSyncExternalStore(subscribeToNothing, getClientSnapshot, getServerSnapshot);

    const [showSplash, setShowSplash] = useState(() => {
        // Initialize based on session storage (only on client)
        if (typeof window !== 'undefined') {
            const splashShown = sessionStorage.getItem(SPLASH_SHOWN_KEY);
            return splashShown !== 'true';
        }
        return true;
    });

    // Logo is hidden during splash and transition, shown after complete
    const [logoVisible, setLogoVisible] = useState(() => {
        // If splash was already shown, logo should be visible
        if (typeof window !== 'undefined') {
            const splashShown = sessionStorage.getItem(SPLASH_SHOWN_KEY);
            return splashShown === 'true';
        }
        return false;
    });

    const handleTransitionStart = () => {
        // Logo stays hidden during transition
    };

    const handleSplashComplete = () => {
        setShowSplash(false);
        setLogoVisible(true);
        // Mark splash as shown for this session
        sessionStorage.setItem(SPLASH_SHOWN_KEY, 'true');
    };

    // Don't render anything on server to avoid hydration mismatch
    if (!isClient) {
        return null;
    }

    return (
        <SplashContext.Provider value={{ logoVisible }}>
            {showSplash && (
                <SplashScreen
                    onComplete={handleSplashComplete}
                    onTransitionStart={handleTransitionStart}
                />
            )}
            <div
                className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
            >
                {children}
            </div>
        </SplashContext.Provider>
    );
}