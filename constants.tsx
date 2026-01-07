
import React from 'react';
import { Utensils, Zap, ShieldCheck, Heart, Star } from 'lucide-react';
import { MenuItem, Testimonial, Feature } from './types';

export const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor asli

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'k1',
    category: 'Kasoami',
    name: 'Kasoami Original',
    description: 'Kasoami murni dari singkong pilihan tanpa bahan pengawet.',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'k2',
    category: 'Kasoami',
    name: 'Kasoami Lauk Pendamping',
    description: 'Paket Kasoami lengkap dengan ikan masak parende dan sayur.',
    price: 'Rp 35.000',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e1',
    category: 'Es Teler',
    name: 'Es Teler Original',
    description: 'Perpaduan alpukat, nangka, dan kelapa muda yang menyegarkan.',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e2',
    category: 'Es Teler',
    name: 'Es Teler Premium',
    description: 'Es Teler dengan tambahan topping durian medan dan keju parut.',
    price: 'Rp 30.000',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop'
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
    name: 'Budi Santoso',
    comment: 'Kasoaminya sangat lembut dan otentik. Mengobati rasa kangen kampung halaman!',
    rating: 5,
    image: 'https://picsum.photos/seed/budi/100/100'
  },
  {
    id: 2,
    name: 'Sari Wijaya',
    comment: 'Es teler premiumnya juara banget! Duriannya kerasa banget dan porsinya besar.',
    rating: 5,
    image: 'https://picsum.photos/seed/sari/100/100'
  },
  {
    id: 3,
    name: 'Andi Pratama',
    comment: 'Pelayanan cepat dan rasa tetap konsisten. Cocok buat acara keluarga.',
    rating: 4,
    image: 'https://picsum.photos/seed/andi/100/100'
  }
];
