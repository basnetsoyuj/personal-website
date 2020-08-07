import './src/styles/global.css';
import React from "react"
import PropTypes from 'prop-types'
import { ThemeProvider } from "./src/context/ThemeContext"
import { ThemeProvider as TOCThemeProvider } from "./src/context/TOCThemeContext"

export const wrapRootElement = ({ element }, themeOptions) => {
    const {
        defaultModeDark = false,
        overrideOS = false,
    } = themeOptions

    return (
        <ThemeProvider defaultMode={defaultModeDark} overrideOS={overrideOS}>{element}</ThemeProvider>
    )
}

wrapRootElement.propTypes = {
    element: PropTypes.object.isRequired,
    themeOptions: PropTypes.object.isRequired,
}

export const wrapPageElement = ({ element }, themeOptions) => {
    const {
        maxDepth = 2,
    } = themeOptions

    return (
        <TOCThemeProvider maxDepth={maxDepth}>{element}</TOCThemeProvider>
    )
}

wrapPageElement.propTypes = {
    element: PropTypes.object.isRequired,
    themeOptions: PropTypes.object.isRequired,
}