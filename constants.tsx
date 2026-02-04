
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
    id: 'p-ahlam',
    category: 'Perfumes',
    gender: 'Unisex',
    brandId: 'b2',
    name: { ar: 'احلام', fr: 'Ahlam' },
    description: { ar: 'عطر أحلام من أرض العنبر، رائحة ساحرة للجنسين.', fr: 'Parfum Ahlam par Ard Al Amber, une fragrance envoûtante unisexe.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFftfQ4aBz-WdBae06DO-Lxc1oYenM8Rnj5lpIjq__B3l79hxl-WGE7moDaca5yNnYLBKSxSwdW35Zm0vRKc0vOhjrtGJcn_GuQomGrHZ4wJRSLz7dmaFFSbpv0Q5UQbONZfdU-3Pn05LDGuaJXUjnD4MvFJSgNwc4Ny-HWGfs-mLM1DdS15PkFDvv2oo/s320/AHLAM.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
  },
  {
    id: 'p-cheers',
    category: 'Perfumes',
    gender: 'Men',
    brandId: 'b2',
    name: { ar: 'تشيرز', fr: 'Cheers' },
    description: { ar: 'عطر تشيرز من أرض العنبر، لمسة رجالية قوية.', fr: 'Parfum Cheers par Ard Al Amber, une touche masculine puissante.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc3WJI0HUUNauTN-DH-AVwy4Fv5a9pdxDDQ36NDeOlmt_Ir_kiit0PfpwFf0hv9Yft1nj-Gid4NpJmGG9Yp8pURyf5bUEq8wbSnYd8AQfJFku08qU8pQw0bHGvH-MpW-XKG9watNEh5ihNhx71c4E_laD2A8COri2hK5oh1m6rHBud345kpBKuJvzu_F4/s320/cheeres.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
  },
  {
    id: 'p-farah',
    category: 'Perfumes',
    gender: 'Women',
    brandId: 'b2',
    name: { ar: 'فرح', fr: 'Farah' },
    description: { ar: 'عطر فرح من أرض العنبر، أناقة نسائية لا تقاوم.', fr: 'Parfum Farah par Ard Al Amber, une élégance féminine irrésistible.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8wSbYS2dbHTKzApE-d3Nxx4MuObCRFpiBBt1fr7w6MZxcYxHZgxTu2Arp-nlIUHDpTpZQeIxpWvP_7m2dR2NTkmkfc8gUawuxOvvCFbog4vjuj1b6domBpjconbon03i_-sYEZVKAvXWohGN8iQXxa9RPE0ll6kMc7DoFlyvvDk6srTpEzvvXia1eGeI/s320/FARAH.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
  },
  {
    id: 'p-hamsa',
    category: 'Perfumes',
    gender: 'Unisex',
    brandId: 'b2',
    name: { ar: 'همسة', fr: 'Hamsa' },
    description: { ar: 'عطر همسة من أرض العنبر، نغمات عطرية هادئة.', fr: 'Parfum Hamsa par Ard Al Amber, des notes parfumées apaisantes.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjlPt-T3WN6oDyfisFJ0726D7_I0XmjnfHwnBy2nz2E7yRIPDSrIk1ToR61QHWmdQJ677bErA77bWpyz1E0Y1hxEMHfzGFI1PmrafsqgKKIFsJpx0e7b3i_uzGQkINxia3DmI76WLKizMi4avklpY6T5akVA317Mz59IfJLn7GURHoFKCjwlNzyOT6MEY/s320/HAMSA.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
  },
  {
    id: 'p-hekaya',
    category: 'Perfumes',
    gender: 'Women',
    brandId: 'b2',
    name: { ar: 'حكاية', fr: 'Hekaya' },
    description: { ar: 'عطر حكاية من أرض العنبر، يروي قصة الجمال.', fr: 'Parfum Hekaya par Ard Al Amber, racontant une histoire de beauté.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-IgUQCPZ46gjXT95caxNCt_L3UomMRBIs3VJexAf5TkBsUpfkprxdgg3ZbvcviQQXrslX_Dsr7J4kmq-zmBJFlnLEXjr4y-YBchb1CIureiJ6F2PzLH1PcUoebDiopn08Mn21mmDSoz0t5pEsvxuIPhJjh0Z1z_uu4RpGnQEyyNDWvAEw9NQ6dJ6G27Q/s320/Hekaya.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
  },
  {
    id: 'p-khayal',
    category: 'Perfumes',
    gender: 'Unisex',
    brandId: 'b2',
    name: { ar: 'خيال', fr: 'Khayal' },
    description: { ar: 'عطر خيال من أرض العنبر، عالم من الأحلام.', fr: 'Parfum Khayal par Ard Al Amber, un monde de rêves.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgB2UyzW2IckhAvEDjIAPfCFAuIOKhQifa8MWmLYM5w9VtBdJ5b_YHZ3UxY6VXPSifA9QFg7uSwFGatLfg57ambtUyEKo_hFbL11WyTCkUA9q8QvufCRuXO6K1AL-Y45Fg8uArT1Ht4628rR1qfZmjxuEmHHjeaZbxsiMMzgd-HvdANRqiO2PJ3Zm0AgGM/s320/khayal.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
  },
  {
    id: 'p-rawaa',
    category: 'Perfumes',
    gender: 'Women',
    brandId: 'b2',
    name: { ar: 'روعة', fr: 'Rawaa' },
    description: { ar: 'عطر روعة من أرض العنبر، قمة الرقي النسائي.', fr: 'Parfum Rawaa par Ard Al Amber, le summum de la sophistication féminine.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnImS2pP8cMpKX7y4PFJjQZeZjqoVVVnRUjuM3HZ9FLYFQyLOL3wl9lKWyXA3FIcqxm4kjvEeVAIv3uKgNKjH39ydlVQKhxYHOK9wMdMhCtuJUyFTzYUot97c5QMaZUvW5o2h55a0hx-iTW75oUZJffI0c5jJ9TuP1YOMPoYepJWfpkSM4ZK515lqmuSE/s320/RAWAA.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
  },
  {
    id: 'p-sokoun',
    category: 'Perfumes',
    gender: 'Men',
    brandId: 'b2',
    name: { ar: 'سكون', fr: 'Sokoun' },
    description: { ar: 'عطر سكون من أرض العنبر، هدوء وجاذبية للرجل.', fr: 'Parfum Sokoun par Ard Al Amber, calme et charisme pour l\'homme.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1_XkfHtKw86fDAB_CkVXpZGqw0vRAmFjiswnlafEJLbEHsXxyqtzFrzwzxL2ncAhh2bIDEebR59U4L4qK_DX61KHHRU77XFwUWOsCVDB8Im9Rs8Z0KJotvFvauPuvO5Jy9-WecHXi3PInrTEvGZ-YRYe3zGSrqL4BoURAE3SB5pTEqJ_KigmUZoZ3nOY/s320/SOUKOUN.png',
    inStock: true,
    price: 190,
    wholesalePrice: 120
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
    id: 't-bait-al-fakhama',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي بيت الفخامة', fr: 'Thé Bait Al Fakhama' },
    description: { ar: 'شاي بيت الفخامة، الفخامة في كل كأس.', fr: 'Thé Bait Al Fakhama, le luxe dans chaque tasse.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjJf6rEqBGf2kl6V4wB9sGnwxphjkb9JGpUzXRPcY-v5uc-NAzwofX3gpXbotPXzxYYccmn55uEvx4u0Ub288ER79hZ8MQi-CLw2Tao7Z0LFpiYEVpw0t8QC-BAwcc3rYeEcRMPO7o-mMINk02pLVG50CgWTfu2v9yPuwvRGM7m9E3fMgMDea_dCwk4lFs',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
  },
  {
    id: 't-dar-al-dahab',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي دار الذهب', fr: 'Thé Dar Al Dahab' },
    description: { ar: 'شاي دار الذهب، جودة ذهبية لا تضاهى.', fr: 'Thé Dar Al Dahab, une qualité dorée inégalée.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgmkLJx-HaY7Wb5Z6zyxXSdbyAHVW950vXcnnnhNxTIjyfJc00ap-vnPIXbE6yGLZeBYJFD0dCbG19gE1U34kt5ZOICIsCNTGAXAgosQZVJLcEJ9tGSY9tICwAsNwdIzrHKAqlCzYIWSSBTsGvN5aT02cHUrkwOIsZTi_n_Y5W3j4FTNiqqGTOuwVvWjbc',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
  },
  {
    id: 't-tarfaya-num-one',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي طرفايا نمبر وان', fr: 'Thé Tarfaya Number One' },
    description: { ar: 'شاي طرفايا نمبر وان، الخيار الأول لمحبي الشاي.', fr: 'Thé Tarfaya Number One, le premier choix des amateurs de thé.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEi7OcdArA-e7QrvnL3IZKsoGCvmRk-UsNDck75k0uXsFErwhUKEOKvXr7QQVtVlibhI-1YZryjrMIUapxOyecwBVjDn4EMHLa4BH6nuMTJaUpZxkoa1_f4ggY4XG8T7rULUcyZ3Stp4VZUJeN-C09mFLw_m2k7vtePiyXDU6Ske-56xljBQrprEX6dxYEw',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 20, '500g': 50, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 85
  },
  {
    id: 't-ben-al-wali',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي بن الوالي', fr: 'Thé Ben Al Wali' },
    description: { ar: 'شاي بن الوالي، نكهة الشعرة التقليدية.', fr: 'Thé Ben Al Wali, saveur Shaira traditionnelle.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7HdMCRwYV9XnYcpa0K3Eij4g5r3nT0s8BXj-y-gi3Idh2b2F1y8mL1dMZhBOaMfps5XlyMkPYcAOp5aHOfhYK_03_dKYNNpUNi_pX9qpXaGvrv7zaCsHdBl7fczRKu_hjlhyaqCuuYd0yDt8GxTkp-EOM-XZD3sHjjX956zdHQxXpZW57EMwaua8Syg/s1080/ben%20lwali.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 20, '500g': 50, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 85
  },
  {
    id: 't-saqia-al-hamra',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي الساقية الحمراء', fr: 'Thé Saqia Al Hamra' },
    description: { ar: 'شاي الساقية الحمراء، رمز الضيافة الصحراوية.', fr: 'Thé Saqia Al Hamra, symbole de l\'hospitalité saharienne.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBbJwhajgZ_FdfY0_kJweP-BmsLixUCNltdRSfaVwhzWFt7CztsM6MjvRgaXU6CpzFeBgVaIpprF2C5vIVJwn7ONAHY4PVLkfZJtPmSeKcFuk_eSUg4AE70ZVMa5JoH6HzHtk2xEVFgOH4EivNi_-1_VnYoobtyusUjsMEcmooxq-GxB5vTBk5yFtNxwk/s320/AL%20SAQIA%20NEW.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 18, '500g': 45, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
  },
  {
    id: 't-al-wali-blanche',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي الوالي أبيض', fr: 'Thé Al Wali Blanche' },
    description: { ar: 'شاي الوالي أبيض، نكهة ناعمة وجودة فائقة.', fr: 'Thé Al Wali Blanche, saveur douce et qualité supérieure.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTSU6HcG4WXMzZ4bb2sZ8FuW5m4WOA8nPn32KrEW6XQ2nfLjWrmcoRbFEcx4FbEYFD-aLWUQ0O1F_glYaKwNw1u1uNGmkPemDiHCcngO5dEnmH9aM92izCfU5Ii9_Ty5glpzbAQudPtpKQL-6zsaKi7qmse8ub8AE-PhZWsq__5I5InshDy8tldyiXw_c/s320/al%20wali%20blanch1.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 20, '500g': 50, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 80
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
    description: { ar: 'شاي الوالي ذهبي، أعلى مستويات الجودة.', fr: 'Thé Al Wali Gold, le plus haut niveau de quality.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheNee5tmqldA5SyNHgO8IvDQBbygzJwwoa7I0SOsoq8vvC7C975uyTns-vY0YY2gc-q5U0d9emiO4WuRTyhahcKqR9zCJ051AoEPtYlCUljW0YsJXxlNRnRVSQMTwjtoMJXm_XMx87luAtGbmRN89z0UUml-BCtRg8XBGhKGIqlfn6Oq0OGA6wFpZ_KPI/s320/AL%20WALI.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 22, '500g': 60, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 100
  },
  {
    id: 't-wad-om-fatma',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي واد ام فاطمة', fr: 'Thé Wad Om Fatma' },
    description: { ar: 'شاي واد ام فاطمة، جودة استثنائية.', fr: 'Thé Wad Om Fatma, qualité exceptionnelle.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjDxyPAVgNkbt4IEYCmqdG2FLuCH_nBA4GNs-YvIFlhmmX3IceL1lmOkEIJTFStl2TKYTIHPLW0yt2e0JDyyftg4OxLfIZH-GcS1hIu7Ie6xJU-A2PO1GAe_63MXd7oNdHrOkfY2BqV3VoLH1zDTixBSOgIVpK4bOAbN5WSmPtlU-Kw3aM1Ge3HyybiTz0',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 28, '500g': 70, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 120
  },
  {
    id: 't-wad-om-fatma-zenbil',
    category: 'Tea',
    teaSubcategoryId: 'ts-zanbil',
    name: { ar: 'شاي واد ام فاطمة زنبيل', fr: 'Thé Wad Om Fatma Zenbil' },
    description: { ar: 'شاي واد ام فاطمة صنف الزنبيل، نكهة فاخرة وجودة استثنائية.', fr: 'Thé Wad Om Fatma catégorie Zenbil, saveur premium et qualité exceptionnelle.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaepH18LdyXHKh08suKsoIgJYgHEdekY_MNj1nP6l5pk41WckiDQzMAREq9I8maZQjh2ScdTG0Eq06GQHQt29vHb8aVNg7seLWFDa9phsSdd_xDU9M81GolalRY8PE6Yd9Uh-GvRknvH39anDaiMdpAvfiNuOlCPGbDjDl2BynAHfU_9uj_A0L1LOGcL8/w400-h400/oum_fatma_zenbil__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 0, '500g': 70, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 120
  },
  {
    id: 't-las-palmas-zenbil',
    category: 'Tea',
    teaSubcategoryId: 'ts-zanbil',
    name: { ar: 'شاي لاس بالماس زنبيل', fr: 'Thé Las Palmas Zenbil' },
    description: { ar: 'شاي لاس بالماس من صنف الزنبيل، جودة عالية ونكهة أصيلة.', fr: 'Thé Las Palmas de catégorie Zenbil, haute qualité et saveur authentique.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGEpLC3O6ipujjnI02R19-BkTszKa787N2qWMpl8XSz5RuWZsUDGSMUOwoOAR9Vnb_F-6ueawMvWBLjEMo1ZUO5VFydYXeLPF_bB-lhJTIRgqh-35xhhtzsH4Fqv6lZxX-09CILb5fM-vZk0Oy6h0I6I93rj61nrfpQv8ZTbtjQpbI-JKNr3V0RctWrAY/w400-h400/LAS_PALMAS_SITE__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 26, '500g': 65, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 110
  },
  {
    id: 't-smara-zenbil',
    category: 'Tea',
    teaSubcategoryId: 'ts-zanbil',
    name: { ar: 'شاي السمارة زنبيل', fr: 'Thé Smara Zenbil' },
    description: { ar: 'شاي السمارة صنف الزنبيل، نكهة صحراوية متميزة.', fr: 'Thé Smara catégorie Zenbil, saveur saharienne distinctive.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPDNeLVe1pUECM7s6ZAYOAOIlJfpanzhmUE8SORG9HKkAOXSeiKaq9-l0MHmxMdywckZ-ohVEZOex2L1nY1tnI1vs-V0X74Qg4pnyzwcQCmSYQBDzZCN3JeRbcr0WiKdT3DXDT1Qu76D0XBBlKv6n_jnxN193gRc9SKUYNi-OO756erIP-fSN0decEopc/w400-h400/smara_site__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 26, '500g': 65, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 110
  },
  {
    id: 't-almogar-tantan-zenbil',
    category: 'Tea',
    teaSubcategoryId: 'ts-zanbil',
    name: { ar: 'شاي الموكار طانطان زنبيل', fr: 'Thé Almogar TanTan Zenbil' },
    description: { ar: 'شاي الموكار طانطان صنف الزنبيل، أصالة الجودة الصحراوية.', fr: 'Thé Almogar TanTan catégorie Zenbil, authenticité de la qualité saharienne.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgq0WxY5i6B9XaRM04z7J-ljmTGa3egElDKpSP1jrAE1-6CjIUvCn3bk0OUe1v13XY6BCLAtOm7LkULc9-kMTAckngOv90jAL491opN4N9ouy2y8d4v9CIohVTIMX36bKw90cyIQD9I4I9UiVRgg8V6uDN6ix5sC21__xdYxk5Q_2IGh1W_LZUHhqILVbE/w400-h400/almogar_tan_tan_site__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 26, '500g': 65, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 110
  },
  {
    id: 't-al-wali-zenbil',
    category: 'Tea',
    teaSubcategoryId: 'ts-zanbil',
    name: { ar: 'شاي الوالي زنبيل', fr: 'Thé Al Wali Zenbil' },
    description: { ar: 'شاي الوالي صنف الزنبيل، نكهة فاخرة ومذاق رائع.', fr: 'Thé Al Wali catégorie Zenbil, saveur premium et goût excellent.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNqF1IWx7L-i3rthuTBdWXR2jhPwUuQ_7LEnQ6FL7XrKRSyRW6GrbF_AMM2SkcLKNvYxiUyaPWflJNAHhyphenhyphenKxmVrCqdic91fRyl0BKBwJWNgNI7ftEhY2_jzzfxGMW0dLfg11v6CISat7Adtf50rGKglIDe3rvvPbEUyXbUVR6twDBz51t-X5WgMpd_M-g/w400-h400/al_wali_site__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 26, '500g': 65, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 110
  },
  {
    id: 't-las-palmas-kado',
    category: 'Tea',
    teaSubcategoryId: 'ts-kado',
    name: { ar: 'شاي لاس بالماس كادو', fr: 'Thé Las Palmas Cadeau' },
    description: { ar: 'شاي لاس بالماس من صنف الكادو، نكهة متميزة للتذوق الفاخر.', fr: 'Thé Las Palmas catégorie Cadeau, une saveur distincte pour une dégustation premium.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwv4YoZgvtxtHD5AspSg3Q3sbNBQui1BwQ2EGcnq0cu3fHEnTZ6ImeASzX_neWW5kNVqZyd5G4Ai4WWtAz3Tobc50jZ1kzfyzD_CsWp1I_o0y351F31RBkLO9eEENw80moCdftBp3e-VUdu5I8wwMKY63nejjKzoNqXBOzGmV9SMpM8erdpnOiqBTZLws/w400-h400/LAS_PALMAS_CADEAU__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 0, '500g': 170, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 150
  },
  {
    id: 't-al-wali-kado',
    category: 'Tea',
    teaSubcategoryId: 'ts-kado',
    name: { ar: 'شاي الوالي كادو', fr: 'Thé Al Wali Cadeau' },
    description: { ar: 'شاي الوالي صنف الكادو، جودة أصيلة ونكهة فاخرة.', fr: 'Thé Al Wali catégorie Cadeau, qualité authentique et saveur premium.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3i2ziYMaZnHWA0IBgyl7jxlCk7-NLSEqHHFCTcxRz_rXEG8lSsqOsy0zO-wPFIfGVEN00iqd7Aizod4_NUZzNgAQps1kMqLuQXgxVk8AHFMau2sT8LV1wsSBFQYyyQbouTEnwjC3AnHjbnXFknjS4vD4W4hq9r22Nrpa0vlATXchwoCmHb3TEiNmUqWg/w400-h400/cadeau_al_wali__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 0, '500g': 170, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 150
  },
  {
    id: 't-almogar-tantan-kado',
    category: 'Tea',
    teaSubcategoryId: 'ts-kado',
    name: { ar: 'شاي الموكار طانطان كادو', fr: 'Thé Almogar TanTan Cadeau' },
    description: { ar: 'شاي الموكار طانطان صنف الكادو، أصالة المذاق الصحراوي في حلة فاخرة.', fr: 'Thé Almogar TanTan catégorie Cadeau, authenticité du goût saharien dans un format premium.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1v_nuFAen4CKZt4L_YqSLDiW1Kl8SrNuHOkWYW7e1hjqJQ8lwvmLG4swh1nf1KevOA4kS9KkHo2YA_8th7zyv9WYEwXmZW6tiOHYgyOb_h1TEaCQI-RxJbzHCv9skPi3OG0OtDfacc0ZMaL1m3JvsGT4ukn_u6nRrcW5DbKGwAFqah6UvrsyZtfoARcs/w400-h400/ALMOGAR_TAN_TAN_CADEAU__1_-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 0, '500g': 170, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 150
  },
  {
    id: 't-smara-kado',
    category: 'Tea',
    teaSubcategoryId: 'ts-kado',
    name: { ar: 'شاي السمارة كادو', fr: 'Thé Smara Cadeau' },
    description: { ar: 'شاي السمارة صنف الكادو، نكهة قوية وجودة استثنائية.', fr: 'Thé Smara catégorie Cadeau, saveur robuste et qualité exceptionnelle.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyt_1AbmUEIDToQlTDW_cWDFBXTl0DWEG8ENfPUluBeAKeZ6N8ajO5LGFK4A3tp0FJ8Ax8oJdTNm9zUPqbTB4PkIz8V3veHSIXvnGcPJp0PHaIKUu-HSElGtMWVH3w58iHQ_-D2EgUUzXIv2qPb-KQ3pVX4_Xq3iOsZPuLxTRkIt-lQbk2vlQUeoLs3wo/w400-h400/SMARA_CADEAU-removebg-preview.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 0, '500g': 170, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 150
  },
  {
    id: 't-al-general',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي الجنرال', fr: 'Thé Al General' },
    description: { ar: 'شاي الجنرال، نكهة القيادة والجودة.', fr: 'Thé Al General, saveur de leadership et de qualité.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqwaun0Ti-TM3MnR5ao0aaUYnHBE87ERcqrHNvsimCx8CAaO8kQrFptYSy6k71tIbvpkOJkTHiHy7ZaXpA7cZMUp2POCQ5LqzVGOrxn0RaLPLgMmNmZg_QhEr5PWz-mIq05ePCrf6sWNbC_4ZaZbC2nfa8Rwglar0FbGdG3YCDazm-yNDn_FTZKYLXhCI/s320/al%20jiniral.png',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 26, '500g': 65, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 100
  },
  {
    id: 't-ouad-noun',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي وادنون 10/10', fr: 'Thé Ouad Noun 10/10' },
    description: { ar: 'شاي وادنون 10/10 من صنف الشعرة، جودة فاخرة ونكهة صحراوية مركزة.', fr: 'Thé Ouad Noun 10/10 de catégorie Shaira, qualité premium et saveur saharienne intense.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiLbAgT0fc-cSMK5QrDWIO2eXjAMZleTgvg-B48VIiP3inFS6owaJ15CdcvG2URB3Lgj8hQgUdXMteMWYzjJ0BzlixulHgotGCKWx1tjL66Q6ft6X_sBUTdFCXYkm6MzmErILBM1nO5umpbRS4V3qqfyy5lcTL5M2aSmbUyJMK6t4Ymkx0OnBFnDnQH2UQ',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 15, '500g': 36, '1kg': 75, '2kg': 130, '3kg': 0 },
    wholesalePricePerKg: 60
  },
  {
    id: 't-guelmim',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي كلميم 5/5', fr: 'Thé Guelmim 5/5' },
    description: { ar: 'شاي كلميم 5/5 من صنف الشعرة، مذاق أصيل وجودة مضمونة.', fr: 'Thé Guelmim 5/5 de catégorie Shaira, goût authentique et qualité garantie.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjZxIx2zKwMbpgtTqrvK7VCm7KxhmdzImUdfq1PGSzEyWFAwieYWMjMVBS4jCGyaUxsMkCSUMmj-D56p7cbgThnImZJFP5F3_K3_XISYb_RFkNVlUYav30y_5sgoAmPLU7U8FHnogHgwZ6oeE1uAWn4Vmf4bE1zm6E1g4oCajir5QcJz2sNMxkkNGTLU58',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 15, '500g': 36, '1kg': 0, '2kg': 130, '3kg': 0 },
    wholesalePricePerKg: 60
  },
  {
    id: 't-tarfaya',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي طرفاية W7/7', fr: 'Thé Tarfaya W7/7' },
    description: { ar: 'شاي طرفاية W7/7 من صنف الشعرة، نكهة متميزة وجودة عالية.', fr: 'Thé Tarfaya W7/7 de catégorie Shaira, saveur distincte et haute qualité.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgJGEjGC7VRzwKya5FQCHoULBqlzM7r1OOI8HmQXKQwrqP-5BWz9DVWij5YVcIpegBpCPBTfySbT4p_5kBHbI_Rmn1h9cLYHELGIHIapGFmwwEF52zOp6JwyfkhqhU6zKhnLN9TWjGtD6Iefmfwqnqf5Dbc0kSlQttrjZCDC4P6pLMH5sz6bIrcbxkvblg',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 14, '500g': 35, '1kg': 70, '2kg': 120, '3kg': 0 },
    wholesalePricePerKg: 55
  },
  {
    id: 't-talhaya',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي طلحايا', fr: 'Thé Talhaya' },
    description: { ar: 'شاي طلحايا من صنف الشعرة، نكهة تقليدية أصيلة.', fr: 'Thé Talhaya de catégorie Shaira, saveur traditionnelle authentique.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiSQdeWlP43oe5tgt8AKezNrXClhLVmCWiqxdIgDh6pJ1un0-YfssG6H8fZu-2FgR6OtFBF6JWj2P_eqFW0lHWwzxYTl2kgCQgHTIIwje7tPukWh2lOL6xJTuGTwp_cqaqBS_up6l1Ks3e1ido1KmPaoy7l3C11uvAAZzGS4XytaagLt3lHroV1F09NzJ4',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 14, '500g': 35, '1kg': 0, '2kg': 0, '3kg': 0 },
    wholesalePricePerKg: 58
  },
  {
    id: 't-oued-ed-dahab',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي وادي الذهب', fr: 'Thé Oued Ed-Dahab' },
    description: { ar: 'شاي وادي الذهب من صنف الشعرة، نكهة قوية وجودة عالية.', fr: 'Thé Oued Ed-Dahab de catégorie Shaira, saveur robuste et haute quality.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgJU2KrysC_X0HiKAAdmVqTvn_bbFbqwbvO7_x26L44hKFdjCV3IQnaWvfeFMBeDTtwRgQ4FVo_Tec3m3_UrxbjBQj-QKecyF5zKV6fqm_u406JijxvTdDIFaQzXrIRJYLHjcjYL3Hd3YrK4nQ3f0hYQJzW1XTWBMXxxDb0KUR7uaT7go5jMyKxxbbeNok',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 13, '500g': 33, '1kg': 65, '2kg': 110, '3kg': 0 },
    wholesalePricePerKg: 55
  },
  {
    id: 't-smara-blue',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي السمارة زرقاء', fr: 'Thé Smara Blue' },
    description: { ar: 'شاي السمارة زرقاء من صنف الشعرة، جودة ممتازة للمذاق الصحراوي الأصيل.', fr: 'Thé Smara Blue de catégorie Shaira, qualité premium pour un goût saharien authentique.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjV1tL20lw05oZedVY1sauhMJ2Pa_vw4ht58GdGkrfP4UcE1wjTj7pauop4uILnDB0LgGZh8XsFMIGqC6jd9syc9ZZp3VtpXK82Ng0h4G_VIxCPUmkiQe5eXgfb46WhlwbBii-UoZUm1lD9GGZ2GJmLLANZq5ORr9f0fEwfvwwQ-N-E57H2wleSTjLto3U',
    inStock: true,
    pricesByWeight: { '100g': 0, '200g': 12, '500g': 30, '1kg': 60, '2kg': 95, '3kg': 0 },
    wholesalePricePerKg: 45
  },
  {
    id: 't-wad-daraa',
    category: 'Tea',
    teaSubcategoryId: 'ts-shaira',
    name: { ar: 'شاي واد درعة', fr: 'Thé Wad Daraa' },
    description: { ar: 'شاي واد درعة الأصيل من فئة شاي الشعرة، نكهة صحراوية تقليدية.', fr: 'Thé Wad Daraa authentique, catégorie Shaira, saveur saharienne traditionnelle.' },
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiaVnKD9TVhTVCLn0PSskEyKVFVEbQDYWjcHnSyT3jM9_Wx5H1pEmzEOCIQ1xSAWTIDE77i3lixDsU7Q-iynBdRnIorickXa_ZH_tvWIM6v0wE5VZC6q6dYDf8Qrrn3sHDr0AEgBn_rZ5YQtjoQOxgt5xKBfUQ-HfkHd4cLm7iBI6JFgh7GQjpuUoj29fU',
    inStock: true,
    pricesByWeight: { '100g': 5, '200g': 12, '500g': 25, '1kg': 45, '2kg': 75, '3kg': 0 },
    wholesalePricePerKg: 35
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
  },
  {
    id: 'p1',
    category: 'Perfumes',
    gender: 'Men',
    brandId: 'b1',
    name: { ar: 'عطر مسك الخليج', fr: 'Parfum Musk Al Khaleej' },
    description: { ar: 'رائحة المسك الأبيض الصافي بلمسة خليجية.', fr: 'Une fragrance de musc blanc pur with an touch of the Gulf.' },
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    inStock: true,
    price: 450,
    wholesalePrice: 380
  },
  {
    id: 'bkh1',
    category: 'Bakhoor',
    bakhoorSubcategoryId: 'bk2',
    name: { ar: 'بخور عود كمبودي فاخر', fr: 'Bakhoor Oudh Cambodi Premium' },
    description: { ar: 'بخور فاخر للمناسبات والمجالس العربية.', fr: 'Bakhoor luxueux pour les grandes occasions et les salons arabes.' },
    image: 'https://images.unsplash.com/photo-1588600032749-15796078693c?q=80&w=800&auto=format&fit=crop',
    inStock: true,
    price: 250,
    wholesalePrice: 200
  },
  {
    id: 'h-kit1',
    category: 'Household',
    householdSubcategoryId: 'h1',
    name: { ar: 'طقم شاي مغربي ملكي', fr: 'Service à Thé Royal' },
    description: { ar: 'طقم فاخر يضم براد وصينية وكؤوس مزخرفة.', fr: 'Set de luxe comprenant théière, plateau et verres décorés.' },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBk1m6jCQh4vR-NRORhydgrr5N8MpJzX5A5zcCIJfoIJIL6kGq3os-Ed2my4B0FNP8YnzSaZghY-cl_bsJrcg56uujzjLQocA8GP5o_AETk7_Z75NQsL-6c6vUa6BFdkzVEpz8cv1wHHe3IE5CxkoY9M8C2Aqnyhcn0Onhh5WWEJcZfBrzgKz917l3iRM/w400-h400/Whisk_ugnhzgz4adomjdnz0szyegotimmkrtl5ctm10co.png',
    inStock: true,
    price: 1200,
    wholesalePrice: 950
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
    featuredTeaDesc: { ar: 'نحن نوفر لك تجربة فريدة مع الشاي الصحراوي الأصيل، المنقى بعناية فائقة لضمان النكهة والجودة التي تستحقها.', fr: 'Nous vous offrons une expérience unique with the thé saharien authentique, purifié with the plus grand soin.' },
    featuredTeaImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2lcpQMAcjpeBgPx53K_p2aUP29_Z7XOk0su7oM4nNSByEMfpFR_DxfIXQkNVUu-9NxP2dxobM0ZuvqGm_yur5HcRVOq0dZzoM_v9tSXXgQaw8nMTKp3yV8k604b5y7ueTW4ql5Flc4hinxj94np-3-PqfO0GAvKcAqSBGZcq2O08K0VVrg06TSaTdxW4/w400-h400/WhatsApp%20Image%202026-02-02%20at%202.17.44%20PM.jpeg',
    featuredHousTitle: { ar: 'أطقم شاي ومباخر ملكية', fr: 'Théières et encensoirs royaux' },
    featuredHousDesc: { ar: 'أكمل تجربة الشاي الصحراوي الخاص بك مع تشكيلتنا الواسعة من الأواني والأباريق المزخرفة يدوياً.', fr: 'Complétez votre expérience du thé saharien avec notre large sélection d\'ustensiles décorés à la main.' },
    featuredHousImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBk1m6jCQh4vR-NRORhydgrr5N8MpJzX5A5zcCIJfoIJIL6kGq3os-Ed2my4B0FNP8YnzSaZghY-cl_bsJrcg56uujzjLQocA8GP5o_AETk7_Z75NQsL-6c6vUa6BFdkzVEpz8cv1wHHe3IE5CxkoY9M8C2Aqnyhcn0Onhh5WWEJcZfBrzgKz917l3iRM/w400-h400/Whisk_ugnhzgz4adomjdnz0szyegotimmkrtl5ctm10co.png'
  },
  about: {
    title: { ar: 'من نحن', fr: 'À Propos de Nous' },
    body: { 
      ar: 'نحن مؤسسة بخبرة تمتد لأكثر من 33 سنة في توزيع الشاي الصحراوي، العطور الشرقية، والبخور ومشتقاته. نوفّر منتجات عالية الجودة بالجملة والتقسيط، ونخدم آلاف الزبناء داخل المغرب وخارجه.',
      fr: 'Nous sommes une institution avec plus de 33 ans d\'experience dans la distribution de thé saharien, de parfums orientaux et de bakhoor. Nous proposons des produits de haute qualité en gros et au détail, servant des milliers de clients au Maroc et à l\'étranger.'
    },
    image: 'https://images.unsplash.com/photo-1518114056416-298375936780?q=80&w=1600&auto=format&fit=crop'
  }
};
