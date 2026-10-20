export const categories = [
  { name: 'Burgers', icon: '🍔', image: 'photo-1568901346375-23c9450c58cd' },
  { name: 'Pizza', icon: '🍕', image: 'photo-1574071318508-1cdbab80d002' },
  { name: 'Pasta', icon: '🍝', image: 'photo-1473093295043-cdd812d0e601' },
  { name: 'Healthy Meals', icon: '🥗', image: 'photo-1512621776951-a57141f2eefd' },
  { name: 'Desserts', icon: '🍰', image: 'photo-1551024506-0bccd828d307' },
  { name: 'Drinks', icon: '🥤', image: 'photo-1505252585461-04db1eb84625' },
];
export const img = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
export const menuItems = [
  { id: 1, name: 'Classic Beef Burger', category: 'Burgers', description: 'Juicy beef, aged cheddar, crisp lettuce & our signature sauce.', price: 12.90, rating: 4.9, image: 'photo-1568901346375-23c9450c58cd', tag: 'Bestseller' },
  { id: 2, name: 'Margherita Pizza', category: 'Pizza', description: 'San Marzano tomato, creamy mozzarella & fresh basil.', price: 15.50, rating: 4.8, image: 'photo-1574071318508-1cdbab80d002', tag: 'Popular' },
  { id: 3, name: 'Creamy Alfredo Pasta', category: 'Pasta', description: 'Silky parmesan cream, tender pasta & fresh herbs.', price: 14.90, rating: 4.9, image: 'photo-1473093295043-cdd812d0e601' },
  { id: 4, name: 'Grilled Chicken Salad', category: 'Healthy Meals', description: 'Flame-grilled chicken, crunchy greens & zesty dressing.', price: 13.50, rating: 4.7, image: 'photo-1512621776951-a57141f2eefd', tag: 'Fresh pick' },
  { id: 5, name: 'Spicy Chicken Wings', category: 'Burgers', description: 'Crispy wings tossed in our bold and tangy house glaze.', price: 11.90, rating: 4.8, image: 'photo-1527477396000-e27163b481c2' },
  { id: 6, name: 'Chocolate Lava Cake', category: 'Desserts', description: 'Rich chocolate cake with a warm, velvety center.', price: 8.50, rating: 4.9, image: 'photo-1606313564200-e75d5e30476c', tag: 'Sweet favorite' },
  { id: 7, name: 'Fresh Fruit Smoothie', category: 'Drinks', description: 'Blended seasonal fruits for a bright, refreshing sip.', price: 6.90, rating: 4.8, image: 'photo-1505252585461-04db1eb84625' },
  { id: 8, name: 'BBQ Chicken Pizza', category: 'Pizza', description: 'Smoky BBQ chicken, melted cheese & red onion.', price: 17.50, rating: 4.9, image: 'photo-1513104890138-7c749659a591', tag: 'Chef’s pick' },
  { id: 9, name: 'Garden Harvest Bowl', category: 'Healthy Meals', description: 'Colorful vegetables, wholesome grains & citrus dressing.', price: 13.90, rating: 4.7, image: 'photo-1512621776951-a57141f2eefd' },
];
export const galleryImages = [
  { image: 'photo-1546069901-ba9599a7e63c', title: 'Fresh starts here' },
  { image: 'photo-1513104890138-7c749659a591', title: 'Made for sharing' },
  { image: 'photo-1568901346375-23c9450c58cd', title: 'The perfect bite' },
  { image: 'photo-1473093295043-cdd812d0e601', title: 'Comfort in every forkful' },
  { image: 'photo-1551024506-0bccd828d307', title: 'A little something sweet' },
  { image: 'photo-1505252585461-04db1eb84625', title: 'Sip something good' },
];
