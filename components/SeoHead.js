import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: 'Rápidos de la Cuenca | Paquetería y Envíos Seguros en México',
  siteName: 'Rápidos de la Cuenca',
  description:
    'Tu servicio de paquetería y mensajería confiable en México. Rápidos de la Cuenca: rapidez, seguridad y confianza en cada envío.',
  url: 'https://www.rapidosdelacuenca.com.mx',
  type: 'website',
  robots: 'follow, index',
  image: 'https://www.rapidosdelacuenca.com.mx/assets/card-image.png',
  author: 'Rápidos de la Cuenca'
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords || 'paquetería, mensajería, envíos, México, Rápidos de la Cuenca'} />
      <meta name='author' content={meta.author} />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={props.canonical || `${meta.url}${router.asPath}`} />

      {/* Search Engine Verification */}
      {meta.googleSiteVerification && (
        <meta name="google-site-verification" content={meta.googleSiteVerification} />
      )}

      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={props.ogDescription || meta.description} />
      <meta property='og:title' content={props.ogTitle || meta.title} />
      <meta name='image' property='og:image' content={props.ogImage || meta.image} />

      {/* Twitter */}
      <meta name='twitter:card' content={props.twitterCard || 'summary_large_image'} />
      <meta name='twitter:site' content={props.twitterSite || '@rapidosdelacuenca'} />
      <meta name='twitter:title' content={props.ogTitle || meta.title} />
      <meta name='twitter:description' content={props.ogDescription || meta.description} />
      <meta name='twitter:image' content={props.ogImage || meta.image} />

      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content={meta.author}
          />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {/* Windows 8 app icon */}
      <meta name='msapplication-TileColor' content='#F53838' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      {/* Accent color on supported browser */}
      <meta name='theme-color' content='#F53838' />
      {/* JSON-LD Structured Data */}
      {props.jsonLd && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(props.jsonLd) ? props.jsonLd : [props.jsonLd])
          }}
        />
      )}
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#F59A9A',
  },
  {
    rel: 'icon',
    href: '/favicon/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
];

export default SeoHead;