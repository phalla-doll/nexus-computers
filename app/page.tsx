import Image from 'next/image';
import { ChevronDown, MoreHorizontal, Instagram, Twitter, Youtube, Ghost } from 'lucide-react';

const products = [
  { id: 1, name: 'NEXUS TITAN X', desc: 'LIQUID COOLED', price: '$3,200', image: 'https://picsum.photos/seed/pc1/600/400' },
  { id: 2, name: 'AURA STUDIO PRO', desc: 'CREATOR EDITION', price: '$2,400', image: 'https://picsum.photos/seed/laptop1/600/400' },
  { id: 3, name: 'QUANTUM BLADE 15', desc: 'ULTRALIGHT', price: '$1,900', image: 'https://picsum.photos/seed/laptop2/600/400' },
  { id: 4, name: 'NEXUS WORKSTATION Z', desc: 'DUAL CPU', price: '$4,500', image: 'https://picsum.photos/seed/pc2/600/400' },
  { id: 5, name: 'ECHO LITE', desc: 'EVERYDAY CARRY', price: '$950', image: 'https://picsum.photos/seed/laptop3/600/400' },
  { id: 6, name: 'NEXUS OMEGA', desc: 'EXTREME EDITION', price: '$5,100', image: 'https://picsum.photos/seed/pc3/600/400' },
  { id: 7, name: 'STEALTH PRO 17', desc: 'DESKTOP REPLACEMENT', price: '$2,800', image: 'https://picsum.photos/seed/laptop4/600/400' },
  { id: 8, name: 'NEXUS MINI', desc: 'COMPACT POWER', price: '$1,200', image: 'https://picsum.photos/seed/pc4/600/400' },
  { id: 9, name: 'AURA CREATOR', desc: 'STUDIO READY', price: '$3,500', image: 'https://picsum.photos/seed/pc5/600/400' },
  { id: 10, name: 'QUANTUM AIR', desc: 'FANLESS DESIGN', price: '$1,100', image: 'https://picsum.photos/seed/laptop5/600/400' },
  { id: 11, name: 'NEXUS SERVER RACK', desc: 'ENTERPRISE', price: '$8,900', image: 'https://picsum.photos/seed/server1/600/400' },
  { id: 12, name: 'ECHO STUDIO', desc: 'ALL IN ONE', price: '$1,600', image: 'https://picsum.photos/seed/pc6/600/400' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-xl font-space font-bold tracking-[0.2em]">NEXUS</div>
        <div className="text-[10px] tracking-[0.2em] text-gray-400 font-medium hidden sm:block">TYPE TO SEARCH</div>
        <div>
          <MoreHorizontal className="w-6 h-6" />
        </div>
      </header>

      {/* Hero */}
      <section className="py-32 md:py-48 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-space font-bold tracking-[0.1em] text-center px-4">
          WORKSTATIONS
        </h1>
      </section>

      {/* Grid Container */}
      <div className="flex-grow bg-gray-200 border-b border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
          
          {/* Filters Row */}
          <div className="bg-white p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group">
            <span className="text-[10px] font-bold tracking-[0.2em]">CATEGORY</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <div className="bg-white p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group">
            <span className="text-[10px] font-bold tracking-[0.2em]">BRAND</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <div className="bg-white p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group">
            <span className="text-[10px] font-bold tracking-[0.2em]">PROCESSOR</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <div className="bg-white p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group">
            <span className="text-[10px] font-bold tracking-[0.2em]">PRICE</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
          </div>

          {/* Products */}
          {products.map((product) => (
            <div key={product.id} className="bg-white group flex flex-col relative aspect-square p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex-grow flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex justify-between items-end mt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">{product.name}</span>
                  <span className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">{product.desc}</span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.1em]">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] mb-8">SIGN UP FOR NEWSLETTER</h3>
            <div className="border-b border-white/20 pb-2 w-full max-w-xs flex items-center">
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="bg-transparent border-none outline-none text-[10px] tracking-[0.2em] w-full placeholder:text-gray-600"
              />
            </div>
          </div>
          <div className="flex gap-8 mt-16">
            <Instagram className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Youtube className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Ghost className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[10px] tracking-[0.2em] text-gray-500">
          <a href="#" className="hover:text-white transition-colors w-fit">ABOUT</a>
          <a href="#" className="hover:text-white transition-colors w-fit">AUTHENTICITY</a>
          <a href="#" className="hover:text-white transition-colors w-fit">GUARANTEE</a>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4 text-[10px] tracking-[0.2em] text-gray-500">
            <a href="#" className="hover:text-white transition-colors w-fit">CAREERS</a>
            <a href="#" className="hover:text-white transition-colors w-fit">SUPPORT</a>
            <a href="#" className="hover:text-white transition-colors w-fit">PRIVACY TERMS</a>
          </div>
          <div className="text-[10px] tracking-[0.2em] text-gray-600 mt-16 md:mt-0">
            SITE BY NEXUS
          </div>
        </div>
      </footer>
    </div>
  );
}
