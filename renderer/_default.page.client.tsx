import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import ReactDOM from 'react-dom/client'
import type { PageContextClient } from './types'
import { getPageTitle } from './getPageTitle'

export { render }


// Enable Client Routing
export const clientRouting = true


let root: ReactDOM.Root
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  const container = document.getElementById('page-view')!
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
  document.title = getPageTitle(pageContext)
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */

