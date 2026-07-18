"use client";

import { motion } from "framer-motion";

const sidequestRewards = [
  {
    id: "domain-stickers",
    name: "Domain + Sticker Pack",
    description: "A domain of your choice for a year, plus a pack of stickers.",
    sidequest: "Build a merchant's storefront",
    image: "/shop/domain.png",
  },
  {
    id: "apple-dev",
    name: "Apple Developer Account",
    description: "A year of the Apple Developer Program to ship your app on the App Store.",
    sidequest: "Ship a mobile app for the Traveler",
    image: "/shop/apple-dev.png",
  },
  {
    id: "flipper-zero",
    name: "Flipper Zero",
    description: "The legendary hacking multi-tool for pentesting and hardware tinkering.",
    sidequest: "Secure the Cyberpunk City network",
    image: "/shop/flipper.png",
  },
  {
    id: "graphics-tablet",
    name: "Graphics Tablet",
    description: "A drawing tablet to sketch, paint and design your pixel art and ship even more to pixl",
    sidequest: "Design your own region",
    image: "/shop/tablet.png",
  },
  {
    id: "stickers-poster",
    name: "Sticker Pack + Poster",
    description: "PIXL stickers and a printed poster of your assets for your wall.",
    sidequest: "Draw sprites for the Item Shop",
    image: "/shop/stickers.png",
  },
  {
    id: "pcb-run",
    name: "Full PCB Manufacturing Run",
    description: "We manufacture your own PCB design and ship the boards to you.",
    sidequest: "Build a robot arm for the Factory",
    image: "/shop/pcb.png",
  },
  {
    id: "robux",
    name: "2000 Robux",
    description: "2000 Robux dropped straight into your Roblox account.",
    sidequest: "Make me a Roblox game!!",
    image: "/shop/robux.png",
  },
];

