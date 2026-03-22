import type { ProfileData } from '@/types/profile';

export const profileData: ProfileData = {
  name: 'Fuad Muslim N.S',
  headline: 'English Teacher | UI/UX Enthusiast | Lifelong Learner',
  summary: [
    'Saya adalah English teacher yang fokus membantu pelajar memahami bahasa Inggris secara bertahap, praktis, dan percaya diri.',
    'Saya menggabungkan pendekatan pembelajaran yang terstruktur dengan media digital interaktif agar proses belajar terasa lebih hidup.',
    'Selain mengajar, saya mengeksplorasi UI/UX untuk membangun pengalaman belajar online yang jelas, ringan, dan mudah diikuti.',
  ],
  location: 'Kp. Siluman, Desa Setiaratu, Kec. Cibeureum, Kota Tasikmalaya, Jawa Barat',
  teachingFocus: {
    methods: ['pronunciation', 'vocabulary', 'grammar', 'speaking'],
    targets: [
      'Pelajar SMP/SMA yang ingin lebih percaya diri',
      'Pemula yang ingin membangun fondasi grammar dan vocabulary',
      'Learner mandiri yang butuh struktur belajar konsisten',
    ],
    formats: [
      'Kelas online interaktif',
      'Sesi latihan percakapan terarah',
      'Tugas mingguan dengan evaluasi progres',
    ],
  },
  skills: [
    { name: 'Next.js', level: 'Beginner', badgeColor: 'from-plum-500 to-violet-700' },
    { name: 'TypeScript', level: 'Beginner', badgeColor: 'from-amethyst-500 to-indigo-700' },
    { name: 'Tailwind CSS', level: 'Beginner', badgeColor: 'from-royal-purple-500 to-violet-800' },
    { name: 'UI Motion', level: 'Beginner', badgeColor: 'from-magenta-500 to-purple-700' },
    { name: 'Content Writing', level: 'Beginner', badgeColor: 'from-orchid-500 to-violet-700' },
  ],
  projects: [
    {
      title: 'Learning English Geuwat',
      description:
        'Website pembelajaran bahasa Inggris dengan materi praktis, latihan interaktif, dan alur belajar bertahap untuk pemula.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'Prototype',
      link: 'https://learningenglishgeuwat-ten.vercel.app/',
    },
  ],
  socialLinks: [
    {
      platform: 'Facebook',
      url: 'https://web.facebook.com/fuadmuslym/',
      icon: 'facebook',
      label: 'Facebook',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fuad-muslim-nur-syamsodik-b8b014206/?locale=in',
      icon: 'linkedin',
      label: 'LinkedIn',
    },
    {
      platform: 'Discord',
      url: 'https://discord.com/invite/wZAc38ect?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnC7aYCcPIjfe0CLlAEDSulvxin8uCA_e4NeW31yyenU7-hZ4nrvoXPK38dqI_aem_e68am_lI_749wtyEaK3R3Q',
      icon: 'discord',
      label: 'Discord',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/fuadmuslym/',
      icon: 'instagram',
      label: 'Instagram',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/learningenglishgeuwat/',
      icon: 'instagram',
      label: 'Instagram Learning English Geuwat',
    },
    {
      platform: 'Email',
      url: 'mailto:fuadmuslim4@gmail.com',
      icon: 'mail',
      label: 'fuadmuslim4@gmail.com',
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/6282338792512',
      icon: 'message-circle',
      label: '082338792512',
    },
  ],
};
