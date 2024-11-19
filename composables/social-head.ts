interface seoParams {
  site_name?: string
  title?: string
  description?: string
  image?: string
  card?: 'summary' | 'summary_large_image' | 'player' | 'app'
  twitter_id?: string
}

export function socialHead(params: seoParams = {}) {
  const {
    site_name = 'Aarzoo Hydraulics',
    title,
    description,
    image = '~/assets/images/card-logo.png',
    card = 'summary_large_image',
    twitter_id = '@safin5311',
  } = params

  const urlParams = useRequestURL()
  const route = useRoute()

  const url = route.path === '/' ? urlParams.origin : urlParams.origin + route.path

  return useHead({
    title,
    link: [
      {
        rel: 'canonical', href: url,
      },
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: card,
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: twitter_id,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: url,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: site_name,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: image,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: site_name,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: url,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: site_name,
      },
    ],
  })
}