const generalItems = [
  {
    id: "hc-stickers",
    name: "Hack Club Sticker Pack",
    description: "An envelope of Hack Club and Pixl stickers",
    price: 100,
    hours: 2,
    image: "/shop/hc-stickers.png",
  },
  {
    id: "pixel-composer",
    name: "Pixel Composer License",
    description: "Node-based tool to make effects and animations for pixel art.",
    price: 100,
    hours: 2,
    image: "/shop/pixel-composer.png",
  },
  {
    id: "blahaj",
    name: "3D Printed Blahaj",
    description: "A 3D printed pixelated mini Blahaj, made by Ricky and shipped to your house",
    price: 100,
    hours: 2,
    image: "/shop/blahaj.png",
  },
  {
    id: "pixl-poster",
    name: "PIXL Poster",
    description: "A poster grant to buy nay poster you want. Everyone love posters",
    price: 200,
    hours: 4,
    image: "/shop/poster.png",
  },
  {
    id: "esp32-kit",
    name: "ESP32 Starter Kit",
    description: "ESP32 dev board with a breadboard and components to start hacking.",
    price: 150,
    hours: 3,
    image: "/shop/esp32.png",
  },
  {
    id: "pico8",
    name: "PICO-8 License",
    description: "The fantasy console. Code, draw and compose tiny games in one tool.",
    price: 150,
    hours: 3,
    image: "/shop/pico8.png",
  },
  {
    id: "api-credits",
    name: "AI Credits ($10)",
    description: "a $10 grant for AI credits for the provider of your choice.",
    price: 100,
    hours: 2,
    image: "/shop/api.png",
  },
  {
    id: "aseprite",
    name: "Aseprite License",
    description: "The pixel art editor. Animated sprites, tilesets and more.",
    price: 200,
    hours: 4,
    image: "/shop/aseprite.png",
  },
  {
    id: "indie-game",
    name: "Indie Game of Your Choice",
    description: "Hollow Knight, Celeste, Stardew... any indie game up to $30 on Steam.",
    price: 200,
    hours: 5,
    image: "/shop/indie-game.png",
  },
  {
    id: "switch-online",
    name: "Nintendo Switch Online (1 year)",
    description: "12 months of Nintendo Switch Online for your account.",
    price: 200,
    hours: 4,
    image: "/shop/switch-online.png",
  },
  {
    id: "assets-grant",
    name: "Game Assets Grant ($10)",
    description: "$10 to spend on tilesets, sprites, music and sounds for your game.",
    price: 125,
    hours: 2.5,
    image: "/shop/assets-grant.png",
  },
  {
    id: "tamagotchi-kit",
    name: "Pixl Tamagotchi DIY Kit",
    description: "Solder and code your own pocket pet, designed by mangoman.",
    price: 300,
    hours: 6,
    image: "/shop/tamagotchi.png",
  },
  {
    id: "godot-plush",
    name: "Godot Plush",
    description: "The official Godot robot plushie. Emotional support for game jams.",
    price: 350,
    hours: 7,
    image: "/shop/godot-plush.png",
  },
  {
    id: "pixl-hoodie",
    name: "PIXL Hoodie",
    description: "Limited PIXL hoodie with the logo on the chest.",
    price: 500,
    hours: 10,
    image: "/shop/hoodie.png",
  },
  {
    id: "github-pro",
    name: "GitHub Pro (1 year)",
    description: "A year of GitHub Pro for your projects.",
    price: 500,
    hours: 10,
    image: "/shop/github.png",
  },
  {
    id: "retro-handheld",
    name: "Retro Handheld (RG35XX / Miyoo Mini+)",
    description: "A retro handheld to play your builds and the classics on the go.",
    price: 600,
    hours: 12,
    image: "/shop/retro-handheld.png",
  },
  {
    id: "raspberry-pi-5",
    name: "Raspberry Pi 5",
    description: "A Raspberry Pi 5 to run your servers, emulators and experiments.",
    price: 800,
    hours: 16,
    image: "/shop/rpi.png",
  },
  {
    id: "wacom-intuos",
    name: "Wacom Intuos (Small)",
    description: "A Wacom drawing tablet, the classic for digital art.",
    price: 600,
    hours: 12,
    image: "/shop/wacom.png",
  },
  {
    id: "gamemaker",
    name: "GameMaker Pro",
    description: "GameMaker Professional license to export your games everywhere.",
    price: 1000,
    hours: 20,
    image: "/shop/gamemaker.png",
  },
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    description: "A solid mechanical keyboard for late night game jams.",
    price: 1000,
    hours: 20,
    image: "/shop/keyboard.png",
  },
  {
    id: "sony-headphones",
    name: "Sony WH-1000XM4",
    description: "Noise cancelling headphones to get in the zone.",
    price: 2500,
    hours: 50,
    image: "/shop/sony-headphones.png",
  },
  {
    id: "a1-mini",
    name: "Bambu Lab A1 Mini",
    description: "A fast, quiet 3D printer. Print your own game props and cases.",
    price: 2500,
    hours: 50,
    image: "/shop/a1-mini.png",
  },
  {
    id: "monitor-4k",
    name: '27" 4K Monitor',
    description: "A 27 inch 4K monitor. Your pixels deserve more pixels.",
    price: 3000,
    hours: 60,
    image: "/shop/monitor-4k.png",
  },
  {
    id: "ipad",
    name: "iPad (11th gen)",
    description: "An iPad with pencil support for drawing and playtesting.",
    price: 4500,
    hours: 90,
    image: "/shop/ipad.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function ShopCard({ item }: { item: { id: string; name: string; description?: string; image: string; price?: number; hours?: number; sidequest?: string } }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col border-2 border-black bg-[#fffaf7] hover:-translate-y-1 hover:-translate-x-1 transition-all cursor-pointer"
      style={{ boxShadow: "4px 4px 0px #000" }}
      whileHover={{ boxShadow: "8px 8px 0px #000" } as any}
    >
      <div className="aspect-square bg-[#fffaf7] border-b-2 border-black flex items-center justify-center overflow-hidden p-3">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="px-3 py-3 flex flex-col gap-1">
        <p className="font-pixel text-sm leading-snug">{item.name}</p>
        {item.sidequest && (
          <p className="text-[10px] font-sans text-black/50 leading-snug">{item.sidequest}</p>
        )}
        {!item.sidequest && item.description && (
          <p className="text-[10px] font-sans text-black/50 leading-snug">{item.description}</p>
        )}
        {item.price && (
          <div className="flex items-baseline gap-2">
            <p className="font-pixel text-[#ff8c37] text-lg">{item.price}px</p>
            <p className="text-[10px] font-sans text-black/40">~{item.hours}h</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Shop() {
  return (
    <section className="my-10 md:my-20 px-4 md:px-8 flex flex-col items-center gap-16" id="shop">
      <div className="text-center">
        <motion.p
          className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2 font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Spend your pixels
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          The Shop
        </motion.h2>
        <motion.p
          className="mt-3 text-black/60 text-base md:text-lg max-w-xl mx-auto font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Earn pixels by completing sidequests and spend them on real rewards.
        </motion.p>
        <motion.p
          className="mt-2 text-black/50 text-sm font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          The shop is still under construction and isn&apos;t complete yet, more items coming!
        </motion.p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-12">
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-pixel text-xl">Sidequest Rewards</span>
            <span className="text-[10px] font-sans font-bold bg-[#ec3750] text-white px-2 py-0.5">
              Sidequest only
            </span>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sidequestRewards.map((item) => (
              <ShopCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-pixel text-xl">General Shop</span>
            <span className="text-[10px] font-sans font-bold bg-[#ff8c37] text-white px-2 py-0.5">
              Pixels only
            </span>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {generalItems.map((item) => (
              <ShopCard key={item.id} item={item} />
            ))}
          </motion.div>
          <motion.p
            className="font-pixel text-center text-black/50 text-lg mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ...and even more coming!
          </motion.p>
        </div>
      </div>
    </section>
  );
}
