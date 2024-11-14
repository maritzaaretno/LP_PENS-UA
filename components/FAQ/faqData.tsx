import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Cara Akses Sistem Sebagai Pasien?",
    ans: `
      Registrasi Pasien dengan mengisi formulir pendaftaran yang mencakup data pribadi seperti nama, alamat, nomor kontak, 
      serta informasi penting lainnya. Pastikan data diisi dengan lengkap dan benar untuk memudahkan proses verifikasi. 
      Akun pasien akan diverifikasi oleh radiografer kami untuk memastikan keaslian dan kelengkapan data. 
      Proses ini memastikan bahwa akun yang dibuat adalah valid dan dapat digunakan di dalam sistem. 
      Setelah akun diverifikasi, pasien dapat mengakses akun dan melihat hasil pemeriksaan dan riwayat medis yang dikirimkan.
    `,
  },
  
  {
    id: 2,
    quest: "Berapa Tingkat Akurasi Deteksi Tooth Loss?",
    ans: "Akurasi deteksi kehilangan gigi (tooth loss detection) kami bervariasi antara 85% hingga 92%, tergantung pada kondisi dan kualitas data radiograf yang diproses. Teknologi ini terus disempurnakan untuk memberikan hasil yang lebih akurat dan andal.",
  },
  {
    id: 3,
    quest: "Apakah Data Pasien Aman di Sistem Ini?",
    ans: "Keamanan data adalah prioritas utama kami. Sistem kami didukung oleh layanan cloud dengan proteksi berlapis untuk menjaga kerahasiaan dan integritas data pasien agar selalu aman dan terlindungi dari akses tidak sah.",
  },
];

export default faqData;
