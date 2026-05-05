# Google Search Console Indexing

Updated: 2026-05-05

## Current Status
- Domain: `https://onyxaistudio.digital`
- Ownership: verified in Google Search Console by DNS record.
- Hosting: Vercel project `onyx-ai-studio-site`.
- Sitemap: `https://onyxaistudio.digital/sitemap.xml`
- Robots: `https://onyxaistudio.digital/robots.txt`
- AI crawler file: `https://onyxaistudio.digital/llms.txt`
- Local Google wrapper status: no Search Console command is currently exposed, so Search Console actions are manual in the browser.

## Verified From This Machine
- Vercel domain inspect: `onyxaistudio.digital` is found under the Vercel account and attached to `onyx-ai-studio-site`.
- Nameservers: `ns1.vercel-dns.com` and `ns2.vercel-dns.com` are current and intended.
- Edge Network: enabled.
- `robots.txt`: returns `200`, references `https://onyxaistudio.digital/sitemap.xml`, and does not reference a Vercel preview URL.
- `sitemap.xml`: returns `200`, lists only `https://onyxaistudio.digital` URLs, and does not reference a Vercel preview URL.
- `llms.txt`: returns `200`.
- Homepage: returns `200`, has title, meta description, canonical URL, Open Graph URL, JSON-LD, and no `noindex`.
- All sitemap URLs return `200`.

## Sitemap URLs
- `https://onyxaistudio.digital/`
- `https://onyxaistudio.digital/services`
- `https://onyxaistudio.digital/case-studies`
- `https://onyxaistudio.digital/insights`
- `https://onyxaistudio.digital/contact`
- `https://onyxaistudio.digital/services/ai-integration`
- `https://onyxaistudio.digital/services/automation-workflows`
- `https://onyxaistudio.digital/services/web-development`
- `https://onyxaistudio.digital/services/seo-content-systems`
- `https://onyxaistudio.digital/case-studies/vapeos`
- `https://onyxaistudio.digital/case-studies/starry`
- `https://onyxaistudio.digital/case-studies/unicorn-island`
- `https://onyxaistudio.digital/case-studies/regional-service-site`
- `https://onyxaistudio.digital/insights/ai-inventory-semantic-search`

## Manual Search Console Steps
1. Open Google Search Console and select the `onyxaistudio.digital` domain property.
2. Go to `Sitemaps`.
3. Submit `https://onyxaistudio.digital/sitemap.xml`.
4. Confirm the sitemap status is submitted, pending, or success. If it reports a fetch error, re-test the sitemap URL in the browser and from this repo.
5. Go to `URL Inspection`.
6. Inspect and request indexing for these priority URLs:
   - `https://onyxaistudio.digital/`
   - `https://onyxaistudio.digital/services`
   - `https://onyxaistudio.digital/services/ai-integration`
   - `https://onyxaistudio.digital/case-studies`
   - `https://onyxaistudio.digital/contact`
7. For each inspected URL, confirm:
   - URL is available to Google.
   - Page is indexable.
   - User-declared canonical uses `https://onyxaistudio.digital`.
   - Crawled page does not show a robots or noindex block.

## Follow-Up Checks
- Re-check Search Console after 24-72 hours for sitemap processing.
- Re-check Page Indexing after Google has crawled the site.
- If GSC reports `Discovered - currently not indexed` or `Crawled - currently not indexed`, record it in `ISSUES.md` before changing content. That status can be normal for a new site.
- Do not use the Google Indexing API for this general site. It is not the correct indexing path for normal pages.
