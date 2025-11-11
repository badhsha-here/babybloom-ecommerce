import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private localStorageKey = 'products';
  Products = [
    {
      id: 47,
      name: 'Baby Body Lotion',
      description: 'Lightweight lotion for all-day hydration.',
      price: 349,
      image:
        'https://i.pinimg.com/736x/ae/cd/d4/aecdd451d8bd6cc0c6dae78b6eca14be.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Formulated with gentle, hypoallergenic ingredients to prevent dryness and irritation on sensitive baby skin. Ideal for daily use after bath time to lock in moisture.',
    },
    {
      id: 16,
      name: 'Leather Baby Moccasins',
      description: 'Genuine soft leather moccasins. ⠀  ⠀ ⠀  ⠀',
      price: 499,
      image: '/assets/images/16.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Crafted from premium leather for durability and comfort, these moccasins provide a flexible fit that supports natural foot development in infants.',
    },
    {
      id: 9,
      name: 'DIY Fabric Doll Kit',
      description: 'Kids can stitch and decorate their own doll.',
      price: 399,
      image: '/assets/images/9.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Includes all materials needed for a fun crafting experience, promoting creativity and fine motor skills in children while creating a personalized toy.',
    },
    {
      id: 52,
      name: 'Baby Bath Oil',
      description: 'Adds moisture during bath time.⠀  ⠀ ⠀  ⠀ ',
      price: 299,
      image:
        'https://i.pinimg.com/1200x/66/d1/ff/66d1ff94019e6a3c57dbe62469f35cc0.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        "Enriched with nourishing oils to hydrate and protect baby's skin during baths, leaving it soft without any greasy residue.",
    },
    {
      id: 66,
      name: 'White Lace Bodycon',
      description: 'Lace detailed bodycon for special occasions.',
      price: 1799,
      image:
        'https://i.pinimg.com/736x/72/84/da/7284da0bc052de9399d44bbbb9f643c3.jpg',
      category: 'Bodycon',
      extraDescription:
        'Features intricate lace overlays for an elegant touch, perfect for weddings or formal events with a figure-hugging silhouette.',
    },
    {
      id: 23,
      name: 'Ribbon Baby Flats',
      description: 'Soft flats with ribbon decoration. ⠀  ⠀ ⠀  ⠀',
      price: 389,
      image: '/assets/images/23.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Adorned with delicate ribbons for a charming look, these flats offer a secure fit and soft cushioning for little feet learning to walk.',
    },
    {
      id: 74,
      name: 'Yellow Summer Bodycon',
      description: 'Bright yellow bodycon perfect for summer.',
      price: 1099,
      image:
        'https://i.pinimg.com/1200x/d9/b1/ca/d9b1ca3bb01541afe62ed8a40cfcefe3.jpg',
      category: 'Bodycon',
      extraDescription:
        'Made from breathable fabric to keep you cool, this vibrant dress accentuates curves while providing comfort for daytime outings.',
    },
    {
      id: 75,
      name: 'Purple Velvet Bodycon',
      description: 'Luxurious purple velvet fabric. ⠀ ⠀ ⠀ ⠀ ⠀ ',
      price: 1599,
      image:
        'https://i.pinimg.com/1200x/06/ba/f5/06baf56d0bc37c9d4f4b5ac9a502e955.jpg',
      category: 'Bodycon',
      extraDescription:
        'Offers a plush texture and rich color, ideal for evening wear with a stretchy fit that ensures both style and ease of movement.',
    },
    {
      id: 50,
      name: 'Baby Massage Oil',
      description: 'For gentle massage and soft skin.⠀  ⠀ ⠀  ⠀ ',
      price: 249,
      image:
        'https://i.pinimg.com/1200x/3c/e0/8e/3ce08e42651711765bfca7e34c07a81b.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Blended with calming essential oils to promote relaxation during massages, helping to bond with your baby while nourishing their skin.',
    },
    {
      id: 65,
      name: 'Blue Satin Bodycon',
      description: 'Shiny satin finish with sleek fit.⠀ ⠀ ⠀ ⠀ ',
      price: 1599,
      image:
        'https://i.pinimg.com/1200x/6d/e3/c1/6de3c1887bbf7c44bb54adbaf13932f1.jpg',
      category: 'Bodycon',
      extraDescription:
        'Provides a glossy sheen for a glamorous appearance, suitable for cocktail parties with a form-fitting design that flatters the figure.',
    },
    {
      id: 25,
      name: 'Soft Leather Sandals',
      description: 'Open-toe leather sandals for infants.',
      price: 459,
      image: '/assets/images/25.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Designed with adjustable straps for a custom fit, these sandals allow airflow to keep feet cool and comfortable in warmer weather.',
    },
    {
      id: 44,
      name: 'Baby Soft Lip Balm',
      description: 'Protects lips from dryness and chapping.',
      price: 199,
      image:
        'https://i.pinimg.com/1200x/0b/c1/1e/0bc11e4c1c64be7ae6869ad7de5afa66.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Infused with natural butters for long-lasting hydration, safe for daily application to maintain soft, healthy lips on babies.',
    },
    {
      id: 64,
      name: 'Red Velvet Bodycon',
      description: 'Soft velvet red bodycon for date nights.',
      price: 1499,
      image:
        'https://i.pinimg.com/736x/41/23/32/412332d667596835331ee9b99d836acf.jpg',
      category: 'Bodycon',
      extraDescription:
        'Delivers a romantic vibe with its velvety texture, offering stretch for comfort during intimate evenings or special occasions.',
    },
    {
      id: 57,
      name: 'Baby Softening Oil',
      description: 'Keeps skin soft and smooth.⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 249,
      image:
        'https://i.pinimg.com/1200x/bb/39/92/bb3992b93b81990444e9068feee8eb5d.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        "Quickly absorbs into the skin to provide deep hydration, recommended for use after baths to enhance skin's natural softness.",
    },
    {
      id: 41,
      name: 'Baby Hair Oil',
      description: 'Strengthens hair and nourishes scalp.',
      price: 329,
      image:
        'https://i.pinimg.com/1200x/3b/be/1a/3bbe1a0c220ac63654f00aec3c87cd1c.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Contains vitamins to promote healthy hair growth, gentle enough for daily scalp massages to soothe and condition.',
    },
    {
      id: 24,
      name: 'Mini Trainers',
      description: 'Mini trainers for active babies. ⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 499,
      image: '/assets/images/24.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Built with lightweight materials and non-slip soles, perfect for encouraging first steps and playtime activities.',
    },
    {
      id: 72,
      name: 'Brown Ribbed Bodycon',
      description: 'Ribbed material bodycon for comfort.',
      price: 899,
      image:
        'https://i.pinimg.com/1200x/b8/9c/01/b89c01ba18abde04ead69e6d9589ac3f.jpg',
      category: 'Bodycon',
      extraDescription:
        'Offers a textured ribbed design for added interest, providing a cozy yet fitted look ideal for casual or layered outfits.',
    },
    {
      id: 73,
      name: 'Silver Metallic Bodycon',
      description: 'Shiny metallic silver bodycon look.⠀ ⠀ ⠀ ⠀ ',
      price: 1699,
      image:
        'https://i.pinimg.com/736x/12/d4/36/12d4368a637dc01944357129008f1eed.jpg',
      category: 'Bodycon',
      extraDescription:
        'Reflects light for a eye-catching effect, great for nightlife with a flexible fabric that moves with you.',
    },
    {
      id: 34,
      name: 'Moisturizing Baby Lotion',
      description: "Softens and hydrates baby's skin.⠀  ⠀ ⠀  ⠀",
      price: 349,
      image:
        'https://i.pinimg.com/736x/5d/5a/5d/5d5a5d1f8e11d1f1c9bdeea17cf57c31.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Packed with emollients to restore moisture balance, apply liberally to dry areas for immediate relief and protection.',
    },
    {
      id: 63,
      name: 'Classic Black Bodycon',
      description: 'Elegant black bodycon dress for evening parties.',
      price: 1299,
      image:
        'https://i.pinimg.com/736x/bd/39/51/bd39516b5597b8a7d719761aefcc9572.jpg',
      category: 'Bodycon',
      extraDescription:
        'A timeless piece with a sophisticated cut, versatile for accessorizing and suitable for various formal gatherings.',
    },
    {
      id: 61,
      name: 'Baby Mild Shampoo',
      description: 'Tear-free formula for hair and scalp.⠀  ⠀ ⠀  ⠀ ',
      price: 399,
      image:
        'https://i.pinimg.com/1200x/69/10/8d/69108d8dac9d6f52d400931e5795be0f.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        "Gently cleanses without causing irritation to eyes, formulated to maintain the natural pH balance of baby's scalp.",
    },
    {
      id: 55,
      name: 'Baby Moisturizing Soap',
      description: 'Glycerin soap for sensitive skin.⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 199,
      image:
        'https://i.pinimg.com/736x/05/c3/cb/05c3cb4efb15a74e1b4e78528c563a8f.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        "Rich in glycerin to draw in moisture, this soap creates a creamy lather that's mild and non-drying for everyday bathing.",
    },
    {
      id: 76,
      name: 'Orange Cut-Out Bodycon',
      description: 'Trendy cut-out styled orange bodycon.',
      price: 1399,
      image:
        'https://i.pinimg.com/1200x/3a/dd/8b/3add8bdcc8b8cbecd2702390383ec9f5.jpg',
      category: 'Bodycon',
      extraDescription:
        "Incorporates stylish cut-outs for a modern edge, in a bold orange hue that's perfect for making a fashion statement.",
    },
    {
      id: 77,
      name: 'Grey High-Neck Bodycon',
      description: 'Classy high-neck grey bodycon dress.',
      price: 1199,
      image:
        'https://i.pinimg.com/1200x/4f/ed/b1/4fedb1d8e534759736ec3a295e82463e.jpg',
      category: 'Bodycon',
      extraDescription:
        'Features a high neckline for refined elegance, made from soft fabric for all-day comfort in professional or casual settings.',
    },
    {
      id: 46,
      name: 'Baby Foot Cream',
      description: 'Softens rough patches on feet.⠀  ⠀ ⠀  ⠀',
      price: 299,
      image:
        'https://i.pinimg.com/1200x/df/9e/41/df9e416bf8110b45ee9d4dd7a32b0834.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Targeted formula to heal and soften calluses, apply before bedtime for overnight absorption and smoother feet.',
    },
    {
      id: 78,
      name: 'Champagne Satin Bodycon',
      description: 'Elegant champagne color satin finish.',
      price: 1899,
      image:
        'https://i.pinimg.com/736x/22/8c/1c/228c1cf99ac79171731cb917eec665fe.jpg',
      category: 'Bodycon',
      extraDescription:
        'Exudes luxury with its smooth satin material, ideal for upscale events where a subtle shimmer enhances your look.',
    },
    {
      id: 79,
      name: 'Teal Long Sleeve Bodycon',
      description: 'Teal colored long-sleeve bodycon.⠀ ⠀ ⠀ ⠀ ',
      price: 1499,
      image:
        'https://i.pinimg.com/736x/20/57/23/205723299c934abd1b8309a309c3097e.jpg',
      category: 'Bodycon',
      extraDescription:
        'Provides full arm coverage for cooler weather, in a striking teal shade that pairs well with accessories for versatile styling.',
    },
    {
      id: 28,
      name: 'Padded Booties',
      description: 'Extra soft padded booties for comfort.',
      price: 399,
      image: '/assets/images/28.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Extra padding ensures warmth and cushioning, making them suitable for indoor wear or as cozy additions to outfits.',
    },
    {
      id: 26,
      name: 'Knitted Slip-On Sneakers',
      description: 'Easy to wear knitted slip-ons. ⠀  ⠀⠀  ⠀',
      price: 369,
      image: '/assets/images/26.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Knitted construction offers stretch and breathability, simple slip-on design for quick dressing and undressing.',
    },
    {
      id: 67,
      name: 'Green Midi Bodycon',
      description: 'Stylish green midi length bodycon.⠀ ⠀ ⠀ ⠀ ',
      price: 1399,
      image:
        'https://i.pinimg.com/474x/26/bf/e0/26bfe01630f1c5854fde5a76df355042.jpg',
      category: 'Bodycon',
      extraDescription:
        "Midi length provides modest coverage, in a fresh green color that's great for daytime events or office wear.",
    },
    {
      id: 68,
      name: 'Beige Knitted Bodycon',
      description: 'Knitted fabric bodycon for casual wear.',
      price: 999,
      image:
        'https://i.pinimg.com/1200x/f4/54/dd/f454ddc147824b7f9a34a109340f9278.jpg',
      category: 'Bodycon',
      extraDescription:
        'Cozy knitted material for a relaxed fit, neutral beige tone makes it easy to layer or dress up for everyday looks.',
    },
    {
      id: 5,
      name: 'Fabric Princess Doll',
      description: 'Cute princess doll with long fabric gown.',
      price: 399,
      image: '/assets/images/5.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Detailed with a flowing gown and accessories, encourages imaginative play and storytelling for young children.',
    },
    {
      id: 69,
      name: 'Floral Print Bodycon',
      description: 'Colorful floral print bodycon dress.⠀ ⠀ ⠀ ⠀ ⠀ ',
      price: 1199,
      image:
        'https://i.pinimg.com/736x/87/5b/1e/875b1e647c2b95d667301d9d3ef9adc5.jpg',
      category: 'Bodycon',
      extraDescription:
        'Vibrant florals add a playful pattern, stretchy fabric ensures comfort while highlighting your silhouette for spring outings.',
    },
    {
      id: 14,
      name: 'Knitted Baby Sneakers',
      description: 'Handmade knitted sneakers for babies.',
      price: 399,
      image: '/assets/images/14.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Hand-knitted for a unique touch, soft yarn provides warmth and flexibility for growing feet.',
    },
    {
      id: 13,
      name: 'Soft Sole Booties',
      description: 'Comfortable cotton booties for newborns.           ',
      price: 299,
      image: '/assets/images/13.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Made from breathable cotton with soft soles, ideal for newborns to keep feet warm without restricting movement.',
    },
    {
      id: 70,
      name: 'Pink Off-Shoulder Bodycon',
      description: 'Trendy off-shoulder design in pink.⠀ ⠀ ⠀ ⠀ ',
      price: 1499,
      image:
        'https://i.pinimg.com/736x/3c/3e/3e/3c3e3e390a1c95be7766c49f4ea15881.jpg',
      category: 'Bodycon',
      extraDescription:
        'Off-shoulder style for a flirty appeal, soft pink color enhances femininity for date nights or parties.',
    },
    {
      id: 12,
      name: 'Vintage Collector’s Fabric Doll',
      description: 'Handmade antique-style doll with stitched details.',
      price: 399,
      image: '/assets/images/12.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Inspired by vintage designs with intricate stitching, perfect for collectors or as a nostalgic gift for children.',
    },
    {
      id: 71,
      name: 'Maroon Sequin Bodycon',
      description: 'Sequin-studded bodycon for parties.',
      price: 1999,
      image:
        'https://i.pinimg.com/1200x/e1/a0/03/e1a0033eb8688e5a6ae17c251b86f2cb.jpg',
      category: 'Bodycon',
      extraDescription:
        'Embellished with sequins for sparkle, deep maroon shade makes it a standout choice for festive celebrations.',
    },
    {
      id: 36,
      name: 'Baby Powder',
      description: 'Keeps skin dry and fresh.⠀  ⠀⠀   ⠀  ⠀⠀ ⠀  ⠀',
      price: 199,
      image:
        'https://i.pinimg.com/736x/b1/9a/e2/b19ae2a292962225ba76c232d567d1c7.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Absorbs excess moisture to prevent chafing, lightly scented for a fresh feel after diaper changes or baths.',
    },
    {
      id: 27,
      name: 'Velcro High-Top Shoes',
      description: 'Stylish high-top shoes with Velcro.⠀  ⠀ ',
      price: 529,
      image: '/assets/images/27.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'High-top design offers ankle support, Velcro straps make them easy to adjust and secure for active toddlers.',
    },
    {
      id: 7,
      name: 'Animal Character Fabric Doll',
      description: 'Set of fabric dolls shaped like lion, elephant & giraffe',
      price: 399,
      image: '/assets/images/7.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Animal-themed set sparks interest in wildlife, soft fabric ensures safe play for educational and fun interactions.',
    },
    {
      id: 42,
      name: 'Soothing Baby Cream',
      description: 'Relieves dry and irritated skin.⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 299,
      image:
        'https://i.pinimg.com/736x/56/0d/1e/560d1e6db32811bec9b0bba904704cdf.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Calms inflammation with soothing agents, apply to affected areas for quick relief from eczema or dryness.',
    },
    {
      id: 38,
      name: 'Baby Oil',
      description: 'Softens skin and protects moisture.⠀  ⠀ ⠀  ⠀ ',
      price: 249,
      image:
        'https://i.pinimg.com/736x/49/c4/28/49c428434a18ccdb9b17f61f2fcf9535.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Multi-purpose oil for massages or cradle cap removal, locks in hydration to keep skin supple and protected.',
    },
    {
      id: 48,
      name: 'Baby Sunscreen SPF 50',
      description: 'Protects sensitive skin from UV rays.⠀  ⠀ ⠀  ⠀',
      price: 399,
      image:
        'https://i.pinimg.com/1200x/34/03/6c/34036c78c422eabd8f08dc6710b35506.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Broad-spectrum protection with mineral filters, water-resistant and gentle for outdoor play without stinging eyes.',
    },
    {
      id: 15,
      name: 'Velcro Baby Shoes',
      description: 'Easy to wear Velcro closure shoes.⠀  ⠀',
      price: 349,
      image: '/assets/images/15.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Convenient Velcro for quick on/off, durable construction with cushioned insoles for all-day comfort.',
    },
    {
      id: 51,
      name: 'Baby Cologne Spray',
      description: 'Mild fragrance suitable for infants.⠀  ⠀ ⠀  ⠀ ',
      price: 329,
      image:
        'https://i.pinimg.com/1200x/57/70/20/577020bb6c2c8dc36736871dc8b43f00.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Light, alcohol-free scent for a fresh aroma, spray on clothes or hair for a subtle, non-overwhelming fragrance.',
    },
    {
      id: 33,
      name: 'Gentle Baby Shampoo',
      description: 'Tear-free formula for delicate hair. ⠀  ⠀ ⠀  ⠀',
      price: 299,
      image:
        'https://i.pinimg.com/1200x/00/5f/f5/005ff5c5e666075a83f99fefeb4c1996.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Cleanses gently without stripping natural oils, suitable for frequent use to keep hair soft and manageable.',
    },
    {
      id: 1,
      name: 'Handmade Cotton Bunny Doll',
      description: 'Soft cotton bunny with cute dress, safe for toddlers.',
      price: 399,
      image: '/assets/images/1.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Handcrafted with child-safe materials, promotes cuddling and imaginative play as a comforting companion.',
    },
    {
      id: 31,
      name: 'Soft Sole Loafers',
      description: 'Flexible soft sole loafers for babies.⠀  ⠀ ⠀  ⠀ ',
      price: 419,
      image: '/assets/images/31.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Soft soles mimic barefoot walking, stylish loafer design adds a touch of sophistication to baby outfits.',
    },
    {
      id: 43,
      name: 'Baby Gentle Face Cream',
      description: 'Moisturizes delicate facial skin.⠀  ⠀ ⠀  ⠀⠀  ⠀',
      price: 349,
      image:
        'https://i.pinimg.com/736x/4b/8c/89/4b8c89f7d7d7a21dccad86d62deab8dc.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Lightweight and non-greasy, protects against environmental stressors while keeping facial skin hydrated.',
    },
    {
      id: 18,
      name: 'Rubber Sole Booties',
      description: 'Non-slip rubber sole booties. ⠀  ⠀ ⠀  ⠀',
      price: 369,
      image: '/assets/images/18.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Rubber soles provide traction on slippery surfaces, cozy bootie style keeps feet warm and secure.',
    },
    {
      id: 80,
      name: 'Black Mini Bodycon',
      description: 'Mini bodycon dress with chic fit.⠀ ⠀ ⠀ ⠀ ',
      price: 999,
      image:
        'https://i.pinimg.com/1200x/a0/19/f5/a019f5d9e05cc9de62cd408002dc8159.jpg',
      category: 'Bodycon',
      extraDescription:
        'Short length for a youthful vibe, classic black color makes it a wardrobe staple for casual nights out.',
    },
    {
      id: 81,
      name: 'Pink Ruched Bodycon',
      description: 'Ruched bodycon with stretch comfort.',
      price: 1299,
      image:
        'https://i.pinimg.com/1200x/e6/fc/3f/e6fc3fd12d1a1aad6d0938085e5c4f59.jpg',
      category: 'Bodycon',
      extraDescription:
        'Ruched detailing adds texture and forgiveness to the fit, soft pink for a feminine touch in comfortable stretch fabric.',
    },
    {
      id: 54,
      name: 'Baby Body Wash Gel',
      description: 'Cleanses and softens skin.⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 349,
      image:
        'https://i.pinimg.com/1200x/19/6c/48/196c4801764298dbbe38941db4e728ba.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Gel formula creates a rich lather, infused with moisturizers to clean without drying out delicate skin.',
    },
    {
      id: 49,
      name: 'Baby Talcum Powder',
      description: 'Keeps skin dry and fresh all day.⠀  ⠀ ⠀  ⠀ ',
      price: 179,
      image:
        'https://i.pinimg.com/736x/a1/68/ec/a168ecfaedcff718af67c1c7884b8e31.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Fine powder absorbs sweat and odors, apply after baths or diaper changes for lasting comfort.',
    },
    {
      id: 37,
      name: 'Diaper Rash Cream',
      description: 'Prevents and soothes diaper rash.⠀  ⠀ ⠀  ⠀ ',
      price: 299,
      image:
        'https://i.pinimg.com/1200x/f7/f7/b3/f7f7b3063da3965d332d8da54ee98aa1.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Barrier cream with zinc oxide to protect against wetness, soothes existing rashes for quick healing.',
    },
    {
      id: 17,
      name: 'Soft Canvas Slip-Ons',
      description: 'Breathable canvas shoes for babies. ⠀  ⠀ ⠀  ⠀',
      price: 279,
      image: '/assets/images/17.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Canvas material allows air circulation, slip-on ease with elastic for a snug, hassle-free fit.',
    },
    {
      id: 8,
      name: 'Personalized Name Fabric Doll',
      description: 'Custom doll with child’s name stitched on dress.',
      price: 399,
      image: '/assets/images/8.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Personalization adds a special touch, making it a cherished keepsake or birthday gift for kids.',
    },
    {
      id: 45,
      name: 'Baby Hand Cream',
      description: 'Hydrates tiny hands and keeps them soft.',
      price: 299,
      image:
        'https://i.pinimg.com/736x/99/33/38/99333859b6fdbbfc9b2ec1eb44fe649a.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Quick-absorbing formula for frequent hand washing, prevents cracking and maintains softness.',
    },
    {
      id: 82,
      name: 'Gold Shimmer Bodycon',
      description: 'Golden shimmering bodycon dress for parties.',
      price: 2199,
      image:
        'https://i.pinimg.com/1200x/d4/4c/06/d44c0657db83825aecde0dcc96aa6c78.jpg',
      category: 'Bodycon',
      extraDescription:
        'Shimmering gold fabric catches the light, perfect for holiday parties with a luxurious, form-fitting style.',
    },
    {
      id: 58,
      name: 'Baby Skin Powder',
      description: 'Absorbs moisture and soothes skin. ⠀  ⠀ ⠀  ⠀',
      price: 179,
      image:
        'https://i.pinimg.com/1200x/49/3a/e9/493ae9e96ca5ce4afd3f024a6b4fc4bf.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Cornstarch-based for natural absorption, calms irritated skin in folds and creases.',
    },
    {
      id: 35,
      name: 'Baby Body Wash',
      description: 'Mild cleansing body wash for infants.',
      price: 399,
      image:
        'https://i.pinimg.com/1200x/9a/52/4c/9a524c06342f2a90b1b22a8fd92c69d2.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        "Hypoallergenic wash that rinses cleanly, preserves skin's moisture barrier during bath time.",
    },
    {
      id: 60,
      name: 'Baby Cream for Diaper Area',
      description: 'Prevents rashes and irritation.⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 299,
      image:
        'https://i.pinimg.com/736x/b1/fc/16/b1fc163a09d48eb99da51fda3143cbe1.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Creates a protective layer against diaper friction, enriched with healing ingredients for sensitive areas.',
    },
    {
      id: 19,
      name: 'Crochet Baby Shoes',
      description: 'Handmade crochet shoes with soft sole.',
      price: 399,
      image: '/assets/images/19.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Crocheted by hand for artisanal quality, soft soles and yarn make them lightweight and adorable.',
    },
    {
      id: 32,
      name: 'Baby Ballet Flats',
      description: 'Cute ballet flats for infants.⠀  ⠀ ⠀  ⠀ ⠀  ⠀ ',
      price: 399,
      image: '/assets/images/32.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Dainty ballet style with flexible fit, perfect for special occasions or everyday dress-up.',
    },
    {
      id: 3,
      name: 'Mini Fabric Teddy Doll',
      description: 'Small teddy-style fabric doll, perfect for gifting.',
      price: 399,
      image: '/assets/images/3.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Compact size ideal for travel or small hands, teddy design offers comfort and familiarity for toddlers.',
    },
    {
      id: 29,
      name: 'Fleece Lined Shoes',
      description: 'Warm fleece lined shoes for winter.⠀  ⠀ ⠀  ⠀ ',
      price: 499,
      image: '/assets/images/29.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Fleece lining provides insulation against cold, durable outer material for outdoor winter adventures.',
    },
    {
      id: 39,
      name: 'Baby Soap Bar',
      description: 'Gentle soap for sensitive skin.⠀  ⠀ ⠀  ⠀ ',
      price: 179,
      image:
        'https://i.pinimg.com/736x/ab/f5/52/abf55262ed35ba0938b375d0d143e773.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Unscented bar soap for purity, lathers gently to cleanse without harsh chemicals.',
    },
    {
      id: 40,
      name: 'Organic Baby Wash',
      description: 'Made with natural ingredients.⠀  ⠀ ⠀  ⠀ ',
      price: 399,
      image:
        'https://i.pinimg.com/1200x/80/c4/99/80c49988879e3a9efdd956734f938a61.jpg',
      category: 'Bath & Skin Care',
      extraDescription:
        'Certified organic formula free from synthetics, ensures safe and eco-friendly bathing for babies.',
    },
    {
      id: 21,
      name: 'Soft Mary Janes',
      description: 'Flexible Mary Jane shoes for toddlers.',
      price: 399,
      image: '/assets/images/21.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Classic Mary Jane strap for secure fit, soft materials support active play and walking development.',
    },
    {
      id: 22,
      name: 'Animal Print Booties',
      description: 'Adorable animal-themed booties. ⠀  ⠀ ⠀  ⠀',
      price: 329,
      image: '/assets/images/22.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Fun animal prints delight babies, cozy booties keep feet warm with easy pull-on design.',
    },
    {
      id: 59,
      name: 'Baby Massage Cream',
      description: 'For gentle body massage and nourishment.',
      price: 329,
      image:
        'https://i.pinimg.com/1200x/cf/3f/8a/cf3f8a790ba027d0a0af64eb9369745d.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Creamy texture glides smoothly for massages, nourishes with vitamins to improve skin elasticity.',
    },
    {
      id: 20,
      name: 'Tiny Loafers',
      description: 'Cute tiny loafers for babies. ⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 459,
      image: '/assets/images/20.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Miniature loafer style for a dapper look, comfortable fit with room for toes to wiggle.',
    },
    {
      id: 62,
      name: 'Baby Soft Lotion',
      description: 'Daily lotion to keep skin hydrated.⠀  ⠀ ⠀  ⠀ ',
      price: 349,
      image:
        'https://i.pinimg.com/1200x/1e/fc/cc/1efccc307942f809c52f75a3b2d1bc0c.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Everyday essential for maintaining hydration, absorbs quickly without leaving residue.',
    },
    {
      id: 6,
      name: 'Sleepy Time Fabric Doll',
      description: 'Comes with mini fabric pillow & blanket.',
      price: 399,
      image: '/assets/images/6.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Bedtime companion with accessories, helps establish sleep routines through pretend play.',
    },
    {
      id: 4,
      name: 'Eco-Friendly  Cotton Doll',
      description: 'Made with organic cotton & natural colors.',
      price: 399,
      image: '/assets/images/4.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Sustainable materials for eco-conscious parents, safe dyes ensure no harmful chemicals for play.',
    },
    {
      id: 53,
      name: 'Baby Bubble Bath',
      description: 'Safe and gentle foaming bath for babies.',
      price: 399,
      image:
        'https://i.pinimg.com/1200x/8a/c2/a3/8ac2a3a2588f4bd803867b447c78d862.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Creates fun bubbles without tears, mild formula cleanses while being kind to skin.',
    },
    {
      id: 56,
      name: 'Baby Hair Cream',
      description: 'Softens and manages baby hair.⠀  ⠀ ⠀  ⠀ ⠀  ⠀',
      price: 299,
      image:
        'https://i.pinimg.com/1200x/a0/1d/78/a01d78e5eb9765eea34365fb7aec22e7.jpg',
      category: 'Bodycare & Cosmetics',
      extraDescription:
        'Tames flyaways and adds shine, lightweight cream suitable for styling fine baby hair.',
    },
    {
      id: 11,
      name: 'Festival Special Fabric Doll',
      description: 'Doll in festive attire (Diwali dress / Christmas theme).',
      price: 399,
      image: '/assets/images/11.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Themed outfits celebrate holidays, encourages cultural awareness and festive play.',
    },
    {
      id: 10,
      name: 'Cultural Dress Fabric Doll',
      description: 'Doll wearing traditional Indian attire (saree/kurta).',
      price: 399,
      image: '/assets/images/10.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Represents cultural heritage with authentic clothing, great for teaching traditions through play.',
    },
    {
      id: 30,
      name: 'Tiny Sneakers with Laces',
      description: 'Mini sneakers with decorative laces.⠀  ⠀ ⠀  ⠀ ',
      price: 459,
      image: '/assets/images/30.jpeg',
      category: 'Baby Shoes',
      extraDescription:
        'Decorative laces add style without hassle, sneaker design with support for early walkers.',
    },
    {
      id: 2,
      name: 'Traditional Fabric Rag Doll',
      description:
        'Classic rag doll with embroidered face and colorful outfit.',
      price: 399,
      image: '/assets/images/2.jpeg',
      category: 'Fabric Dolls',
      extraDescription:
        'Timeless rag doll design with hand-embroidered features, durable for generations of play.',
    },
  ];

  constructor() {
    this.initializeProducts();
  }

  private initializeProducts() {
    const savedProducts = localStorage.getItem(this.localStorageKey);
    if (!savedProducts) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.Products));
    } else {
      this.Products = JSON.parse(savedProducts);
    }
  }

  getProducts() {
    return this.Products;
  }

  featuredProducts(count: number) {
    return this.Products.slice(0, count);
  }

  getProductById(id: number) {
    return this.Products.find((p: any) => p.id === id);
  }
  addProduct(product: any) {
    this.Products.push(product);
    this.updateLocalstorage();
  }

  updateProduct(id: number, updatedProduct: any) {
    const index = this.Products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.Products[index] = updatedProduct;
      this.updateLocalstorage();
    }
  }

  deleteProduct(id: number) {
    this.Products = this.Products.filter((p: any) => p.id !== id);
    this.updateLocalstorage();
  }

  private updateLocalstorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.Products));
  }
}
