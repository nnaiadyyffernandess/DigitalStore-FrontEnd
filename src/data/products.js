export const products = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  image: '/produc-image-1.jpeg',
  name: 'K-Swiss V8 - Masculino',
  price: 200,
  ...(i < 2 ? { priceDiscount: 100, discount: 30 } : {}),
}))