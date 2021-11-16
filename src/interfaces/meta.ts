export interface IMeta {
    title?: string;
    description?: string;
    openGraph?: {
      url?: string;
      title?: string;
      description?: string;
      site_name?: string;
    };
    twitter?: {
      handle?: string;
      site?: string;
      cardType?: string;
    };
  };