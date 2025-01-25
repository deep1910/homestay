import React, { useState } from 'react';
import { Calendar, MapPin, Utensils, Phone, Mail, Home, Trees as Tree, Heart, Sun, Cloud, Leaf } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedRoom, setSelectedRoom] = useState('');

  const rooms = [
    {
      type: 'Golden Room',
      price: 'Rs 3500 /night   AC',
      description: 'Luxurious suite with sea view',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'Silver Suite',
      price: '₹2800/night   AC',
      description: 'Elegant room with garden view',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'Twin Room 1',
      price: '₹1600/night',
      description: 'Comfortable twin beds.',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'Twin Room 2',
      price: '₹1600/night',
      description: 'Cozy twin room with balcony',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const meals = [
    {
      name: 'Seafood Thali',
      price: '₹450',
      description: 'Fresh catch of the day with traditional sides',
      image: './surmai.jpeg'
    },
    {
      name: 'Chicken Thali',
      price: '₹380',
      description: 'Flavorful chicken curry with accompaniments',
      image: './chicken.jpeg'
    },
    {
      name: 'Crab Thali',
      price: '₹450',
      description: 'Fresh catch of the day with traditional sides',
      image: './crab.jpeg'
    },
  ];

  const natureFeatures = [
    {
      icon: <Tree className="w-12 h-12 text-green-600" />,
      title: 'Lush Gardens',
      description: 'Surrounded by beautiful tropical gardens with native plants'
    },
    {
      icon: <Sun className="w-12 h-12 text-yellow-500" />,
      title: 'Perfect Climate',
      description: 'Enjoy pleasant weather throughout the year'
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Fresh Air',
      description: 'Clean, unpolluted air from the surrounding nature'
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: 'Organic Farm',
      description: 'Our own vegetable garden providing fresh produce'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-screen">
  <div className="absolute inset-0" style={{ backgroundImage: 'url("./home1.jpeg")', backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>
    <div className="absolute inset-0 bg-black opacity-40"></div>
  </div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
    <img 
      src="./plate.png"
      alt="Shubhagi Care Homestay"
      className="w-64 mb-8 rounded-lg shadow-lg"
    />
    <h1 className="text-5xl font-bold mb-4">Shubhagi Care Homestay</h1>
    <p className="text-xl mb-8">Your Home Away From Home</p>
    {/* <div className="flex items-center space-x-4"> */}
      {/* <MapPin className="w-6 h-6" /> */}
      {/* <span>123 Coastal Road, Beach City, India</span> */}
    {/* </div> */}
  </div>
</header>
      {/* Rooms Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="rooms">
        <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div key={room.type} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={room.image} alt={room.type} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.type}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <p className="text-2xl font-bold text-indigo-600">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-indigo-50 px-4" id="booking">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Book Your Stay</h2>
          <form onSubmit={handleBooking} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Check-in Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-2 border rounded"
                  minDate={new Date()}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Check-out Date</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="w-full p-2 border rounded"
                  minDate={startDate || new Date()}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Select Room</label>
                <select 
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select a room</option>
                  {rooms.map(room => (
                    <option key={room.type} value={room.type}>{room.type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Number of Guests</label>
                <input type="number" min="1" max="4" className="w-full p-2 border rounded" />
              </div>
            </div>
            <button 
              type="submit"
              className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Request Booking
            </button>
          </form>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="dining">
        <h2 className="text-3xl font-bold text-center mb-12">Dining</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {meals.map((meal) => (
            <div key={meal.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={meal.image} alt={meal.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                <p className="text-gray-600 mb-4">{meal.description}</p>
                <p className="text-2xl font-bold text-indigo-600">{meal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-indigo-50 px-4" id="founders">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Founders</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-indigo-500 shadow-lg">
                  <img 
                    src="./pappu.png" 
                    alt="Founder 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Omkar Shirwadkar</h3>
                <p className="text-gray-600">Managing Director</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-indigo-500 shadow-lg">
                  <img 
                    src="./shu.png" 
                    alt="Founder 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Shubhagi Keer</h3>
                <p className="text-gray-600">Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-indigo-500 shadow-lg">
                  <img 
                    src="./priya.png" 
                    alt="Founder 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Priyanka Mayekar</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <Heart className="w-16 h-16 text-red-500 mb-6 mx-auto" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with love and care by the Shubhagi family, our homestay has been welcoming guests for over two decades. 
                What started as a dream to share our beautiful piece of paradise with travelers has grown into a cherished 
                destination for those seeking authentic experiences and warm hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our family's commitment to personalized service and attention to detail ensures that every guest feels like 
                part of our extended family. We take pride in sharing our local culture, cuisine, and traditions with visitors 
                from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nature Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="nature">
        <h2 className="text-3xl font-bold text-center mb-12">Nature Around Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {natureFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-600">
          <p className="max-w-3xl mx-auto">
            Immerse yourself in the natural beauty that surrounds our homestay. From our carefully maintained gardens 
            to the fresh mountain air, every aspect of our environment has been preserved to offer you a peaceful and 
            rejuvenating stay.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("./nameplate.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +91 1234567890</p>
                <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> contact@shubhagicare.com</p>
                {/* <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> 123 Coastal Road, Beach City</p> */}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#rooms" className="hover:text-indigo-400">Rooms</a></li>
                <li><a href="#booking" className="hover:text-indigo-400">Book Now</a></li>
                <li><a href="#dining" className="hover:text-indigo-400">Dining</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons/links here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Shubhagi Care Homestay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;