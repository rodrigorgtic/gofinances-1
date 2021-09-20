import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import AppLoading from 'expo-app-loading/build/AppLoadingNativeWrapper'
import { StatusBar } from 'react-native'
import { AppRoutes } from './src/routes/app.routes'

import theme from './src/global/styles/theme'
import { SignIn } from './src/screens/SignIn'
import { AuthProvider } from './src/hooks/auth'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={theme.colors.primary}
      />

      <NavigationContainer>
        <AuthProvider>
          <SignIn />
          {/*<AppRoutes />*/}
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}
