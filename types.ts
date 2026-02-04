
export type Category = 'Tea' | 'Perfumes' | 'Bakhoor' | 'Household';

export type TeaWeight = '100g' | '200g' | '500g' | '1kg' | '2kg' | '3kg';

export type Gender = 'Men' | 'Women' | 'Unisex';

export interface TeaSubcategory {
  id: string;
  name: { ar: string; fr: string };
  parentId?: string;
}

export interface Brand {
  id: string;
  name: { ar: string; fr: string };
}

export interface HouseholdSubcategory {
  id: string;
  name: { ar: string; fr: string };
}

export interface BakhoorSubcategory {
  id: string;
  name: { ar: string; fr: string };
}

export interface Product {
  id: string;
  category: Category;
  name: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  image: string;
  inStock?: boolean;
  
  // Optional category-specific IDs
  teaSubcategoryId?: string;
  brandId?: string;
  gender?: Gender;
  householdSubcategoryId?: string;
  bakhoorSubcategoryId?: string;
  
  // Pricing structures
  pricesByWeight?: Partial<Record<TeaWeight, number>>;
  wholesalePricePerKg?: number; 
  price?: number;
  wholesalePrice?: number;
}

export interface CartItem {
  cartId: string;
  productId: string;
  name: { ar: string; fr: string };
  category: Category;
  selectedWeight?: TeaWeight;
  unitPrice: number;
  wholesalePriceApplied: boolean;
  quantity: number;
  total: number;
}

export interface SiteConfig {
  whatsappNumber: string;
  templates: {
    ar: string;
    fr: string;
  };
  contact: {
    email: string;
    phone: string;
    address: { ar: string; fr: string };
  };
  branding: {
    logo: string;
    colors: {
      primary: string;
      secondary: string;
    }
  }
}

export type Language = 'ar' | 'fr';

export interface PageContent {
  home: {
    heroTitle: { ar: string; fr: string };
    heroSubtitle: { ar: string; fr: string };
    heroImage: string;
    featuredTeaTitle: { ar: string; fr: string };
    featuredTeaDesc: { ar: string; fr: string };
    featuredTeaImage: string;
    featuredHousTitle: { ar: string; fr: string };
    featuredHousDesc: { ar: string; fr: string };
    featuredHousImage: string;
  };
  about: {
    title: { ar: string; fr: string };
    body: { ar: string; fr: string };
    image: string;
  };
}
