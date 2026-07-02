import { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
  {
    id: "pan-seared-ribeye",
    title: "Pan-Seared Ribeye Steak",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    shortDescription:
      "USDA Prime ribeye basted with foaming butter, garlic cloves, fresh rosemary, and thyme. Cooked to a perfect medium-rare.",
    ingredients: [
      "2 prime ribeye steaks (approx. 14oz each)",
      "4 tbsp unsalted butter",
      "4 cloves of garlic, crushed",
      "3 sprigs of fresh rosemary",
      "4 sprigs of fresh thyme",
      "Coarse sea salt and cracked black pepper",
      "2 tbsp high-smoke point oil (e.g., avocado oil)",
    ],
  },
  {
    id: "truffle-mushroom-tagliatelle",
    title: "Truffle Mushroom Tagliatelle",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85",
    shortDescription:
      "Handcrafted egg pasta tossed in a rich, velvety wild mushroom ragù and finished with fresh black truffle oil.",
    ingredients: [
      "12oz fresh tagliatelle pasta",
      "8oz mixed wild mushrooms (chanterelle, shiitake, cremini)",
      "2 tbsp white truffle oil",
      "1/2 cup Parmigiano-Reggiano, freshly grated",
      "2 shallots, finely minced",
      "3 cloves garlic, minced",
      "1/2 cup dry white wine",
      "1/2 cup heavy cream",
      "Fresh flat-leaf parsley",
    ],
  },
  {
    id: "crispy-skin-miso-salmon",
    title: "Crispy Skin Miso Salmon",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85",
    shortDescription:
      "Pan-roasted Atlantic salmon glazed in a sweet-savory white miso marinade, served with charred baby bok choy.",
    ingredients: [
      "4 Atlantic salmon fillets (skin-on)",
      "3 tbsp white miso paste",
      "2 tbsp mirin",
      "2 tbsp sake",
      "1 tbsp organic honey",
      "1 tbsp grated fresh ginger",
      "2 bunches baby bok choy",
      "Toasted sesame seeds and green onions for garnish",
    ],
  },
  {
    id: "artisanal-birria-tacos",
    title: "Artisanal Birria Tacos",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85",
    shortDescription:
      "Slow-braised beef brisket and chuck roast folded into corn tortillas with melted Chihuahua cheese, served with rich consommé dip.",
    ingredients: [
      "3 lbs beef chuck roast and brisket",
      "4 dried guajillo chilies, deseeded",
      "2 dried ancho chilies, deseeded",
      "12 corn tortillas",
      "2 cups Chihuahua or Monterey Jack cheese, grated",
      "1 medium white onion, finely diced",
      "1/2 cup fresh cilantro, chopped",
      "Consommé broth (from braising)",
      "Lime wedges",
    ],
  },
  {
    id: "molten-chocolate-cake",
    title: "Decadent Molten Lava Cake",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85",
    shortDescription:
      "Rich dark chocolate cake with a warm, liquid center, dusted with powdered sugar and served with fresh raspberries.",
    ingredients: [
      "4oz high-quality bittersweet chocolate (70% cacao)",
      "1/2 cup unsalted butter",
      "2 whole large eggs + 2 egg yolks",
      "1/4 cup organic cane sugar",
      "2 tbsp all-purpose flour",
      "1 tsp pure vanilla extract",
      "Pinch of fine sea salt",
      "Powdered sugar and fresh raspberries for serving",
    ],
  },
];
