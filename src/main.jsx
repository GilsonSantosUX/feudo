import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CssBaseline } from '@nextui-org/react';
import { NextUIProvider } from "@nextui-org/react"
import theme from './styles/theme';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NextUIProvider theme={theme}>
      <CssBaseline/>
      <App />
    </NextUIProvider>
)
