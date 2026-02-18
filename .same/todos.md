# Felicity Solar Syria - Project Todos

## Completed
- [x] Import repository from GitHub
- [x] Install dependencies
- [x] Start development server
- [x] Replace Google Analytics ID with G-CPG2NHR3Z4
- [x] Enhance lead generation tracking functions
- [x] Add UTM parameter tracking
- [x] Add conversion tracking for key events
- [x] Fix FloatingButtons onClick handler

## Available Analytics Functions
The following tracking functions are available in `src/lib/analytics.ts`:

### Lead Generation
- `trackLeadGeneration(leadType, leadSource)` - General lead tracking
- `trackContactFormSubmit(formData)` - Contact form submissions
- `trackQuoteRequest(productName)` - Quote requests

### Engagement
- `trackWhatsAppClick(source)` - WhatsApp button clicks
- `trackPhoneClick(label)` - Phone call clicks
- `trackEmailClick(label)` - Email link clicks
- `trackFormSubmit(formName)` - Generic form submissions

### Page & Content
- `trackPageView(pageName)` - Page views
- `trackProductView(productName, category)` - Product page views
- `trackSolutionView(solutionName)` - Solution page views

### Engagement Depth
- `trackScrollDepth(percentage)` - Scroll tracking
- `trackTimeOnPage(seconds)` - Time on page

### CTA & Downloads
- `trackCTAClick(ctaName, ctaLocation)` - CTA button clicks
- `trackDownload(fileName, fileType)` - File downloads
- `trackVideoPlay(videoName)` - Video plays
- `trackSocialShare(platform, contentType)` - Social shares

### E-commerce
- `trackAddToCart(productName, price)` - Add to cart
- `trackBeginCheckout(cartValue)` - Begin checkout
- `trackPurchase(transactionId, value, items)` - Purchase complete

### Search
- `trackSearch(searchTerm)` - Search queries
