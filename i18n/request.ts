import { getRequestConfig } from "next-intl/server"
import { defaultLocale } from "./config"

export default getRequestConfig(async ({ locale }) => {
  // Use default locale if undefined
  const actualLocale = locale || defaultLocale

  return {
    locale: actualLocale,
    messages: (await import(`../messages/${actualLocale}.json`)).default,
    timeZone: "Asia/Yangon",
  }
})
