const { hairlineWidth, platformSelect } = require('nativewind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    darkMode: 'class', // Enable manual toggling of dark mode
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                border: withOpacity('border'),
                input: withOpacity('input'),
                ring: withOpacity('ring'),
                background: withOpacity('background'),
                foreground: withOpacity('foreground'),
                primary: {
                    DEFAULT: withOpacity('primary'),
                    foreground: withOpacity('primary-foreground'),
                },
                secondary: {
                    DEFAULT: withOpacity('secondary'),
                    foreground: withOpacity('secondary-foreground'),
                },
                destructive: {
                    DEFAULT: withOpacity('destructive'),
                    foreground: withOpacity('destructive-foreground'),
                },
                muted: {
                    DEFAULT: withOpacity('muted'),
                    foreground: withOpacity('muted-foreground'),
                },
                accent: {
                    DEFAULT: withOpacity('accent'),
                    foreground: withOpacity('accent-foreground'),
                },
                popover: {
                    DEFAULT: withOpacity('popover'),
                    foreground: withOpacity('popover-foreground'),
                },
                card: {
                    DEFAULT: withOpacity('card'),
                    foreground: withOpacity('card-foreground'),
                },
            },
            borderWidth: {
                hairline: hairlineWidth(),
            },
        },
        // https://viewport-tester.com
        screens: {
            // Very old phones
            // iPhone 3G: 320 x 480
            '2xs': { min: '300px' },

            // Small Phones in Portrait Mode
            // iPhone 7: 375 x 667
            // iPhone 8: 375 x 667
            // iPhone X: 375 x 812
            // iPhone 16: 393 x 852
            // Galaxy S24: 360 x 780
            // Pixel 3: 393 x 786
            xs: { min: '360px' },

            // Big Phones in Portrait Mode
            // iPhone XS Max: 414 x 896
            // Google Pixel 9 Pro XL: 412 x 915
            // Google Pixel 4 XL: 412 x 869
            sm: { min: '412px' },

            // Small Tablets in Portrait Mode (10-11")
            // iPad Air (iOS 7): 768 x 1024
            // iPad Air (2022): 820 x 1180
            md: { min: '768px' },

            // Big Tablets in Portrait Mode (12-13"), Small Tablets in Landscape Mode (10-11")
            // iPad Pro 12.9": 1024 x 1366
            lg: { min: '1024px' },

            // Small Laptops (13-14")
            // Macbook Pro 13" M1: 1280 x 800
            // Macbook Pro 14" M3: 1512 x 982
            // Macbook Air 13" M3: 1280 x 832
            xl: { min: '1280px' },

            // Big Laptops & external monitors
            // 1080p monitor: 1920 x 1080
            // 2k display: 2560 x 1440
            // 4k display HIDPI: 3840 x 2160 -> 1920 x 1080
            // MacBook Pro 16" M3: 1728 x 1117
            '2xl': { min: '1536px' },
        },
    },
    plugins: [],
}

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return platformSelect({
                ios: `rgb(var(--${variableName}) / ${opacityValue})`,
                android: `rgb(var(--android-${variableName}) / ${opacityValue})`,
            })
        }
        return platformSelect({
            ios: `rgb(var(--${variableName}))`,
            android: `rgb(var(--android-${variableName}))`,
        })
    }
}
