/**
 * Final Project Script
 * Handles system preference detection and accessibility logging
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check for Reduced Motion Preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e) => {
        if (e.matches) {
            console.log("System Preference: Reduced motion enabled. Scroll behavior set to auto.");
            document.documentElement.style.scrollBehavior = 'auto';
        } else {
            document.documentElement.style.scrollBehavior = 'smooth';
        }
    };

    // Initialize and Listen for changes
    handleMotionChange(motionQuery);
    motionQuery.addEventListener('change', handleMotionChange);

    // 2. Check for Dark Mode Preference
    const colorQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleColorChange = (e) => {
        if (e.matches) {
            console.log("System Preference: Dark mode detected.");
        } else {
            console.log("System Preference: Light mode detected.");
        }
    };

    // Initialize and Listen for changes
    handleColorChange(colorQuery);
    colorQuery.addEventListener('change', handleColorChange);
});
