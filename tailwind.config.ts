import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        'follow': '#660087',
        primary: defaultTheme.colors.green,
      }
    }
  }
}
