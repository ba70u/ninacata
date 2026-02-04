
import { Product, SiteConfig, PageContent, TeaSubcategory, Brand, HouseholdSubcategory, BakhoorSubcategory } from './types';

export const DEFAULT_TEA_SUBCATS: TeaSubcategory[] = [
  { id: 'ts-shaira', name: { ar: 'شاي الشعرة', fr: 'Thé Shaira' } },
  { id: 'ts-zanbil', parentId: 'ts-shaira', name: { ar: 'الزنبيل', fr: 'Zanbil' } },
  { id: 'ts-kado', parentId: 'ts-shaira', name: { ar: 'الكادو', fr: 'Kado' } },
  { id: 'ts-sarir', parentId: 'ts-shaira', name: { ar: 'السرير', fr: 'Sarir' } },
  { id: 'ts-mkarkab', name: { ar: 'شاي المكركب', fr: 'Thé Mkarkab' } }
];

export const DEFAULT_BRANDS: Brand[] = [
  { id: 'b1', name: { ar: 'لطافة', fr: 'Lattafa' } },
  { id: 'b2', name: { ar: 'أرض العنبر', fr: 'Ard Al Amber' } },
  { id: 'b3', name: { ar: 'أرض الزعفران', fr: 'Ard Al Zaafaran' } },
  { id: 'b4', name: { ar: 'عطور نينا', fr: 'Nina Perfumes' } }
];

export const DEFAULT_HOUSEHOLD_SUBCATS: HouseholdSubcategory[] = [
  { id: 'h1', name: { ar: 'أواني الشاي', fr: 'Ustensiles de Thé' } },
  { id: 'h2', name: { ar: 'مباخر شرقية', fr: 'Encensoirs Orientaux' } },
  { id: 'h3', name: { ar: 'أواني متنوعة', fr: 'Ustensiles Divers' } }
];

