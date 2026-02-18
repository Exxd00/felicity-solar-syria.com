// Google Analytics ID
export const GA_TRACKING_ID = "G-CPG2NHR3Z4";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Google Sheets Web App URL - Replace with your actual URL
const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";

// Get device type
const getDeviceType = (): string => {
  if (typeof window === "undefined") return "unknown";
  const userAgent = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    return "mobile";
  }
  if (/tablet|ipad/i.test(userAgent)) {
    return "tablet";
  }
  return "desktop";
};

// Get current page path
const getCurrentPage = (): string => {
  if (typeof window === "undefined") return "/";
  return window.location.pathname;
};

// Get referrer
const getReferrer = (): string => {
  if (typeof window === "undefined") return "";
  return document.referrer || "direct";
};

// Get UTM parameters
const getUTMParams = (): Record<string, string> => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
  };
};

// Send event to Google Sheets
const sendToGoogleSheets = async (eventData: {
  event: string;
  page: string;
  timestamp: string;
  device: string;
  source: string;
  label?: string;
  value?: number;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}) => {
  if (!GOOGLE_SHEETS_URL) {
    console.warn("Google Sheets URL not configured");
    return;
  }

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
  } catch (error) {
    console.error("Error sending to Google Sheets:", error);
  }
};

// ===========================================
// LEAD GENERATION EVENTS
// ===========================================

// Track lead generation (contact form, quote request, etc.)
export const trackLeadGeneration = (leadType: string, leadSource: string = "website") => {
  const utmParams = getUTMParams();
  const eventData = {
    event: "generate_lead",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: leadSource,
    label: leadType,
    referrer: getReferrer(),
    ...utmParams,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "lead_generation",
      event_label: leadType,
      lead_source: leadSource,
      value: 1,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track contact form submission
export const trackContactFormSubmit = (formData?: { name?: string; phone?: string; email?: string }) => {
  const utmParams = getUTMParams();
  const eventData = {
    event: "contact_form_submit",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "contact_form",
    label: "Contact Form Submission",
    referrer: getReferrer(),
    ...utmParams,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "lead_generation",
      event_label: "Contact Form",
      value: 10,
    });

    // Also track as conversion
    window.gtag("event", "conversion", {
      send_to: `${GA_TRACKING_ID}/contact_form`,
      event_category: "conversion",
      event_label: "Contact Form Submit",
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track quote request
export const trackQuoteRequest = (productName?: string) => {
  const utmParams = getUTMParams();
  const eventData = {
    event: "quote_request",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label: productName || "General Quote Request",
    referrer: getReferrer(),
    ...utmParams,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "lead_generation",
      event_label: `Quote Request - ${productName || "General"}`,
      value: 15,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// ===========================================
// ENGAGEMENT EVENTS
// ===========================================

// Track WhatsApp click event
export const trackWhatsAppClick = (source: string = "floating_button") => {
  const utmParams = getUTMParams();
  const eventData = {
    event: "whatsapp_click",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: source,
    label: "WhatsApp Contact",
    referrer: getReferrer(),
    ...utmParams,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: `WhatsApp - ${source}`,
      value: 5,
    });

    // Track as conversion
    window.gtag("event", "conversion", {
      send_to: `${GA_TRACKING_ID}/whatsapp_click`,
      event_category: "conversion",
      event_label: "WhatsApp Click",
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track Phone click event
export const trackPhoneClick = (label: string = "Phone Button") => {
  const utmParams = getUTMParams();
  const eventData = {
    event: "phone_click",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label,
    referrer: getReferrer(),
    ...utmParams,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: label,
      value: 5,
    });

    // Track as conversion
    window.gtag("event", "conversion", {
      send_to: `${GA_TRACKING_ID}/phone_click`,
      event_category: "conversion",
      event_label: "Phone Click",
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track email click
export const trackEmailClick = (label: string = "Email Link") => {
  const eventData = {
    event: "email_click",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "email_click", {
      event_category: "engagement",
      event_label: label,
      value: 3,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track form submission (generic)
export const trackFormSubmit = (formName: string) => {
  const utmParams = getUTMParams();
  const eventData = {
    event: "form_submit",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label: formName,
    referrer: getReferrer(),
    ...utmParams,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "engagement",
      event_label: formName,
      value: 1,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// ===========================================
// PAGE & CONTENT EVENTS
// ===========================================

// Track page view
export const trackPageView = (pageName: string) => {
  const utmParams = getUTMParams();
  const eventData = {
    event: "page_view",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label: pageName,
    referrer: getReferrer(),
    ...utmParams,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: pageName,
      page_location: window.location.href,
      page_path: getCurrentPage(),
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track product view
export const trackProductView = (productName: string, productCategory?: string) => {
  const eventData = {
    event: "product_view",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label: productName,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_item", {
      event_category: "ecommerce",
      event_label: productName,
      item_category: productCategory || "Products",
      value: 1,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track solution view
export const trackSolutionView = (solutionName: string) => {
  const eventData = {
    event: "solution_view",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label: solutionName,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_item", {
      event_category: "solutions",
      event_label: solutionName,
      value: 1,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// ===========================================
// SCROLL & ENGAGEMENT DEPTH
// ===========================================

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll", {
      event_category: "engagement",
      event_label: `${percentage}%`,
      value: percentage,
    });
  }
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "timing_complete", {
      event_category: "engagement",
      event_label: "Time on Page",
      value: seconds,
      name: "page_engagement",
    });
  }
};

// ===========================================
// CTA & BUTTON EVENTS
// ===========================================

// Track CTA button click
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  const eventData = {
    event: "cta_click",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label: `${ctaName} - ${ctaLocation}`,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      event_category: "engagement",
      event_label: ctaName,
      cta_location: ctaLocation,
      value: 1,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track download (brochures, catalogs, etc.)
export const trackDownload = (fileName: string, fileType: string) => {
  const eventData = {
    event: "file_download",
    page: getCurrentPage(),
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    source: "website",
    label: fileName,
  };

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "file_download", {
      event_category: "engagement",
      event_label: fileName,
      file_type: fileType,
      value: 1,
    });
  }

  // Send to Google Sheets
  sendToGoogleSheets(eventData);
};

// Track video play
export const trackVideoPlay = (videoName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "video_start", {
      event_category: "video",
      event_label: videoName,
      value: 1,
    });
  }
};

// Track social share
export const trackSocialShare = (platform: string, contentType: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "share", {
      event_category: "social",
      event_label: platform,
      content_type: contentType,
    });
  }
};

// ===========================================
// E-COMMERCE EVENTS
// ===========================================

// Track add to cart
export const trackAddToCart = (productName: string, productPrice?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "add_to_cart", {
      event_category: "ecommerce",
      event_label: productName,
      value: productPrice || 0,
      currency: "SYP",
    });
  }
};

// Track begin checkout
export const trackBeginCheckout = (cartValue?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "begin_checkout", {
      event_category: "ecommerce",
      value: cartValue || 0,
      currency: "SYP",
    });
  }
};

// Track purchase
export const trackPurchase = (transactionId: string, value: number, items?: unknown[]) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "purchase", {
      transaction_id: transactionId,
      value: value,
      currency: "SYP",
      items: items || [],
    });
  }
};

// ===========================================
// SEARCH EVENTS
// ===========================================

// Track search
export const trackSearch = (searchTerm: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "search", {
      event_category: "engagement",
      search_term: searchTerm,
    });
  }
};
