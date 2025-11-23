// Google Ads Conversion Tracking

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Conversões específicas para Google Ads
export const trackFormSubmit = () => {
  trackEvent('form_submit', {
    event_category: 'lead_generation',
    event_label: 'contact_form',
    value: 1
  });
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};

export const trackPackageView = (packageName: string) => {
  trackEvent('view_item', {
    event_category: 'ecommerce',
    event_label: packageName,
    items: [{
      item_name: packageName,
      item_category: 'ecommerce_package'
    }]
  });
};

export const trackCtaClick = (ctaLocation: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaLocation,
    value: 1
  });
};

export const trackChatPopupInteraction = (action: string) => {
  trackEvent('chat_interaction', {
    event_category: 'engagement',
    event_label: action,
    value: 1
  });
};

// Google Ads Conversion - SUBSTITUIR pelo ID real da conversão
export const trackConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `AW-CONVERSION_ID/${conversionLabel}`, // SUBSTITUIR
      'value': value || 1.0,
      'currency': 'BRL'
    });
  }
};
