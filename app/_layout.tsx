import '@expo/metro-runtime'
import 'expo-dev-client'
import { Stack } from 'expo-router'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import '../global.css'

export default function RootLayout() {
    return (
        <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
            <Stack
                screenOptions={{
                    animation: 'ios_from_right',
                }}
            >
                <Stack.Screen name='index' options={{ headerShown: false }} />
            </Stack>
        </KeyboardProvider>
    )
}
