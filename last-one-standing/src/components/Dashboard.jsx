import { Bell, Search, Sliders, Star, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button"; // Importing Button from the ui folder
import { Input } from "./ui/input";   // Importing Input from the ui folder
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"; // Importing Card components from the ui folder
import '../index.css'; // or './styles/globals.css' for Next.js

const restaurantOffers = [
  {
    id: 1,
    name: "Pizzeria Napoli",
    cuisine: "Italian",
    offer: "30% OFF on all pizzas",
    image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
  },
  {
    id: 2,
    name: "Sushi Sakura",
    cuisine: "Japanese",
    offer: "Free miso soup with any sushi roll",
    image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
  },
  {
    id: 3,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    offer: "Buy 2 tacos, get 1 free",
    image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
  },
  {
    id: 4,
    name: "Burger Bliss",
    cuisine: "American",
    offer: "20% OFF on combo meals",
    image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
  },
  {
    id: 5,
    name: "Curry House",
    cuisine: "Indian",
    offer: "Free naan with any curry order",
    image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
  },
  {
    id: 6,
    name: "Noodle Paradise",
    cuisine: "Chinese",
    offer: "15% OFF on all noodle dishes",
    image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
  }
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-purple-50">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">FoodieFinds</h1>
        <nav>
          <Button variant="ghost" className="w-full justify-start text-white mb-2">
            <MapPin className="mr-2 h-4 w-4" /> Nearby Offers
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white mb-2">
            <Star className="mr-2 h-4 w-4" /> Favorites
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white mb-2">
            <Clock className="mr-2 h-4 w-4" /> Order History
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-white rounded-lg px-3 py-2 w-1/2">
            <Search className="text-purple-500 mr-2" />
            <Input type="text" placeholder="Search restaurants or cuisines" className="border-0 focus:ring-0" />
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-purple-500 mr-2">
              <Bell />
            </Button>
            <Button variant="ghost" size="icon" className="text-purple-500">
              <Sliders />
            </Button>
          </div>
        </header>

        {/* Restaurant Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantOffers.map((restaurant) => (
            <Card key={restaurant.id} className="bg-white">
              <CardHeader className="p-0">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-bold mb-2">{restaurant.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500 mb-2">{restaurant.cuisine}</CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 font-semibold">{restaurant.offer}</span>
                  <Button className="bg-purple-600 hover:bg-purple-700">View Offer</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}