export const DEFAULT_BAKHOOR_SUBCATS: BakhoorSubcategory[] = [
  { id: 'bk1', name: { ar: 'بخور ملكي', fr: 'Bakhoor Royal' } },
  { id: 'bk2', name: { ar: 'عود كمبودي', fr: 'Oud Cambodi' } },
  { id: 'bk3', name: { ar: 'بخور يومي', fr: 'Bakhoor Quotidien' } }
];

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 't-wad-lwaar',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي الواد الواعر', fr: 'Thé Lwad Lwaar' },
    description: { ar: 'شاي الشعرة الواد الواعر، جودة عالية ومذاق قوي.', fr: 'Thé Shaira Lwad Lwaar, haute qualité et goût puissant.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRlCZWJ-jXhUBI4M8qCWZB3pjCtZ-TK2Six29MYHOdWy_SYC88j2UPXB2gquwwQcZkgE8Id8R1b1HGD9yp-cz77623d3x4aeH7eOHlHXzL6AnwjQKawxk91L2aIU8e1-G8iF_VaPrZSiTdK9BITdX71U6ic8ckqCre4i6Ao_2s-6ShnhuwK_EOqxY68nU/s320/wad-lwaar.jpg',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
  },
  {
    id: 't-almogar-tantan',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي الموكار طانطان', fr: 'Thé Almogar TanTan' },
    description: { ar: 'شاي الموكار طانطان من صنف الشعرة، أصالة المذاق الصحراوي.', fr: 'Thé Almogar TanTan de catégorie Shaira, authenticité du goût saharien.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmy1MWxipR6-kv_kiP88qpb9kvpwpZik7iyWgEuufyDKohsQ_fCmF3xA5gjqMsWfwQAr0BtZeGTKVhpDjtCBC-eplNhtwwL7Fboe1Xb94OBgLQMvFSdVZJkKxwtZpMewYiIfhImp9J3g-7orlvi-q8dsg4Z7vFsxAd08x4Kjr2hK9E_Nq3tw8BsHivnmQ/s1080/11.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
  },
  {
    id: 't-smara-noir',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي السمارة اسود', fr: 'Thé Smara Noir' },
    description: { ar: 'شاي السمارة اسود، نكهة مركزة وجودة استثنائية.', fr: 'Thé Smara Noir, saveur concentrée et qualité exceptionnelle.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu3OvtkxF4dpdc0EIdP6ENGBg4NPCnHBRiYS8Uxe-UaLdF5oGu0sZ8fygq6khkDTldoWyD8Nr8zYY-WP5PQBpNGl_UJF-V2j0j8q2UvNISmsygXPyhvjsCVSY36Q_VmD-hVbMjhZU4Avc3tnbuLlbuZ4I2-Ohp47U3pKvcPsMpi0IH20uEXF51DSAPlvE/s1080/10.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
  },
  {
    id: 't-4011-france',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي 4011 فرنسا', fr: 'Thé 4011 France' },
    description: { ar: 'شاي 4011 فرنسا المستورد، جودة فاخرة.', fr: 'Thé 4011 France importé, qualité de luxe.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhUBae6u18peZn_9P1uJzGL2gxShpyln3PdZokMbQIesHbhDy7X0Q8eE6qR1TUbpnlocy0M7GFdY0QuG2-utvDg2nTDyKNlX-wt4YL89ALOZ8B8yL8RO7HDmw6a-Qg_Vbpkp7MM4ddkeY0XwJATdhDN4le5894k7wqt_AwQ96OVhbR3b6jo4GFFsgqH95c',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 0, '2kg': 0, '3kg': 0 }
  },
  {
    id: 't-las-palmas',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي لاس بالماس', fr: 'Thé Las Palmas' },
    description: { ar: 'شاي لاس بالماس الأصيل، مذاق رائع.', fr: 'Thé Las Palmas authentique, goût excellent.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQG7TwCZ5zK2I71OT79cPhsKz9oIp79LHFPIjrwbGgfLZqZO95DFUHqaImH0sYeau7g2RD5jlFpGkfyPN9ZigC454Wkfme_kth_AqRfJpQ2cnkRBNr85j5FQSwibhgpUYTcJcyWp_FwfRIKPdLgfCGaRx6C-jlANOvRsNDQWHwbXKLwN9RbnWj_dtiw60/s1080/12.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 17, '500g': 43, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
  },
  {
    id: 't-tarfaya-4011',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي طرفايا 4011', fr: 'Thé Tarfaya 4011' },
    description: { ar: 'شاي طرفايا 4011، جودة عالية وأوزان متنوعة.', fr: 'Thé Tarfaya 4011, haute qualité et formats variés.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhKXanvisggHuWYIMrcM_3bckW_8qlQ5N7mEs5lxYHhneZmnYe7cQGaNdRV6pmD9frzhgspCBG4QH2CGkK7mXJTx-FDTp1r8XgYJN6vPeczjQVrvrA34yYWfhyFKKRD3-1zRUeIhiNmfa3A7sNQhtGC7ZI7D_vcO0sYOCyVcRpWEf24GIEIf1DeQ-D1MJ0',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 19, '500g': 48, '1kg': 95, '2kg': 140, '3kg': 0 },
    wholesalePricePerKg: 85
  },
  {
    id: 't-las-palmas-tall',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي لاس بالماس طويل', fr: 'Thé Las Palmas Tall' },
    description: { ar: 'شاي لاس بالماس طويل القامة، عبوات اقتصادية.', fr: 'Thé Las Palmas Tall, emballages économiques.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpM1F1aHe4rB5gP95kfn2jCcV9CPabhSK0YzKLu-NYGokzDfCh5w-fTbc8IjE1z7nv3ELkVyQSD1z7z7lG6TkyBJCgbsh6QEXq8PvXhTWtmrwli0Cv3I6qcaAH3iqM00izb07vQCGi6KLpY_lMbdYJmPKOX_65najlVZpzAghTTRJtx5sz3O873STpuFA/s1080/LAS%20PALMAS%20TALL.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 75, '2kg': 150, '3kg': 220 },
    wholesalePricePerKg: 80
  },
  {
    id: 'p-black-titanium',
    category: 'Perfumes',
    gender: 'Men',
    brandId: 'b2',
    name: { ar: 'تيتانيوم', fr: 'Black Titanium' },
    description: { ar: 'عطر تيتانيوم الأسود، قوة وجاذبية رجالية لا تضاهى.', fr: 'Parfum Black Titanium, force et charisme masculin inégalés.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir_gDJoIs7vRRIzfXBClOJit1XVUHjpRUCmfbXDbpld2CMJDErRBO706zW5oYIuV-hLhxodepByXLCTK_1Hn2lurDr3rtoaPeXXB7O3g4wqT8KCryWXYVzMQm1R01YQz4BwUYq4qLHoa2dKGqz3FiOV9VpyxpiQPDz0rmbyBt4EsTctGSZwnaiQ__c8hc/s320/TETANIUM.png',
    inStock: true,
    price: 150,
    wholesalePrice: 105
  },
  {
    id: 'p-iris',
    category: 'Perfumes',
    gender: 'Women',
    brandId: 'b2',
    name: { ar: 'إيريس', fr: 'Iris' },
    description: { ar: 'عطر إيريس، لمسة زهرية ناعمة تعكس الأنوثة الراقية.', fr: 'Parfum Iris, une touche florale douce reflétant une féminité raffinée.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_Qy462UcbAHFDn6MlW-MZuRhQuZz0iIbry5qJIAQjsilzPJjWoZvxOL7H4ZvTBZsG7-QDUFzKtqO9NB3jpv8o2AmOkkX5c1CKheXGGFHpQ0vckNRw_LCLRuDH1omLF2EPx1kMS_W0YOs0bQ2vKK9UtdlH3EWqlYJcqhoPz_YHAwqY9evhmXuKyNTwVko/s320/IRIS.png',
    inStock: true,
    price: 150,
    wholesalePrice: 105
  },
  {
    id: 'p-forever',
    category: 'Perfumes',
    gender: 'Unisex',
    brandId: 'b2',
    name: { ar: 'للأبد', fr: 'Forever' },
    description: { ar: 'عطر للأبد، رائحة كلاسيكية تدوم طويلاً للجنسين.', fr: 'Parfum Forever, une fragrance classique et durable pour tous.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioVDguDUx-D6SQxNk4DpKA9YN573-lfeK5izsRtiliwQrHagslL1hshz79j_f35sQDpz7S-m8zVF2HyJEUycge8ua4I_wkW9C94Lj-pMHKp1q6ntc_f2qBgOMkOC7PYomwwH2Xa_CNpnAi68Wc9a9HnanhTSlfO-cmsTLmnIsF4vEnAh01fFero1Zrx84/s320/FOREVER.png',
    inStock: true,
    price: 150,
    wholesalePrice: 105
  },
  {
    id: 'p-cyrus',
    category: 'Perfumes',
    gender: 'Women',
    brandId: 'b2',
    name: { ar: 'سايروس', fr: 'Cyrus' },
    description: { ar: 'عطر سايروس النسائي، أناقة شرقية بلمسة عصرية.', fr: 'Parfum Cyrus pour femme, élégance orientale avec une touche moderne.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKXY-PcZR9zR4dijfzDM0taXovMUlSbY04BWTIadkDbglGS3SJIsM6aK-ag4ekhUF0Ct8fxmVvIhw8htA6zEUo5RrtPS2PbFky-svLy_cKPQATLCLQbBaJ4LNC3OGy75fI7MYZZpO1VKx4Xo95S1ZC_gAzOut9n3TaPzymg7xzYR1-Cx6__Kr7vdg2G_g/s320/CYRUS.png',
    inStock: true,
    price: 150,
    wholesalePrice: 105
  },
  {
    id: 'p-amber',
    category: 'Perfumes',
    gender: 'Unisex',
    brandId: 'b2',
    name: { ar: 'عنبر', fr: 'Amber' },
    description: { ar: 'عطر العنبر الأصيل، دفء وفخامة للجنسين.', fr: 'Parfum Amber authentique, chaleur et luxe pour tous.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2pEn88DqhJ8ljln9HVqVTTS6UfEEHnwDt-Yb6EtGC6opZBcW6cbPEBfMoFlF1l_MelgaPHJK7sKJvpFaN_eZ8jsXJhgxCNbNpDFRPMq0HNN4K5YryDASUU9iMuSjuEUI9ULr8PYC51fdM88ak3aCIRYbkvfTm01TIdbUnazRs7Pb6KhPcqYEN-f1p_1Y/s320/ANBAR.png',
    inStock: true,
    price: 150,
    wholesalePrice: 105
  },
  {
    id: 'p-al-ramz',
    category: 'Perfumes',
    gender: 'Women',
    brandId: 'b2',
    name: { ar: 'الرمز', fr: 'Al Ramz' },
    description: { ar: 'عطر الرمز، عنوان التميز والجمال الأنثوي.', fr: 'Parfum Al Ramz, symbole de distinction et de beauté féminine.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuLziGNKwaTN6q1IiFo7muvD6vtcE1kQcT8wpob5s1we5i3j4s_gRxTmafXxUYlvuIV14Hqh5xo0r8pla-98tsqmUjSsQEJJf97_zZ1Hpv0ejHhadAQncIYe-AzQj8Un5whKT2PtpABzQXprRUHiQn5IMrbCGVaDnrnqMyJ2AK8jtja7_JnfIv4run2ng/s320/AL%20RAMZ.png',
    inStock: true,
    price: 150,
    wholesalePrice: 105
  },
  {
    id: 't-al-wali-noir',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي الوالي اسود', fr: 'Thé Al Wali Noir' },
    description: { ar: 'شاي الوالي اسود، نكهة قوية ومميزة.', fr: 'Thé Al Wali Noir, saveur forte et distinctive.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7ltHZYEEvya6BCKIiKGoosmkb2NIXotZD3Y1vvjrBO7T5F2x4Bs6BUExr7Ye1plnVpXjNUnmU6GfQNy6P3DDYZRtcwdHf6BaPbFFdrBo5wr24ZKcHZRqyFaFYjH7IlO2XWrbqdXsK9XrC25xRstw1YzyAFbXtmPsBefHvGW1LkBpz06szcrV1aEn3Tis/s320/AL%20WALI%20BLACK.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 20, '500g': 50, '1kg': 0, '2kg': 0, '3kg': 0 }
  },
  {
    id: 't-al-wali-gold',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي الوالي ذهبي', fr: 'Thé Al Wali Gold' },
    description: { ar: 'شاي الوالي ذهبي، أعلى مستويات الجودة.', fr: 'Thé Al Wali Gold, le plus haut niveau de qualité.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheNee5tmqldA5SyNHgO8IvDQBbygzJwwoa7I0SOsoq8vvC7C975uyTns-vY0YY2gc-q5U0d9emiO4WuRTyhahcKqR9zCJ051AoEPtYlCUljW0YsJXxlNRnRVSQMTwjtoMJXm_XMx87luAtGbmRN89z0UUml-BCtRg8XBGhKGIqlfn6Oq0OGA6wFpZ_KPI/s320/AL%20WALI.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 22, '500g': 60, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 100
  },
  {
    id: 't2',
    category: 'Tea',
    teaSubcategoryId: 'ts-mkarkab',
    name: { ar: 'شاي مكركب الأصيل', fr: 'Thé Mkarkab Authentique' },
    description: { ar: 'شاي مكركب بجودة عالية ونكهة قوية.', fr: 'Thé Mkarkab de haute qualité avec une saveur forte.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2lcpQMAcjpeBgPx53K_p2aUP29_Z7XOk0su7oM4nNSByEMfpFR_DxfIXQkNVUu-9NxP2dxobM0ZuvqGm_yur5HcRVOq0dZzoM_v9tSXXgQaw8nMTKp3yV8k604b5y7ueTW4ql5Flc4hinxj94np-3-PqfO0GAvKcAqSBGZcq2O08K0VVrg06TSaTdxW4/w400-h400/WhatsApp%20Image%202026-02-02%20at%202.17.44%20PM.jpeg',
    inStock: true,
    pricesByWeight: { '100g': 35, '200g': 65, '500g': 140, '1kg': 260, '2kg': 500, '3kg': 0 },
    wholesalePricePerKg: 220
  }
];

export const DEFAULT_CONFIG: SiteConfig = {
  whatsappNumber: '212661811890',
  templates: {
    ar: "السلام عليكم نينـا بزار، أريد طلب:\n[ITEMS]\nالإجمالي: [TOTAL]\nشكراً",
    fr: "Bonjour NINA BAZAR, je souhaite commander :\n[ITEMS]\nTotal : [TOTAL]\nMerci"
  },
  contact: {
    email: 'contact@ninabazar.com',
    phone: '+212 661-811890',
    address: {
      ar: 'شارع الحسن الثاني، العيون، المغرب',
      fr: 'Av. Hassan II, Laayoune, Maroc'
    }
  },
  branding: {
    logo: 'NINA BAZAR',
    colors: {
      primary: '#c49a6c',
      secondary: '#1a362d'
    }
  }
};

export const DEFAULT_PAGE_CONTENT: PageContent = {
  home: {
    heroTitle: { ar: 'نينـا بزار: أصالة الصحراء والخليج', fr: 'NINA BAZAR : L\'Âme du Sahara et du Golfe' },
    heroSubtitle: { ar: 'خبرة 33 سنة في أجود أنواع الشاي، العطور الشرقية، والبخور.', fr: '33 ans d\'expertise dans le thé, les parfums orientaux et le bakhoor.' },
    heroImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop',
    featuredTeaTitle: { ar: 'أجود أنواع الشاي الصحراوي', fr: 'Le meilleur du thé saharien' },
    featuredTeaDesc: { ar: 'نحن نوفر لك تجربة فريدة مع الشاي الصحراوي الأصيل، المنقى بعناية فائقة لضمان النكهة والجودة التي تستحقها.', fr: 'Nous vous offrons une expérience unique avec le thé saharien authentique, purifié avec le plus grand soin.' },
    featuredTeaImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2lcpQMAcjpeBgPx53K_p2aUP29_Z7XOk0su7oM4nNSByEMfpFR_DxfIXQkNVUu-9NxP2dxobM0ZuvqGm_yur5HcRVOq0dZzoM_v9tSXXgQaw8nMTKp3yV8k604b5y7ueTW4ql5Flc4hinxj94np-3-PqfO0GAvKcAqSBGZcq2O08K0VVrg06TSaTdxW4/w400-h400/WhatsApp%20Image%202026-02-02%20at%202.17.44%20PM.jpeg',
    featuredHousTitle: { ar: 'أطقم شاي ومباخر ملكية', fr: 'Théières et encensoirs royaux' },
    featuredHousDesc: { ar: 'أكمل تجربة الشاي الصحراوي الخاص بك مع تشكيلتنا الواسعة من الأواني والأباريق المزخرفة يدوياً.', fr: 'Complétez votre expérience du thé saharien avec notre large sélection d\'ustensiles décorés à la main.' },
    featuredHousImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBk1m6jCQh4vR-NRORhydgrr5N8MpJzX5A5zcCIJfoIJIL6kGq3os-Ed2my4B0FNP8YnzSaZghY-cl_bsJrcg56uujzjLQocA8GP5o_AETk7_Z75NQsL-6c6vUa6BFdkzVEpz8cv1wHHe3IE5CxkoY9M8C2Aqnyhcn0Onhh5WWEJcZfBrzgKz917l3iRM/w400-h400/Whisk_ugnhzgz4adomjdnz0szyegotimmkrtl5ctm10co.png'
  },
  about: {
    title: { ar: 'من نحن', fr: 'À Propos de Nous' },
    body: { 
      ar: 'نحن مؤسسة بخبرة تمتد لأكثر من 33 سنة في توزيع الشاي الصحراوي، العطور الشرقية، والبخور ومشتقاته. نوفّر منتجات عالية الجودة بالجملة والتقسيط، ونخدم آلاف الزبناء داخل المغرب وخارجه.',
      fr: 'Nous sommes une institution avec plus de 33 ans d\'expérience dans la distribution de thé saharien, de parfums orientaux et de bakhoor. Nous proposons des produits de haute qualité en gros et au détail, servant des milliers de clients au Maroc et à l\'étranger.'
    },
    image: 'https://images.unsplash.com/photo-1518114056416-298375936780?q=80&w=1600&auto=format&fit=crop'
  }
};
