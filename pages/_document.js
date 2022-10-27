import {ColorModeScript} from '@chakra-ui/react'
import NextDocument, {Html, head, Main, NextScript} from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render () {
        return(
            <Html lang="en">
                <head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
    }