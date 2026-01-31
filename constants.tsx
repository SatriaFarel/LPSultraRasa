
import React from 'react';
import { Utensils, Zap, ShieldCheck, Heart, Star } from 'lucide-react';
import { MenuItem, Testimonial, Feature } from './types';


export const WHATSAPP_NUMBER = "6288299309375"; // Ganti dengan nomor asli

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'k1',
    category: 'Kasoami',
    name: 'Kasoami',
    description: 'Kasoami adalah makanan khas Sulawesi Tenggara berbahan dasar singkong pilihan. Teksturnya lembut, padat, dan gurih alami. Dibuat secara tradisional dengan cita rasa autentik, cocok disantap sebagai camilan',
    price: 'Rp 8.000',
    image: 'kasoami.jpg'
  },
  {
    id: 'e1',
    category: 'Es Teler',
    name: 'Es Teler',
    description: 'Es teler segar dengan isian buah pilihan, alpukat lembut, kelapa muda, dan nangka yang harum. Disiram susu manis dan es yang menyegarkan, rasanya manis, creamy, dan pas banget buat pelepas dahaga kapan saja.',
    price: 'Rp 10.000',
    image: 'EsTeler.webp'
  },
  {
    id: 'd1',
    category: 'Paket',
    name: "Kasoami dan Es Teler",
    description: "Kasoami lembut khas Sultra dipadu Es Teler segar berisi buah pilihan dan susu manis. Manis, gurih, dan menyegarkan dalam satu paket",
    price: "Rp 15.000",
    image: "image2 jpg" 
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Resep Tradisional',
    description: 'Menggunakan bumbu rahasia warisan leluhur Sultra yang autentik.',
    icon: <Utensils className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Bahan Segar',
    description: 'Dipasok setiap hari untuk menjamin kualitas rasa yang maksimal.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Higienis & Halal',
    description: 'Proses pengolahan bersih dan telah bersertifikasi Halal.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Harga Terjangkau',
    description: 'Kualitas rasa bintang lima dengan harga ramah di kantong.',
    icon: <Heart className="w-6 h-6" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'KishiYuusha',
    comment: 'Kasoaminya sangat lembut dan otentik. Mengobati rasa kangen kampung halaman!',
    rating: 5,
    image: 'https://picsum.photos/seed/budi/100/100'
  },
  {
    id: 2,
    name: 'Dreamy Sand',
    comment: 'Es teler premiumnya juara banget! Duriannya kerasa banget dan porsinya besar.',
    rating: 5,
    image: 'https://picsum.photos/seed/sari/100/100'
  },
  {
    id: 3,
    name: 'Ryzen',
    comment: 'Pelayanan cepat dan rasa tetap konsisten. Cocok buat acara keluarga.',
    rating: 4,
    image: 'https://picsum.photos/seed/andi/100/100'
  }
];
