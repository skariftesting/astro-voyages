# Astro Voyages 🚀

Astro Voyages is a futuristic space tourism web application that allows users to explore and book journeys to various celestial destinations. Built with React, Vite, and Supabase, this application provides a seamless experience for space enthusiasts to plan their next interstellar adventure.

![Astro Voyages](public/og-image.png)

## 🌟 Features

- **Interactive Destination Exploration**: Browse through various space destinations with detailed information
- **User Authentication**: Secure login and registration system powered by Supabase
- **Booking System**: Select and book your preferred space travel package
- **User Dashboard**: Track your bookings and manage your profile
- **Responsive Design**: Fully responsive UI that works on all devices

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Build Tool**: Vite
- **Backend/Auth**: Supabase
- **State Management**: React Context API, TanStack Query
- **Routing**: React Router

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/astro-voyages.git
   cd astro-voyages
   ```

2. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env`
   ```sh
   cp .env.example .env
   ```
   - Update the `.env` file with your Supabase credentials

4. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## 🌐 Deployment

### Building for Production

```sh
npm run build
# or
yarn build
```

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure the environment variables in Vercel dashboard
4. Deploy!

### Deploying to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3aeea300-69d0-4bb8-bcb3-ba3764e4698b) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
