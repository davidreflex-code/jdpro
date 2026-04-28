export const brand = {
  name: 'JD PRO',
  fullName: 'JD PRO Media Solutions',
  tagline: 'מסכי LED. הפקות חיות. חוויות בלתי נשכחות.',
  logo: '/images/logo.png',
  logoLight: '/images/logo-light.png',
  email: 'info@jdpro.co.il',
  phone: '+972-XX-XXX-XXXX',
  whatsapp: '972XXXXXXXXX',
  address: 'ישראל',
  social: {
    facebook: 'https://facebook.com/jdpro',
    instagram: 'https://instagram.com/jdpro',
    linkedin: 'https://linkedin.com/company/jdpro',
    youtube: 'https://youtube.com/@jdpro',
  },
} as const

export type Brand = typeof brand
